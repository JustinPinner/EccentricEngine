
import { partition } from '../lib/partition';

const Keys = {
  Q: 'KEYQ',
  W: 'KEYW',
  E: 'KEYE',
  R: 'KEYR',
  T: 'KEYT',
  Y: 'KEYY',
  U: 'KEYU',
  I: 'KEYI',
  O: 'KEYO',
  P: 'KEYP',    

  A: 'KEYA',
  S: 'KEYS',
  D: 'KEYD',
  F: 'KEYF',
  G: 'KEYG',
  H: 'KEYH',
  J: 'KEYJ',
  K: 'KEYK',
  L: 'KEYL',

  Z: 'KEYZ',
  X: 'KEYX',
  C: 'KEYC',
  V: 'KEYV',
  B: 'KEYB',
  N: 'KEYN',
  M: 'KEYM',

  ARROWUP: 'ARROWUP',
  ARROWDOWN: 'ARROWDOWN',
  ARROWLEFT: 'ARROWLEFT',
  ARROWRIGHT: 'ARROWRIGHT',
  SHIFTLEFT: 'SHIFTLEFT',
  SPACE: 'SPACE',
  SHIFTRIGHT: 'SHIFTRIGHT',
  ENTER: 'ENTER',
  BACKSPACE: 'BACKSPACE',
  ESCAPE: 'ESCAPE'
};

class KeyHandler {
  constructor(keyProcessor, gameEngine) {
    this._engine = gameEngine;
    this._enabled = false;
    this._processKey = keyProcessor;
    this._ignored = [];
    this._queue = [];
    this.pressed = {}; 
  }
  get enabled() {
    return this._enabled;
  }
  get gameEngine() {
    return this._engine;
  }
  set enabled(val) {
    this._enabled = val;
  }
}

KeyHandler.prototype.ignore = function(key, ms) {
  if (this.ignored(key)) {
    return; // prevent endless ignoring from repeated key presses
  }
  const now = Date.now();
  const active = partition(this._ignored, function(k) {
    return k.timeout > now;
  })[0];
  const index = active.findIndex(function(k) {
    return k.key == key;
  });
  const expires = now + ms;
  if (index < 0) {
    active.push({
      key: key, 
      timeout: expires
    });
  }
  this._ignored = active;
}

KeyHandler.prototype.listen = function(key) {
  const ignoring = partition(this._ignored, function(k) {
    return k.key !== key;
  })[0];
  this._ignored = ignoring;
}

KeyHandler.prototype.ignored = function(key) {
  const now = Date.now();
  const active = partition(this._ignored, function(k) {
    return k.timeout >= now;
  })[0];
  this._ignored = active;
  return active.findIndex(function(k) {
    return k.key == key;
  }) > -1;
}

KeyHandler.prototype.queued = function(key) {
  return partition(this._queue, function(k) {
    return k == key;
  })[0].length > 0;
}

KeyHandler.prototype.enQueue = function(key) {
  if(!this.queued(key)) {
    this._queue.push(key);
  }
}

KeyHandler.prototype.deQueue = function(key) {
  this._queue = partition(this._queue, function(k) {
    return k != key;
  })[0];
}

KeyHandler.prototype.handleKeyDown = function(e) {
  e.preventDefault();
  e.cancelBubble = true;
  const key = e.code.toUpperCase();
  if (this.ignored(key)) {
    return;
  }
  this._processKey(key, true, this);
}

KeyHandler.prototype.handleKeyUp = function(e) {
  e.preventDefault();
  e.cancelBubble = true;
  const key = e.code.toUpperCase();
  this._processKey(key, false, this);
}

const KeyProcessor = (pressedKey, isPressed, keyHandler) => {
  switch (pressedKey) {
    case Keys.SPACE:
      if (keyHandler.gameEngine && keyHandler.gameEngine.eventSystem) {
        keyHandler.gameEngine.eventSystem.dispatchEvent(keyHandler.gameEngine.id, {action: "SPACEPRESSED"});
      }
      break;
    case Keys.ENTER:
      break;
    case Keys.ESCAPE:
      debugger;
      break;  
  }
};

export {
  Keys,
  KeyHandler,
  KeyProcessor
};
