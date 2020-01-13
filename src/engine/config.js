// Default configuration file - override or add properties to an instance of this in your game code
import { KeyProcessor } from '../ui/keys';

class Config {
  constructor(gameLifecycle) {
    this._game = {
      version: 0.0,
      fps: 30,
      defaultImagePath: './assets',
      canvasses: {},
      touchUI: {},
      enableTouchUI: 'auto',
      enableKeyboardUI: true,
      enableGamepadUI: false,
      keyProcessor: KeyProcessor,
      lifeCycle: gameLifecycle || {
        onSetup: () => { return true; },  // --|\   any or all of these can be
        onStart: () => { return true; },  //   |  > implemented via the userLifecycle
        onTick: () => { return true; }    // --|/   parameter if desired
      },
      eventListener: (thisObj, evt) => {
        if (evt.callback) {
          evt.callback(thisObj, evt);
        }
      },
      debugEngine: false
    };
  }
  get game() {
    return this._game;
  }
  get debugEngine() {
    return this._game.debugEngine;
  }
}

export {
  Config
};

