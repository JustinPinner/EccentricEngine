// Default configuration file - override or add properties to an instance of this in your game code
import { KeyProcessor } from '../ui/keys';
import { Canvas } from '../environment/canvas';

class GameLifecycle {
  public onSetup: () => boolean;
  public onStart: () => boolean;
  public onTick: () => boolean;
  constructor(
    userSetup: () => boolean = () => { return true; },
    userStart: () => boolean = () => { return true; },
    userTick: () => boolean= () => { return true; }
  ) {
    this.onSetup = userSetup;
    this.onStart = userStart;
    this.onTick = userTick;
  }
};

class Configuration {
  constructor(
    public lifeCycle: GameLifecycle,
    public keyProcessor: KeyProcessor,
    public canvasses: Canvas[],
    public version: number = 0.0,
    public fps: number = 30,
    public imagePath: string = './assets',
    public debug: boolean = false,    
    public enableTouchUI: boolean = true,
    public enableKeyboardUI: true,
    public enableGamepadUI: true
    ) {
    this._game = {
      eventListener: (thisObj, evt) => {
        if (evt.callback) {
          evt.callback(thisObj, evt);
        }
      }
    };
  };
};

export {
  Configuration
};

