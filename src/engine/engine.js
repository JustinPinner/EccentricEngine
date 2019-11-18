const uuidv4 = require('uuid/v4');
import { Reactor } from '../lib/events';
import { Audio } from '../lib/audio';
import { Canvas2D } from '../environment/canvas';
import { TouchInterface, TouchHandler } from '../ui/touch';
import { KeyHandler, KeyProcessor } from '../ui/keys';
import { GamepadHandler } from '../ui/gamepad';
import { partition } from '../lib/partition';
import { ImageService } from '../utils/image';
import { TimerSystem } from '../lib/timer';
import { Formatter } from '../lib/format';

class GameConfiguration {
  constructor(userConfiguration, userLifecycle) {
    this._game = {
      version: 0.0,
      fps: 30,
      defaultImagePath: './assets',
      canvasses: {},
      touchUI: {},
      enableTouchUI: 'auto',
      enableKeyboardUI: false,
      enableGamepadUI: false,
      keyProcessor: KeyProcessor,
      lifeCycle: {
        onSetup: () => { return true; },  // --|\   any or all of these can be
        onStart: () => { return true; },  //   |  > implemented via the userLifecycle
        onTick: () => { return true; }    // --|/   parameter if desired
      },
      eventListener: (thisObj, evt) => {
        if (evt.callback) {
          evt.callback(thisObj, evt);
        }
      }
    };
    this._configuration = () => {
      return {
        game: this._game
      };
    }
    if (userConfiguration) {
      this._configuration = new userConfiguration(userLifecycle); 
    }
  };
  get config() {
    return this._configuration;
  }
}

class Engine {
  constructor(userConfig, userLifecycle) {
    this.id = 'ENGINE';
    this.formatter = new Formatter();
    this.configuration = new GameConfiguration(userConfig, userLifecycle);
    this.config = this.configuration.config;
    this.debug = this.config.debugEngine || false;
    this.eventSystem = new Reactor(this.debug);
    this.audioSystem = new Audio();
    this.timers = new TimerSystem(this, this.debug);
    this.images = new ImageService(this.config.game.defaultImagePath);
		this.eventSystem.registerEvent(this.id);
		this.eventSystem.addEventListener(this.id, this.config.game.eventListener.bind(this, this));
    this.onSetup = this.config.game.lifeCycle.onSetup;
    this.onStart = this.config.game.lifeCycle.onStart;
    this.onTick = this.config.game.lifeCycle.onTick;
    this.playerObj = null;
    this.loggedEvents = [];
    this.ticks = 0;   
    this.hasTouchSupport = (window.navigator && window.navigator.maxTouchPoints > 0);
    this.gameObjects = [];
    this.canvasses = [];
    this.keyHandler = null;
    this.gamepadHandler = this.config.game.enableGamepadUI ? new GamepadHandler() : undefined;
    this.touchHandler = (this.config.game.enableTouchUI === true || this.config.game.enableTouchUI === 'auto' && this.hasTouchSupport) ? new TouchHandler(this.config.game.touchUI) : undefined;
    this.timing = {};
    for (const cnv in this.config.game.canvasses) {
      const canvas = new Canvas2D(this.config.game.canvasses[cnv], this);
      if (canvas) {
        this.canvasses.push(canvas);
      }
    }    
    // default canvas if none sent in config
    if (this.canvasses.length < 1) {
      const canvas = new Canvas2D({
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        wrapper: {
          selector: '#canvasdiv',
          style: {
            backgroundColour: '#000000',
          }
        },
        canvas: {
          selector: '#canvas',
        },
        alias: 'canvas',  
      }, this);
      this.canvasses.push(canvas);
    }
  }

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
    return this.playerObj;
  }

  /* setters */

  set player(player) {
    this.playerObj = player;
  }
  
}

Engine.prototype.timingStart = function(identity) {
  const now = Date.now();
  if (!this.timing[identity]) {
    this.timing[identity] = {};
  }
  const lastTime = (this.timing[identity] && this.timing[identity].last) ? this.timing[identity].last : now;
  const interval = now - lastTime;
  this.timing[identity].last = now;
  this.timing[identity].interval = interval;
}

Engine.prototype.timingStop = function(identity) {
  const now = Date.now();
  if (!this.timing[identity]) {
    return;
  }
  const lastTime = this.timing[identity].last;
  this.timing[identity].duration = now - lastTime;
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

Engine.prototype.log = function(loggedEvent) {
  this.loggedEvents.push(loggedEvent.dump);
}

Engine.prototype.flushLoggedEvents = function() {
  for (let ev=0; ev < this.loggedEvents.length; ev += 1) {
    console.log(this.loggedEvents[ev]);
  }
  this.loggedEvents = [];
}

Engine.prototype.focusOn = function(gameObject) {
  for (const c in this.canvasses) {
    this.canvasses[c].setFocus(gameObject);
  }
}

Engine.prototype.setup = function() {
  if (this.setupDone) return; 

  this.timingStart('setup');

  this.keyHandler = this.config.game.enableKeyboardUI ? new KeyHandler(this.config.game.keyProcessor, this) : undefined;

  this.onSetup.bind(this, this);
  this.onStart.bind(this, this);
  this.onTick.bind(this, this);
  
  for (goType in this.config.gameObjectTypes) {
    for (objDef in this.config.gameObjectTypes[goType]) {
      const gameObject = this.config.gameObjectTypes[goType][objDef];
      sourceImagePath = gameObject.sprite.sheet ? gameObject.sprite.sheet.path : gameObject.sprite.image.path;
      this.images.load(sourceImagePath);  
    }
  }
  
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
  
  setInterval(requestAnimationFrame(this.tick.bind(this)), 1000/(this.config.game.fps || 30));
  
  this.started = true;
  this.timingStop('start');
}

Engine.prototype.tick = function(frame) {
  
  if (!this.isReady) {
    return;
  }

  requestAnimationFrame(this.tick.bind(this));

  this.timingStart('tick');
  this.ticks += 1;

  this.refreshUi();

  const deadAndAlive = partition(this.gameObjects, function(obj) {
    return obj.TTL ? obj.TTL <= 0 : obj.disposable;
  });

  // clean out event listeners for dead objects
  for (const obj in deadAndAlive[0]) {
    const gameObject = deadAndAlive[0][obj];
    if (this.eventSystem.events[`${gameObject.id}`]) {
      this.eventSystem.deRegisterEvent(`${gameObject.id}`);
    }
    if (this.eventSystem.events[`${gameObject.id}FSM`]) {
      this.eventSystem.deRegisterEvent(`${gameObject.id}FSM`);
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
    if (gameObject.ready) {
      gameObject.update();
      gameObject.draw();  
    }
  }

  // run custom user code
  this.timingStart('onTick');
  this.onTick(this);
  this.timingStop('onTick');

  this.timingStop('tick');

}

export {
  Engine
};
