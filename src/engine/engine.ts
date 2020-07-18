const uuidv4 = require('uuid/v4');
import { EventSystem, GameEvent, EventTrigger } from '../lib/events';
import { AudioSystem } from '../lib/audio';
import { Canvas } from '../environment/canvas';
import { TouchInterface, TouchHandler } from '../ui/touch';
import { KeyHandler } from '../ui/keys';
import { GamepadHandler } from '../ui/gamepad';
import { partition } from '../lib/partition';
import { ImageService } from '../utils/image';
import { TimerSystem } from '../lib/timer';
import { Formatter } from '../lib/format';
import { Logger } from '../lib/logger';
import { GameObject } from '../model/gameObject';
import { Configuration } from './configuration';
import { config } from 'process';
import { Coordinate2d } from '../lib/coordinate';
import { Point2d } from '../lib/point2d';

class Engine {
  private id: string = 'ENGINE';
  private eventSystem: EventSystem;
  private audioSystem: AudioSystem;
  private timerSystem: TimerSystem;
  private imageService: ImageService;
  private canvasses: Canvas[];
  private hasTouchSupport: boolean = (window.navigator && window.navigator.maxTouchPoints > 0);
  private keyHandler: KeyHandler;
  private gamepadHandler: GamepadHandler;
  private touchHandler: TouchHandler;
  private gameObjects: GameObject[];
  private ticks: number = 0;
  private formatter: Formatter;
  private logger: Logger;
  private transmissions: [];
  private onSetup: () => boolean;
  private onStart: () => boolean;
  private onTick: () => boolean;
  private timing: object = {};
  private windowInterval: number;
  private windowTimeout: number;

  private debug?: boolean;

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

  private transmit(event: GameEvent, args?: any[]): void {
    if (event.acknowledge) {
      // we expect an ack for this message - push it to the watch list
      this.transmissions[`${event.recipientId}.${event.trigger.name}`] = event;  
    }
    this.dispatchEvent(event.recipientId, event.trigger.name, args);  
  };

  constructor(configuration: Configuration) {
    this.formatter = new Formatter();
    this.debug = configuration.debug;
    this.eventSystem = new EventSystem(this.debug);
    this.audioSystem = new AudioSystem();
    this.timerSystem = new TimerSystem(this, this.debug);
    this.imageService = new ImageService(configuration.imagePath);
		this.eventSystem.registerEvent(this.id);
		this.eventSystem.addEventListener(this.id, 'engine', this.receive.bind(this, this));
    this.onSetup = configuration.lifeCycle.onSetup;
    this.onStart = configuration.lifeCycle.onStart;
    this.onTick = configuration.lifeCycle.onTick;
    this.logger = new Logger(this);
    this.keyHandler = null;
    if (configuration.enableGamepadUI) {
      this.gamepadHandler = new GamepadHandler();
    }
    if (configuration.enableTouchUI && this.hasTouchSupport) {
      this.touchHandler = new TouchHandler();
    }
    configuration.canvasses.forEach((canvas) => {
      this.canvasses.push(canvas);
    });
    // default canvas if none sent in config
    if (this.canvasses.length < 1) {
      const canvas = new Canvas(
        new Point2d(0,0),
        window.innerWidth,
        window.innerHeight,
        '#canvasdiv',
        'transparent',
        '#000000',
        '#canvas',
        'canvas',  
        this.imageService
      );
      this.canvasses.push(canvas);
    }
  };

  /* getters */
  get isReady() {
    return this.canvasses.filter(function(canvas){return canvas.isReady;}).length == this.canvasses.length;
  }
  get objects() {
    return this.gameObjects;
  }
  get gamepad() {
    return this.gamepadHandler.gamepad;
  }
  get touchUI() {
    return this.touchHandler;
  }
  get keyboard() {
    return this.keyHandler;
  }
  get player() {
    return this.objects.filter((obj: GameObject) => { return obj.isPlayer; });
  }
  
  get focussedObject() {
    const objs = this.objects.filter((obj: GameObject) => { return obj.isFocussed; });
    if (objs.length > 1) this.logger.logAction(`WARN: ${objs.length} objects have focus`);
    return objs.length > 0 ? objs[0] : undefined;
  };

  /* setters */

  registerEvent(eventName: string) {
    this.eventSystem.registerEvent(eventName);
  };  

  addEventListener(eventName: string, triggerName: string, trigger: EventTrigger) {
    this.eventSystem.addEventListener(eventName, triggerName, trigger);
  };
  
  deRegisterEvent(eventName: string) {
    this.eventSystem.deRegisterEvent(eventName);
  };

  dispatchEvent(eventName: string, triggerName?: string, triggerArgs?: any[]) {
    this.eventSystem.dispatchEvent(eventName, triggerName, triggerArgs);
  };

  timingStart(identity: string) {
    const now = Date.now();
    if (!this.timing[identity]) {
      this.timing[identity] = {};
    }
    const lastTime = (this.timing[identity] && this.timing[identity].last) ? this.timing[identity].last : now;
    const interval = now - lastTime;
    this.timing[identity].last = now;
    this.timing[identity].interval = interval;
  };
  
  timingStop(identity: string) {
    const now = Date.now();
    if (!this.timing[identity]) {
      return;
    }
    const lastTime = this.timing[identity].last;
    this.timing[identity].duration = now - lastTime;
  };
  
}





Engine.prototype.canvas = function(alias) {
  const canvs = this.canvasses.filter(function(canvas){return canvas.alias === alias;});
  return (canvs.length > 0) ? canvs[0] : undefined;  
}

Engine.prototype.refreshUi = function() {
  for (const cnv in this.canvasses) {
    this.canvasses[cnv].refresh();
  }
}

Engine.prototype.createObject = function(conf, position) {
  const gameObject = new GameObject(conf, position, this);
  return gameObject;  
}

Engine.prototype.registerObject = function(gameObject) {
  if (!gameObject.id) {
    gameObject.id = uuidv4();  
  }
  if (this.getObjectById(gameObject.id)) {
    // object exists
    return false;
  }
  this.gameObjects.push(gameObject);
  return true;
}

Engine.prototype.spawnObject = function(objectClass, params) {
  return new objectClass(...params);
}

Engine.prototype.deleteObjectById = function(id) {
  const obj = this.getObjectById(id);
  if (obj) {
    obj.disposable = true;
  }
  return obj && obj.disposable == true; 
}

Engine.prototype.getObjectById = function(id) {
  const objs = this.getObjectsById(id);
  return (objs && objs.length > 0) ? objs[0] : undefined;
}

Engine.prototype.getObjectsById = function(id) {
  const objs = this.gameObjects.filter(function(obj) { return obj.id === id; });
  return (objs.length > 0) ? objs : undefined;
}

Engine.prototype.getObjectByType = function(type) {
  const objs = this.getObjectsByType(type);
  return (objs && objs.length > 0) ? objs[0] : undefined;
}

Engine.prototype.getObjectsByType = function(type) {
  const objs = this.gameObjects.filter(function(obj) { return obj.type === type; });
  return (objs.length > 0) ? objs : undefined;
}

Engine.prototype.getObjectsByState = function(fsmState) {
  const objs = this.gameObjects.filter(function(obj) { return obj.fsm && obj.fsm.currentState && obj.fsm.currentState === fsmState; });
  return (objs.length > 0) ? objs : undefined;
}

Engine.prototype.filterObjects = function(objectTypeOrTypes) {
  if (objectTypeOrTypes) {
    return this.objects.filter(function(obj) {
      return objectTypeOrTypes instanceof Array ? 
        objectTypeOrTypes.filter(function(t){return obj instanceof t}).length > 0 : 
        obj instanceof objectTypeOrTypes;
    })
  }
  return this.objects;
}

Engine.prototype.log = function(message) {
  this.logger.logAction(message);
}

Engine.prototype.flushLoggedEvents = function() {
  for (let ev=0; ev < this.loggedEvents.length; ev += 1) {
    this.log(this.loggedEvents[ev]);
  }
  this.loggedEvents = [];
}

Engine.prototype.focusOn = function(gameObject) {
  for (const o in this.objects) {
    this.objects[o].isFocussed = this.objects[o] === gameObject;
  }
}

Engine.prototype.setup = function() {
  if (this.setupDone) return; 

  this.timingStart('setup');

  this.keyHandler = this.config.game.enableKeyboardUI ? new KeyHandler(this.config.game.keyProcessor, this) : undefined;

  this.onSetup.bind(this, this);
  this.onStart.bind(this, this);
  this.onTick.bind(this, this);
  
  // for (goType in this.config.gameObjectTypes) {
  //   for (objDef in this.config.gameObjectTypes[goType]) {
  //     const gameObject = this.config.gameObjectTypes[goType][objDef];
  //     sourceImagePath = gameObject.sprite.sheet ? gameObject.sprite.sheet.path : gameObject.sprite.image.path;
  //     this.images.load(sourceImagePath);  
  //   }
  // }
  
  for (effect in this.config.game.soundEffects) {
    this.audioSystem.addEffect(new AudioEffect(this.config.game.soundEffects[effect]));
  }

  for(const cnv in this.canvasses) {
    this.canvasses[cnv].init && this.canvasses[cnv].init();
  }
  
  if (this.config.enableTouchUI && this.hasTouchSupport) {
    this.touchInterface.init();
  }
  this.timingStart('onSetup');
  this.onSetup(this);
  this.timingStop('onSetup');

  this.setupDone = true;
  this.timingStop('setup');
}

Engine.prototype.start = function() {
  this.timingStart('start');
 
  if (this.started) return true;

  this.setup();
  window.addEventListener('keydown', this.keyHandler.handleKeyDown.bind(this.keyHandler), false);
  window.addEventListener('keyup', this.keyHandler.handleKeyUp.bind(this.keyHandler), false);    
  for (const cnv in this.canvasses) {
    this.canvasses[cnv].init();
  }
  
  // run custom user code
  this.timingStart('onStart');
  this.onStart(this);
  this.timingStop('onStart');
  
  requestAnimationFrame(this.tick.bind(this));
  
  this.started = true;
  this.timingStop('start');
}

Engine.prototype.tick = function(frame) {
  
  if (!this.isReady) {
    this.windowTimeout = setTimeout(requestAnimationFrame(this.tick.bind(this)), 1000/(this.config.game.fps || 30));
    return;
  }

  this.timingStart('tick');
  this.ticks += 1;

  if (this.windowTimeout) {
    cancelTimeout(this.windowTimeout);
  }

  this.refreshUi();

  const deadAndAlive = partition(this.gameObjects, function(obj) {
    return (obj.TTL && obj.TTL <= 0) || obj.disposable;
  });

  // clean out event listeners for dead objects
  for (const obj in deadAndAlive[0]) {
    const gameObject = deadAndAlive[0][obj];
    if (this._eventSystem.events[`${gameObject.id}`]) {
      this._eventSystem.deRegisterEvent(`${gameObject.id}`);
    }
    if (this._eventSystem.events[`${gameObject.id}FSM`]) {
      this._eventSystem.deRegisterEvent(`${gameObject.id}FSM`);
    }
  }

  this.gameObjects = deadAndAlive[1];
  for (const obj in this.gameObjects) {
    const gameObject = this.gameObjects[obj];
    if (gameObject.TTL && gameObject.TTL > 0) {
      const now = Date.now();
      if (!gameObject.lastTTLTick || (gameObject.lastTTLTick && now - gameObject.lastTTLTick >= 1000)) {
        gameObject.lastTTLTick = Date.now();
        gameObject.TTL -= 1;
        if (gameObject.TTL <= 0) {
          gameObject.disposable = true;
        }
      }
    }
    gameObject.updateAndDraw();
  }

  // run custom user code
  this.timingStart('onTick');
  this.onTick(this);
  this.timingStop('onTick');

  requestAnimationFrame(this.tick.bind(this));

  this.timingStop('tick');

}

export {
  Engine
};
