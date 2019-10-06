const uuidv4 = require('uuid/v4');
import { Vector2D, Point2D } from '../lib/2d';
import { FSM } from '../lib/fsm';
import { AudioEffect } from '../lib/audio';
import { Sprite } from '../model/sprite';
import { debug } from 'util';

export class GameObject {
	constructor(conf, position, engine) {
    this.engine = engine;
		this.ready = false;
    this.disposable = false;
    this.drawable = false;    
    this.id = uuidv4();
    this.maxStartupMillis = 500;  // <- tune if this.initDone is being triggered too soon or too late
		this.engine.eventSystem.registerEvent(`${this.id}-Loaded`);
		this.engine.eventSystem.addEventListener(`${this.id}-Loaded`, this.init.bind(this));
		this.conf = conf;
    this.conf.position = position;
		this.coordinates = this.conf.position ? new Point2D(this.conf.position.x, this.conf.position.y) : undefined;
		this.velocity = new Vector2D(
			(this.conf.initialVelocity && this.conf.initialVelocity.x) ? this.conf.initialVelocity.x : 0, 
			(this.conf.initialVelocity && this.conf.initialVelocity.y) ? this.conf.initialVelocity.y : 0
		);
		this.width = this.conf.width;
		this.height = this.conf.height;
		this.vertices = [];
    this.sprites = [];	    // --|\ will be loaded during the init call triggered 
    this.soundEffects = []; // --|/ by the xxx-Loaded event
    this.scale = this.conf.scale;
		this.mass = this.conf.mass;
    this.collisionCentres = this.conf.collisionCentres;
		this.rotation = 0;
		this.update = conf.update.bind(this, this);
		this.fsm = conf.fsmStates ? new FSM(this, conf.fsmStates) : undefined;
		this.engine.eventSystem.registerEvent(`${this.id}`);
		this.engine.eventSystem.addEventListener(`${this.id}`, this.eventListener.bind(this, this));
		this.engine.registerObject(this);		
		// v-- this must be last --v
		this.engine.eventSystem.dispatchEvent(`${this.id}-Loaded`);
	}
	get type() {
		return this.conf.type;
	}
	get centre() {
		if (!this.coordinates) {
			return undefined;
    }
		return {
			x: this.coordinates.x + this.width / 2,	//rotated.x,
			y: this.coordinates.y + this.height / 2 //rotated.y
		}
	}
	get rotatedCoordinates() {
		if (!this.coordinates) {
			return undefined;
		}
		const rotated = this.coordinates.rotate(this.centre, degrees);
		return rotated;
  }
  get canDraw() {
    return this.drawable;
  }
  set canDraw(boolValue) {
    this.drawable = boolValue;
  }
}

GameObject.prototype.eventListener = function (thisObj, evt) {
  const thisId = this.id;
  const otherId = thisObj.id == thisId ? 'itself' : `obj id:${otherId}`;
  const eventDescription = `${evt.target} -> ${evt.action}`;
	console.log(`GameObject eventListener on ${thisId} (type ${this.type}) caught an event of type ${eventDescription} intended for ${otherId}. Maybe consider implementing a handler in the descendant object's class.`);
}

GameObject.prototype.rotate = function(degrees) {
	this.rotation = degrees;
}

GameObject.prototype.loadVertices = function() {
	if (!this.conf.vertexMap) {
		return;
	}
	this.vertices = [];
	for (let v = 0; v < this.conf.vertexMap.length; v += 1) {
		const vertex = this.conf.vertexMap[v];
		const scaled = {
			connectsTo: vertex.connectsTo,
			id: vertex.id,
			x: this.scaleWidth(vertex.x),
			y: this.scaleHeight(vertex.y)
		};
		this.vertices.push(scaled);
	}
}

GameObject.prototype.loadCollisionCentres = function() {
	this.collisionCentres = [];
	if (this.conf.collisionCentres) {
		for (const collCtrGrp in this.conf.collisionCentres) {
			const collCtr = this.conf.collisionCentres[collCtrGrp];
			this.collisionCentres.push(collCtr);
		}
	}
}

GameObject.prototype.loadStatus = function() {
	if (!this._role || !this._role.initialStatus) {
		game.log(new LoggedEvent('gameobject.prototype.loadStatus', 'called with no _role or _role.initialStatus'));
		return;
	}
	this._status = this._role.initialStatus;
}

GameObject.prototype.loadSprites = function() {
	if (this.conf.sprites) {
		for(let s in this.conf.sprites) {
			const sprite = new Sprite(this.conf.sprites[s], s, this.coordinates, this.engine.images);
			this.sprites.push(sprite);
		}
	}
}

GameObject.prototype.loadSoundEffects = function() {
  for (let e in this.conf.soundEffects) {
    const effectConf = this.conf.soundEffects[e];
    const audioEffect = new AudioEffect(effectConf);
    this.engine.audioSystem.addEffect(audioEffect);
    this.soundEffects.push(audioEffect);
  }
}

GameObject.prototype.init = function() {
  this.loadSprites();
	this.loadVertices();
  this.loadCollisionCentres();
  this.loadSoundEffects();
	if (this.fsm) {
		this.engine.eventSystem.registerEvent(`${this.id}FSM`);
		this.engine.eventSystem.addEventListener(`${this.id}FSM`, this.fsm.eventListener.bind(this.fsm, this));
	}
  this.engine.timers.add(`${this.id}-InitDone`, null, this.maxStartupMillis, this.initDone.bind(this), this);
  this.engine.timers.start(`${this.id}-InitDone`);
  this.ready = true;
  this.canDraw = true;
}

GameObject.prototype.initDone = function() {
  this.engine.eventSystem.deRegisterEvent(`${this.id}-Loaded`);
  this.engine.timers.cancel(`${this.id}-InitDone`);
}

GameObject.prototype.scaleWidth = function(dim) {
	if (this.scale && this.scale.x) {
		return dim * this.scale.x;
	}
	return dim;
}

GameObject.prototype.scaleHeight = function(dim) {
	if (this.scale && this.scale.y) {
		return dim * this.scale.y;
	}
	return dim;
}

GameObject.prototype.scalePoint = function(dim, dir) {
	if (this.scale) {
		if (dir.toLowerCase() == 'w' || 'width' || 'x') {
			 return dim * this.scale.x;
		}
		if (dir.toLowerCase() == 'h' || 'height' || 'y') {
			return dim * this.scale.y;
		}
	}
	return dim;
}

GameObject.prototype.setVelocity = function(newVel2d) {
	this.velocity.x = (newVel2d && newVel2d.x) ? newVel2d.x : this.velocity.x;
	this.velocity.y = (newVel2d && newVel2d.y) ? newVel2d.y : this.velocity.y;
}

GameObject.prototype.updatePosition = function() {
	if (this.coordinates && this.velocity) {
		this.coordinates.x += isNaN(this.velocity.x) ? 0 : this.velocity.x;
		this.coordinates.y += isNaN(this.velocity.y) ? 0 : this.velocity.y;
	}
}

GameObject.prototype.collide = function(otherGameObject) {
	if (this.collisionCentres.length == 0 || otherGameObject.collisionCentres.length == 0) {
		return;
	}
	// iterate over each object's collision radii
	for (myCentre in this.collisionCentres) {
		myCollisionCentre = this.collisionCentres[myCentre].scaled ? 
			this.collisionCentres[myCentre].scaled : 
			this.collisionCentres[myCentre];
		for (theirCentre in otherGameObject.collisionCentres) {			
			const theirCollisionCentre = otherGameObject.collisionCentres[theirCentre].scaled ?
				otherGameObject.collisionCentres[theirCentre].scaled : 
				otherGameObject.collisionCentres[theirCentre];
			const dx = myCollisionCentre.x - theirCollisionCentre.x;
			const dy = myCollisionCentre.y - theirCollisionCentre.y;
			const distance = Math.sqrt((dx * dx) + (dy * dy));		
			if (distance <= myCollisionCentre.radius + theirCollisionCentre.radius) {
				if (otherGameObject instanceof Pickup && this instanceof Ship) {
					if (otherGameObject.source !== this) {
						if (otherGameObject.payload instanceof Weapon) {
							this.collectWeapon(otherGameObject);
						} else {
							this.collectPowerUp(otherGameObject);
						}
						otherGameObject.disposable = true;
						return;
					}	
				} else if (this instanceof Pickup && otherGameObject instanceof Ship) {
					if (this.source !== otherGameObject) {
						if (this.payload instanceof Weapon) {
							otherGameObject.collectWeapon(this);							
						} else {
							otherGameObject.collectPowerUp(this);
						}
						this.disposable = true;
						return;
					}
				} else if (this instanceof Pickup || otherGameObject instanceof Pickup) {
					// pickups do not take/cause damage
					return;
				}
				if (this.mass && otherGameObject.mass) {
					// Apply basic motion transference algorithm
					// from https://gamedevelopment.tutsplus.com/tutorials/when-worlds-collide-simulating-circle-circle-collisions--gamedev-769)
					// a = shape1.vX * (shape1.mass - shape2.mass)
					// b = (2 * shape2.mass * shape2.vX)
					// c = (shape1.mass + shape2.mass)
					//
					// newVelX = (a + b) / c;
					//						
					// d = shape1.vY * (shape1.mass - shape2.mass)
					// e = (2 * shape2.mass * shape2.vY)
					// f = (shape1.mass + shape2.mass)
					//
					// newVelY = (d + e) / f;
					const newVelX1 = ((this.velocity.x * (this.mass - otherGameObject.mass)) +
					(2 * otherGameObject.mass * otherGameObject.velocity.x)) /
					(this.mass + otherGameObject.mass);
					const newVelY1 = ((this.velocity.y * (this.mass - otherGameObject.mass)) +
						(2 * otherGameObject.mass * otherGameObject.velocity.y)) /
						(this.mass + otherGameObject.mass);
					const newVelX2 = ((otherGameObject.velocity.x * (otherGameObject.mass - this.mass)) +
						(2 * this.mass * this.velocity.x)) /
						(this.mass + otherGameObject.mass);
					const newVelY2 = ((otherGameObject.velocity.y * (otherGameObject.mass - this.mass)) +
						(2 * this.mass * this.velocity.y)) /
						(this.mass + otherGameObject.mass);
					this.velocity.x = newVelX1;
					this.velocity.y = newVelY1;
					otherGameObject.velocity.x = newVelX2;
					otherGameObject.velocity.y = newVelY2;
				}
				// Apply damage
				otherGameObject.takeHit(this);
				this.takeHit(otherGameObject);						
			}
		}
	}			
}

GameObject.prototype.collisionDetect = function(x, y) {
	if ((!this._fsm || !this._fsm.state || !this._fsm.state.detectCollisions) && this !== game.localPlayer.ship) {
		return;
	}
	const self = this;
	const candidates = game.objects.filter(function(obj) {
		if (obj === self || 
			obj instanceof Particle ||
			(obj instanceof Munition && obj.shooter === self) ||
			(self instanceof Munition && self.shooter === obj) ||
			(obj.fsm && obj.fsm.state && !obj.fsm.state.detectCollisions)) {
			return false;
		}
		if (obj instanceof ParticleEffect || self instanceof ParticleEffect) {
			return false;
		}
		// cannot collide if at different altitudes
		if (self.coordinates.centre.z !== obj.coordinates.centre.z) {
			return;
		}
		// draw a circle to enclose the whole object
		const selfCirc = {
			x: self.coordinates.centre.x,
			y: self.coordinates.centre.y,
			r: (self.width > self.height ?  self.width : self.height) / 2
		};
		const objCirc = {
			x: obj.coordinates.centre.x,
			y: obj.coordinates.centre.y,
			r: (obj.width > obj.height ? obj.width : obj.height) / 2
		};
		const dx = selfCirc.x - objCirc.x;
		const dy = selfCirc.y - objCirc.y;
		const distance = Math.sqrt((dx * dx) + (dy * dy));		
	
		return distance <= selfCirc.r + objCirc.r;
	});
	if (candidates.length > 0) {
		for (var c = 0; c < candidates.length; c++) {
			self.collide(candidates[c]);
		}		
	}
}

// abstract
GameObject.prototype.takeHit = function(source) {};

GameObject.prototype.isOnScreen = function() {
	return this.engine.canvas('viewport').contains(this.coordinates.x, this.coordinates.y, this.width, this.height, this.rotation);
};

GameObject.prototype.draw = function() {
	if (!this.ready) return;
	if (!this.isOnScreen()) return;
	if (this.disposable) return;
  if (!this.canDraw) return;

  this.preDraw && this.preDraw();

  const viewport = this.engine.canvas('viewport');
  if (!viewport || !viewport.isReady) return;

	viewport.context.save();
	//viewport.context.translate(this.centre.x, this.centre.y);
	if (this.rotation) {
		viewport.context.rotate(degreesToRadians(this.rotation + 90));
	}
	viewport.context.fillStyle = this.conf.colour ? this.conf.colour : '#ffffff';

	if (this.sprite && this.sprite.image) {
		// sub... vars represent sub-sections of a larger image (if applicable)
		let subX = 0;
		let subY = 0;
		let subWidth = this.sprite.width;
		let subHeight = this.sprite.height
		// dest... vars reference the destination within the target canvas
		let destX = this.coordinates.x;
		let destY = this.coordinates.y;
		let destWidth = this.width || this.sprite.width;
		let destHeight = this.height || this.sprite.height;

		// adjust for sub-image properties if required
		if (!isNaN(this.sprite.frame)) {
			const cell = (this.sprite.frame * this.sprite.width) / (this.sprite.width * this.sprite.columns);
			const row = Math.floor(this.sprite.frame / this.sprite.columns);
			const col = (cell - row) * this.sprite.columns;
			subX = this.sprite.width * col;
			subY = this.sprite.height * row;
			subWidth = this.sprite.width;
			subHeight = this.sprite.height;
		}

		viewport.context.drawImage(this.sprite.image, subX, subY, subWidth, subHeight, destX, destY, destWidth, destHeight);
		
		// debug: draw bounding boxes
		// viewport.context.beginPath();
		// viewport.context.strokeStyle = "white";
		// viewport.context.moveTo(dx, dy);
		// viewport.context.lineTo(dx + dWidth, dy);
		// viewport.context.moveTo(dx + dWidth, dy);
		// viewport.context.lineTo(dx + dWidth, dy + dHeight);
		// viewport.context.moveTo(dx + dWidth, dy + dHeight);
		// viewport.context.lineTo(dx, dy + dHeight);
		// viewport.context.moveTo(dx, dy + dHeight);
		// viewport.context.lineTo(dx, dy);
		// viewport.context.stroke();

	} else if(this.width !== 0 && this.height !== 0) {
		viewport.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
	}
	viewport.context.restore();
};

GameObject.prototype.updateAndDraw = function() {
	if (this.disposable) return;
	this.updatePosition();
	this.collisionDetect();
	this.draw();
	if (this._fsm && this._fsm.execute) {
		this._fsm.execute();
	}
};

// export {
//    GameObject
// };
