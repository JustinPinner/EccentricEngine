import { partition } from './partition';

class Timer {
  constructor(host, timerName, timeoutMs, intervalMs, triggerFn, fnArg) {
    this._name = timerName;
    this._interval = intervalMs;
    this._timeout = timeoutMs;
    this._triggerFn = triggerFn;
    this._triggerArg = fnArg;
    this._host = host ? host : window;
    this._id = undefined;
    this._lastRun = undefined;
    this._nextRun = undefined;
    this._isPaused = false;
    this._isCancelled = false;
    this._trigger = () => {
    }
  }
  get name() {
    return this._name;
  }
  get lastRunPretty() {
    return new Date(this._lastRun).toISOString();
  }
}

Timer.prototype.tick = function() {
  if (!(this._isPaused || this._isCancelled) && this._triggerFn) {
    this._lastRun = Date.now();
    this._triggerFn(this._triggerArg);
  }
}

Timer.prototype.start = function() {
  this._isPaused = false;
  if (this._interval) {
    this._id = setInterval(this.tick.bind(this), this._interval);
  } else if (this._timeout) {
    this._id = setTimeout(this.tick.bind(this), this._timeout);
  }  
  this._lastRun = Date.now();
}

Timer.prototype.pause = function() {
  if (this._timeout) {
    clearTimeout(this._id);
  } else if (this._interval) {
    clearInterval(this._id);
  }
  this._isPaused = true;
}

Timer.prototype.cancel = function() {
  const id = this._id;
  if (this._timeout) clearTimeout(id);
  if (this._interval) clearInterval(id);
  this._isCancelled = true;
}


class TimerSystem {
  constructor(host) {
    this._host = host;
    this._timers = [];
  }
}

TimerSystem.prototype.cleanUp = function() {
  this._timers = partition(this._timers, function(timer){ return !timer._isCancelled })[0];
}

TimerSystem.prototype.exists = function(timerName) {
  const check = this._timers.filter(function(timer) { return timer.name == timerName });
  return check.length > 0;
}

TimerSystem.prototype.add = function(timerName, timeoutMs, intervalMs, triggerFn, fnArg) {
  if (!this.exists(timerName)) {
    const timer = new Timer(this, timerName, timeoutMs, intervalMs, triggerFn, fnArg);
    this._timers.push(timer);
    return true;
  }
  return false;
}

TimerSystem.prototype.start = function(timerName) {
  for (const t in this._timers) {
    if (this._timers[t].name == timerName) {
      this._timers[t].start();
    }
  }
}

TimerSystem.prototype.startAll = function() {
  for (const t in this._timers) {
    this._timers[t].start();
  }
}

TimerSystem.prototype.pause = function(timerName) {
  for (const t in this._timers) {
    if (this._timers[t].name == timerName) {
      this._timers[t].pause();
    }    
  }
}

TimerSystem.prototype.pauseExcept = function(timerName) {
  for (const t in this._timers) {
    if (this._timers[t].name != timerName) {
      this._timers[t].pause();
    }
  }
}

TimerSystem.prototype.pauseAll = function() {
  for (const t in this._timers) {
    this._timers[t].pause();
  }
}

TimerSystem.prototype.cancel = function(timerName) {
  for (const t in this._timers) {
    if(this._timers[t].name == timerName) {
      this._timers[t].cancel();
    }
  }
  this.cleanUp();
}

TimerSystem.prototype.cancelAll = function() {
  for (const t in this._timers) {
    this._timers[t].cancel();
  }
  this.cleanUp();
}

export {
  TimerSystem
};