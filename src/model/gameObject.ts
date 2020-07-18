const uuidv4 = require('uuid/v4');
import { Math2D } from '../lib/lib2d';
import { Vector2d } from '../lib/vector2d';
import { Point2d } from '../lib/point2d';
import { Vertex } from '../lib/vertex';
import { StateMachine, StateMachineState } from '../lib/stateMachine';
import { AudioEffect } from '../lib/audio';
import { Sprite } from './sprite';
import { Logger } from '../lib/logger';
import { Engine } from '../engine/engine';
import { Canvas } from '../environment/canvas';
import { GameEvent, EventTrigger } from '../lib/events';


class Collider {
  parent: GameObject;
  vertices: Vertex[];
  resolveCoarse: (gameObjectOther: GameObject) => boolean;
  resolveFine: (gameObjectOther: GameObject) => boolean;
};

class GameObjectBody {
  isCurrent: boolean;
  sprite: Sprite;
  collider: Collider;
};

abstract class GameObject {
  // these methods will be called during initialisation
  abstract load(): void;
  abstract loaded(): void;
  // these methods will be called during the game's main loop
  abstract update(): void;
  abstract move(): void;
  abstract draw(canvas: Canvas): void;
  // this method will be called upon receipt of a collide event message
  abstract collide(): void;
  // this method will be called upon recept of a terminate event message
  abstract terminate(): void;

  private transmissions: GameEvent[];

  private receive(rx: GameEvent): void {
    switch (rx.trigger.name) {
      case ('ack'):
        // our message was received by the recipient
        if (this.transmissions[`${rx.senderId}.${rx.trigger.name}`]){
          delete this.transmissions[`${rx.senderId}.${rx.trigger.name}`]
        }
        break;
      default:
        if (rx.trigger.action) {
          rx.trigger.fire();
        }
        break;
    };   
    if (rx.acknowledge) {
      // generate an acknwledgement
      const ackThis: boolean = false;
      const trigger: EventTrigger = new EventTrigger('ack', () => { return true; });
      const ack: GameEvent = new GameEvent(this.id, rx.senderId, trigger, ackThis);
      this.transmit(ack);
    }
  };

  private transmit(event: GameEvent): void {
    if (event.acknowledge) {
      // we expect an ack for this message - push it to the watch list
      this.transmissions[`${event.recipientId}.${event.trigger.name}`] = event;  
    }
    this.engine.dispatchEvent(event.recipientId, event.trigger.name, event.trigger);  
  };

  public eventListener(gameEvent: GameEvent): void {
    if(gameEvent.recipientId === this.id) this.receive(gameEvent);
  };

  protected parent: GameObject;
  public id: string;
  public isReady: boolean;
  public disposable: boolean;
  public canDraw: boolean;
  public canCollide: boolean;
  public bodies: GameObjectBody[];
  public audioEffects: AudioEffect[];
  public rotatedDegrees: number;
  public focussed: boolean;
  public finiteStateMachine?: StateMachine;
  protected scale: Point2d;
  private logger: Logger;

	constructor(
    public coordinates: Point2d,
    public velocity: Vector2d, 
    protected engine: Engine, 
    public vertices: Vertex[],
    public collisionCentres: Point2d[],
    public mass: number,
    public stateMachineStates?: StateMachineState[],
    scale?: Point2d,
    parentObject?: GameObject
  ) {
		this.isReady = false;
    this.disposable = false;
    this.canDraw = false;    
    this.id = uuidv4();
    this.canCollide = false;
		this.finiteStateMachine = stateMachineStates ? new StateMachine(this, stateMachineStates) : undefined;
    this.engine.registerEvent(this.id);
    if (this.finiteStateMachine) {
      this.engine.addEventListener(this.id, 'fsm', this.eventListener.bind(this, this));
    }
    this.engine.addEventListener(this.id, 'chat', this.eventListener.bind(this, this));
    this.engine.addEventListener(this.id, 'loaded', this.loaded.bind(this, this));
    this.scale = scale || new Point2d(1,1);
    this.rotatedDegrees = 0;
    this.focussed = false;
    this.engine.registerObject(this);
    this.logger = new Logger(this);
    this.parent = parentObject;
		// v-- this must be last --v
    this.engine.dispatchEvent(`${this.id}`, 'loaded', []);
  };

  get ready() {
    return this.isReady && !this.disposable;
  };

  get type() {
		return this.constructor.name;
  };

	get centre(): Point2d {
    const pos = this.coordinates.clone();
    pos.add(new Vector2d(this.width / 2, this.height / 2));
    return pos;
  };
  
	get rotatedCoordinates() {
		if (!this.coordinates) {
			return undefined;
		}
		const rotated = this.coordinates.rotate(this.centre, this.rotatedDegrees);
		return rotated;
  };

  get isFocussed() {
    return this.focussed;
  };

  get width() {
    const w = this.width || 1;
    if (this.scale) {
      return w * this.scale.x;
    }
    return w;
  };

  get height() {
    const h = this.height || 1;
    if (this.scale) {
      return h * this.scale.y;
    }
    return h;
  };

  // set canDraw(boolValue) {
  //   this.drawable = boolValue;
  // }

  set isFocussed(val: boolean) {
    this.focussed = val;
  };

  set ready(val: boolean) {
    this.isReady = val;
  };

  set collisionsSuspended(val: boolean) {
    this.canCollide = val;
  };

  // methods
  canCollideWith(that: GameObject) {
    return this.canCollide && this !== that;
  };

  isOnScreen() {
    return this.engine.canvas('viewport').containsObject(this);
  };

  log(message: string): void {
    this.logger.logAction(message);
  };

  rotate(degrees: number): void {
    this.rotatedDegrees = degrees;
  };

  scaleHeight(val: number): number {
    if (this.scale && this.scale.y) {
      return val * this.scale.y;
    }
    return val;
  };

  scaleWidth(val: number): number {
    if (this.scale && this.scale.x) {
      return val * this.scale.x;
    }
    return val;
  };

  setVelocity(vector2d: Vector2d) {
    this.velocity = vector2d;
  };

  // TODO: implement in move method
  // updatePosition() {
  //   if (this.coordinates && this.velocity && this.velocity.length > 0) {
  //     this.coordinates.add(this.velocity);
  //   }
  // };

  // TODO: implement in 
  collisionDetect(x, y) {
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
  };

};

export {
  GameObject
};
