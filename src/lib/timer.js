import { partition } from './partition';
import { Logger } from './logger';

class Timer {
  constructor(host, timerName, timeoutMs, intervalMs, triggerFn, fnArg, debug) {
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
    this._logger = (debug ? new Logger('Timer') : undefined);
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
    // Logging is a slow operation - only uncomment in times of desperation!
    // this._logger && this._logger.logAction(`tick: ${this._name} (id: ${this._id})`);
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
  this._logger && this._logger.logAction(`started: ${this._name} (id: ${this._id})`);
}

Timer.prototype.pause = function() {
  if (this._timeout) {
    clearTimeout(this._id);
  } else if (this._interval) {
    clearInterval(this._id);
  }
  this._isPaused = true;
  this._logger && this._logger.logAction(`paused: ${this._name} (id: ${this._id})`);
}

Timer.prototype.cancel = function() {
  const id = this._id;
  if (this._timeout) clearTimeout(id);
  if (this._interval) clearInterval(id);
  this._isCancelled = true;
  this._logger && this._logger.logAction(`cancelled: ${this._name} (id: ${this._id})`);
}


class TimerSystem {
  constructor(host, debug) {
    this._debug = debug || false;
    this._host = host;
    this._timers = [];
    this._logger = (debug ? new Logger('TimerSystem') : undefined);
  }
}

TimerSystem.prototype.cleanUp = function() {
  const before = this._timers.length;
  this._timers = partition(this._timers, function(timer){ return !timer._isCancelled })[0];
  this._logger && this._logger.logAction(`cleanUp: before: ${before} after: ${this._timers.length}`);
}

TimerSystem.prototype.exists = function(timerName) {
  const check = this._timers.filter(function(timer) { return timer.name == timerName });
  this._logger && this._logger.logAction(`exists: ${timerName} ? ${check.length > 0}`);
  return check.length > 0;
}

TimerSystem.prototype.add = function(timerName, timeoutMs, intervalMs, triggerFn, fnArg) {
  if (!this.exists(timerName)) {
    const timer = new Timer(this, timerName, timeoutMs, intervalMs, triggerFn, fnArg, this._debug);
    this._timers.push(timer);
    this._logger && this._logger.logAction(`added ${timerName} (timeout: ${timeoutMs}ms interval: ${intervalMs}ms trigger: ${triggerFn ? true : false} args: ${fnArg ? true : false})`);
    return true;
  }
  this._logger && this._logger.logAction(`add failed: ${timerName} already exists`);
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
  this._logger && this._logger.logAction(`starting all timers`);
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
  this._logger && this._logger.logAction(`pause all timers EXCEPT ${timerName}`);
  for (const t in this._timers) {
    if (this._timers[t].name != timerName) {
      this._timers[t].pause();
    }
  }
}

TimerSystem.prototype.pauseAll = function() {
  this._logger && this._logger.logAction(`pausing all timers`);
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
  this._logger && this._logger.logAction(`cancelling all timers`);
  for (const t in this._timers) {
    this._timers[t].cancel();
  }
  this.cleanUp();
}

export {
  TimerSystem
};