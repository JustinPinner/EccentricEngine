const uuidv4 = require('uuid/v4');
import { Vector2D, Point2D, Math2D } from '../lib/lib2d';
import { FSM } from '../lib/fsm';
import { AudioEffect } from '../lib/audio';
import { Sprite } from '../model/sprite';
import { Logger } from '../lib/logger';

class GameObject {
	constructor(conf, position, engine, deferEvents) {
    this.engine = engine;
		this.isReady = false;
    this.disposable = false;
    this.drawable = false;    
    this.id = uuidv4();
    this._collisionsSuspended = false;
    this.maxStartupMillis = 500;  // <- tune if this.initDone is being triggered too soon or too late
		this.engine.eventSystem.registerEvent(`${this.id}-Loaded`);
		this.engine.eventSystem.addEventListener(`${this.id}-Loaded`, this.init.bind(this));
    this.conf = conf;
    this.conf.position = position;
		this.coordinates = this.conf.position ? new Point2D(this.conf.position.x, this.conf.position.y) : {};
		this.velocity = new Vector2D(
			(this.conf.initialVelocity && this.conf.initialVelocity.x) ? this.conf.initialVelocity.x : 0, 
			(this.conf.initialVelocity && this.conf.initialVelocity.y) ? this.conf.initialVelocity.y : 0
		);
		this.vertices = [];
    this.sprites = [];	    // --|\ will be loaded during the init call triggered 
    this.soundEffects = []; // --|/ by the xxx-Loaded event
    this.scale = this.conf.scale;
		this.mass = this.conf.mass;
    this.collisionCentres = this.conf.collisionCentres;
    this.rotation = 0;
    if (conf.update) {
		  this.update = conf.update.bind(this, this);
    }
    this.focussed = false;
		this.fsm = conf.role ? new FSM(this, conf.role) : undefined;
		this.engine.eventSystem.registerEvent(`${this.id}`);
		this.engine.eventSystem.addEventListener(`${this.id}`, this.eventListener.bind(this, this));
    this.engine.registerObject(this);
    this.logger = new Logger(this);		
		// v-- this must be last --v
    if (!deferEvents) this.engine.eventSystem.dispatchEvent(`${this.id}-Loaded`);
	}
  get ready() {
    return this.isReady && !this.disposable;
  }
  get type() {
		return this.constructor.name;
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
  get model() {
    return this.conf;
  }
  get canCollide() {
    return !this._collisionsSuspended &&
     (this.conf && this.conf.detectCollisions) || 
     (this.fsm && this.fsm.currentAction && this.fsm.currentAction.detectCollisions);
  }
  get isFocussed() {
    return this.focussed;
  }
  get width() {
    const w = this.conf.width || 1;
    if (this.scale && !isNaN(this.scale.x)) {
      return w * this.scale.x;
    }
    return w;
  }
  get height() {
    const h = this.conf.height || 1;
    if (this.scale && !isNaN(this.scale.y)) {
      return h * this.scale.y;
    }
    return h;
  }

  set canDraw(boolValue) {
    this.drawable = boolValue;
  }
  set isFocussed(boolValue) {
    this.focussed = boolValue || false;
  }
  set ready(boolValue) {
    this.isReady = boolValue;
  }
  set collisionsSuspended(boolVal) {
    this._collisionsSuspended = boolVal;
  }
}

GameObject.prototype.log = function(message) {
  this.logger.logAction(message);
}

GameObject.prototype.eventListener = function (thisObj, evt) {
  const thisId = this.id;
  const otherId = thisObj.id == thisId ? 'itself' : `obj id:${otherId}`;
  const eventDescription = `${evt.target} -> ${evt.action}`;
	this.log(`GameObject eventListener on ${thisId} (type ${this.type}) caught an event of type ${eventDescription} intended for ${otherId}. Implement a handler in the descendant object's class.`);
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
		this.log('gameobject.prototype.loadStatus called with no _role or _role.initialStatus');
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
  this.engine.timers.add(`${this.id}-InitDone`, null, this.maxStartupMillis, this.initDone.bind(this), [this]);
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
	if (this.coordinates && this.velocity && this.velocity.length > 0) {
		this.coordinates.x += isNaN(this.velocity.x) ? 0 : this.velocity.x;
		this.coordinates.y += isNaN(this.velocity.y) ? 0 : this.velocity.y;
	}
}

GameObject.prototype.canCollideWith = function(that) {
  return this !== that;
}

GameObject.prototype.collide = function(otherGameObject) {
  const getCoords = function(obj) {
    return obj.coordinates.origin ? obj.coordinates.origin : obj.coordinates
  }

  if (!this.canCollideWith(otherGameObject)) {
    return;
  }
	if (this.collisionCentres.length == 0 || otherGameObject.collisionCentres.length == 0) {
		return;
	}
  // iterate over each object's collision radii
  let stopDetecting = false;
	for (const myCentre in this.collisionCentres) {
    if (stopDetecting) {
      break;
    }
		const myCollisionCentre = this.collisionCentres[myCentre].scaled ? 
			this.collisionCentres[myCentre].scaled : 
			this.collisionCentres[myCentre];
		for (const theirCentre in otherGameObject.collisionCentres) {			
      if (stopDetecting) {
        break;
      }
      const theirCollisionCentre = otherGameObject.collisionCentres[theirCentre].scaled ?
      otherGameObject.collisionCentres[theirCentre].scaled : 
      otherGameObject.collisionCentres[theirCentre];

      const x1 = getCoords(this).x + myCollisionCentre.x;
      const y1 = getCoords(this).y + myCollisionCentre.y;
      const x2 = getCoords(otherGameObject).x + theirCollisionCentre.x;
      const y2 = getCoords(otherGameObject).y + theirCollisionCentre.y;

			const dx = x1 - x2;
      const dy = y1 - y2;

			const distance = Math.sqrt((dx * dx) + (dy * dy));		
      
      if (distance <= myCollisionCentre.radius + theirCollisionCentre.radius) {
        // TODO: implement as collision groups
        stopDetecting = true;
        
        // TODO: move this into a custom collider on the decendant object
        // if (otherGameObject instanceof Pickup && this instanceof Ship) {
				// 	if (otherGameObject.source !== this) {
				// 		if (otherGameObject.payload instanceof Weapon) {
				// 			this.collectWeapon(otherGameObject);
				// 		} else {
				// 			this.collectPowerUp(otherGameObject);
				// 		}
				// 		otherGameObject.disposable = true;
				// 		return;
				// 	}	
				// } else if (this instanceof Pickup && otherGameObject instanceof Ship) {
				// 	if (this.source !== otherGameObject) {
				// 		if (this.payload instanceof Weapon) {
				// 			otherGameObject.collectWeapon(this);							
				// 		} else {
				// 			otherGameObject.collectPowerUp(this);
				// 		}
				// 		this.disposable = true;
				// 		return;
				// 	}
				// } else if (this instanceof Pickup || otherGameObject instanceof Pickup) {
				// 	// pickups do not take/cause damage
				// 	return;
        // }
        //
        // Suspend further collision detection for a short time
        // this.collisionsSuspended = true;
        // otherGameObject.collisionsSuspended = true;
        // this.engine.timers.add(
        //   `ResumeCollisions${this.id}${otherGameObject.id}`, 
        //   1000, 
        //   undefined, 
        //   (a, b, e) => {
        //     a.collisionsSuspended = false; 
        //     b.collisionsSuspended = false;
        //     e.timers.cancel(`ResumeCollisions${a.id}${b.id}`)
        //   }, 
        //   [this, otherGameObject, this.engine]
        // );
        // this.engine.timers.start(`ResumeCollisions${this.id}${otherGameObject.id}`);
        
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
  const getCoords = function(obj) {
    return obj.coordinates.centre ? obj.coordinates.centre : obj.coordinates
  }
	if (!this.canCollide) {
		return;
	}
  const self = this;
  // remove anything that doesn't collide with this object
  const collidables = this.engine.objects.filter(function(that) {
    return that.canCollide && self.canCollideWith(that);
  });
  // remove anything not on the same z plane
	const candidates = collidables.filter(function(that) {
    return that !== self && ((getCoords(self).z) || 0) == ((getCoords(that).z) || 0);
  });
  // collect what's left and within local proximity
  const localCandidates = candidates.filter(function(that){
    // draw a circle to enclose the whole object (self)
		const thisCirc = {
			x: getCoords(self).x,
			y: getCoords(self).y,
			r: (self.width > self.height ?  self.width : self.height) / 2
    };
    // and again for the collision candidate
		const thatCirc = {
			x: getCoords(that).x,
			y: getCoords(that).y,
			r: (that.width > that.height ? that.width : that.height) / 2
		};
    // test for proximity
    const dx = thisCirc.x - thatCirc.x;
		const dy = thisCirc.y - thatCirc.y;
		const distance = Math.sqrt((dx * dx) + (dy * dy));		
  
		return distance <= thisCirc.r + thatCirc.r;

  })
  // run fine-detail checks for any collision candidates
  if (localCandidates.length > 0) {
		for (var c = 0; c < localCandidates.length; c++) {
			self.collide(localCandidates[c]);
		}		
	}
}

// abstract
GameObject.prototype.takeHit = function(source) {};

GameObject.prototype.isOnScreen = function() {
  return this.engine.canvas('viewport').containsObject(this);
};

GameObject.prototype.update = function() {
  if (!this.ready) return;
  this.updatePosition();
  this.collisionDetect();
  if (this.fsm) {
		this.fsm.execute();
	}
}

GameObject.prototype.draw = function() {
	if (!this.ready || !this.canDraw || this.disposable) return;
	if (!this.isOnScreen()) return;

  this.preDraw && this.preDraw();

  const viewport = this.engine.canvas('viewport');
  if (!viewport || !viewport.isReady) return;

	viewport.context.save();
	if (this.rotation) {
		viewport.context.rotate(Math2D.degreesToRadians(this.rotation + 90));
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
  this.update();
  this.draw();
};

export {
  GameObject
};
