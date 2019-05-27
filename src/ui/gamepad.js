
class GamepadHandler {
  constructor() {
      this.gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  }
  get gamepad() {
      this.refresh();
      const pad = this.gamepads[0];
      const deadZone = 0.2;
      if (!pad) return null;
      return {
          status: {
              axes: pad.axes,
              buttons: pad.buttons
          },
          inputs: {
              axes: pad.axes.filter(function(axis) {
                  return axis.valueOf !== 0;
              }),
              buttons: pad.buttons.filter(function(button) {
                  return button.pressed;
              })
          },
          sticks: {
              left: {
                  left: pad.axes[0].valueOf() < -deadZone,
                  right: pad.axes[0].valueOf() > deadZone,
                  up: pad.axes[1].valueOf() < -deadZone,
                  down: pad.axes[1].valueOf() > deadZone,
                  pressed: pad.buttons[10].pressed
              },
              right: {
                  left: pad.axes[2].valueOf() < -deadZone,
                  right: pad.axes[2].valueOf() > deadZone,
                  up: pad.axes[3].valueOf() < -deadZone,
                  down: pad.axes[3].valueOf() > deadZone,
                  pressed: pad.buttons[11].pressed    //guess!
              }
          },
          buttons: {
              a: pad.buttons[0].pressed,
              b: pad.buttons[1].pressed,
              x: pad.buttons[2].pressed,
              y: pad.buttons[3].pressed,
              back: pad.buttons[8].pressed,
              start: pad.buttons[9].pressed  //guess!
          },
          dpad: {
              left: pad.buttons[14].pressed,
              right: pad.buttons[15].pressed,
              up: pad.buttons[12].pressed,
              down: pad.buttons[13].pressed
          },
          shoulders: {
              left: pad.buttons[4].pressed,
              right: pad.buttons[5].pressed
          },
          triggers: {
              left: pad.buttons[6].pressed,
              right: pad.buttons[7].pressed
          }
      }
  }
}

GamepadHandler.prototype.refresh = function() {
  this.gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
}

GamepadHandler.prototype.pressedButtons = function(gamepadIndex) {
    return this.gamepads[gamepadIndex].buttons.filter(function(button){
        return button.pressed;        
    })
}

GamepadHandler.prototype.movedSticks = function(gamepadIndex) {
    return this.gamepads[gamepadIndex].axes.filter(function(stick){
        return stick.valueOf !== 0;
    })
}

GamepadHandler.prototype.readInputs = function(index) {
    const buttons = this.pressedButtons(index);
    const sticks = this.movedSticks(index);

}

GamepadHandler.prototype.sticks = function(index) {
    const _sticks = this.gamepads[index ? index : 0].axes;
    return {
        left: {
            up: _sticks[0].valueOf(),
            down: _sticks[0].valueOf(),
            left: _sticks[0].valueOf(),
            right: _sticks[0].valueOf()
        },
        right: {
            up: _sticks[1].valueOf(),
            down: _sticks[1].valueOf(),
            left: _sticks[1].valueOf(),
            right: _sticks[1].valueOf()
        }
    }
}

GamepadHandler.prototype.buttons = function(index) {
    const _buttons = this.gamepads[index ? index : 0].buttons;
    return {
        a: _buttons[0].pressed,
        b: _buttons[1].pressed,
        x: _buttons[2].pressed,
        y: _buttons[3].pressed
    }
}

GamepadHandler.prototype.triggers = function(index) {
    const _triggers = this.gamepads[index ? index : 0].buttons;
    return {
        left: _triggers[4].pressed,
        right: _triggers[5].pressed
    }
}

export {
  GamepadHandler
};
