import { partition } from './partition';
import { Logger } from './logger';

class Timer {
  private id: NodeJS.Timeout;
  private lastRun: number;
  private paused: boolean;
  private cancelled: boolean;
  private logger: Logger;

  constructor(
    protected host: TimerSystem, 
    public timerName: string, 
    protected timeoutMs: number, 
    protected intervalMs: number, 
    protected triggerFn: Function, 
    protected fnArg: any[], 
    protected debug: boolean
  ) {
    this.paused = false;
    this.cancelled = false;
    this.logger = (debug ? new Logger('Timer') : undefined);
  };

  get lastRunPretty() {
    return new Date(this.lastRun).toISOString();
  };

  cancel(): boolean {
    if (this.timeoutMs) clearTimeout(this.id);
    if (this.intervalMs) clearInterval(this.id);
    this.cancelled = true;
    this.id = undefined;
    this.logger && this.logger.logAction(`cancelled: ${this.timerName} (id: ${this.id})`);
    return this.cancelled;
  };

  pause(): boolean {
    if (this.timeoutMs) {
      clearTimeout(this.id);
    } else if (this.intervalMs) {
      clearInterval(this.id);
    }
    this.paused = true;
    this.id = undefined;
    this.logger && this.logger.logAction(`paused: ${this.timerName} (id: ${this.id})`);
    return this.paused;
  };

  start(): boolean {
    this.paused = false;
    if (this.intervalMs) {
      this.id = setInterval(this.tick.bind(this), this.intervalMs);
    } else if (this.timeoutMs) {
      this.id = setTimeout(this.tick.bind(this), this.timeoutMs);
    }  
    this.lastRun = Date.now();
    this.logger && this.logger.logAction(`started: ${this.timerName} (id: ${this.id})`);
    return !this.paused && !this.cancelled && !!this.id;
  };

  tick(): void {
    if (this.paused || this.cancelled) return;

    if (this.triggerFn) {
      this.lastRun = Date.now();
      this.triggerFn(...this.fnArg);
      // Logging is a slow operation - only uncomment in times of desperation!
      // this.logger && this.logger.logAction(`tick: ${this._name} (id: ${this._id})`);
    }
  };

}

class TimerSystem {
  private host: Object;
  private debug: boolean;
  timers: Timer[];
  private cleanerTaskName: string = 'TimerSystemHousekeeper';
  private logger: Logger | undefined;
  constructor(
    host: Object, 
    debug?: boolean
  ) {
    this.debug = debug || false;
    this.host = host;
    this.logger = (debug ? new Logger('TimerSystem') : undefined);
    this.timers = [new Timer(this, this.cleanerTaskName, undefined, 1000, this.cleanUp, undefined, debug)];
    this.timers[0].start();
  };

  add(timerName: string, 
    timeoutMs: number, 
    intervalMs: number, 
    triggerFn: Function, 
    fnArg: any[]
  ): boolean {
    if (!this.exists(timerName)) {
      const timer = new Timer(this, timerName, timeoutMs, intervalMs, triggerFn, fnArg, this.debug);
      this.timers.push(timer);
      this.logger && this.logger.logAction(`added ${timerName} (timeout: ${timeoutMs}ms interval: ${intervalMs}ms trigger: ${triggerFn ? true : false} args: ${fnArg ? true : false})`);
      return true;
    } else {
      this.logger && this.logger.logAction(`add failed: ${timerName} already exists`);
      return false;
    }
  };

  cancel(timerName: string) {
    for (const t in this.timers) {
      if(this.timers[t].timerName == timerName && this.timers[t].cancel()) {
        this.logger && this.logger.logAction(`timer: ${timerName} cancelled`);
      }
    }
    this.cleanUp();
  };

  cancelAll() {
    this.logger && this.logger.logAction(`cancelling all timers (except cleaner task)`);
    for (const t in this.timers) {
      if (this.timers[t].timerName != this.cleanerTaskName && this.timers[t].cancel()) {
        this.logger && this.logger.logAction(`timer: ${this.timers[t].timerName} cancelled`);
      }
    }
    this.cleanUp();
  };
  
  cleanUp() {
    const before = this.timers.length;
    this.timers = partition(this.timers, (timer) => { return !timer._isCancelled })[0];
    this.logger && this.logger.logAction(`TimerSystem on ${this.host} cleanUp: before: ${before} timers, after: ${this.timers.length} timers`);
  };

  exists(timerName: string) {
    const check = this.timers.filter(function(timer) { return timer.timerName == timerName });
    this.logger && this.logger.logAction(`exists: ${timerName} ? ${check.length > 0}`);
    return check.length > 0;
  };

  start(timerName: string) {
    for (const t in this.timers) {
      if (this.timers[t].timerName == timerName && this.timers[t].start()) {
        this.logger && this.logger.logAction(`timer: ${this.timers[t].timerName} started`);
      }
    }
  };

  pause(timerName: string) {
    for (const t in this.timers) {
      if (this.timers[t].timerName == timerName && this.timers[t].pause()) {
        this.logger && this.logger.logAction(`timer: ${this.timers[t].timerName} paused`);
      }    
    }
  };

  pauseAll() {
    this.logger && this.logger.logAction(`pausing all timers`);
    for (const t in this.timers) {
      if (this.timers[t].pause()){
        this.logger && this.logger.logAction(`timer: ${this.timers[t].timerName} paused`);
      }
    }
  };

  pauseExcept(timerName: string) {
    this.logger && this.logger.logAction(`pause all timers EXCEPT ${timerName}`);
    for (const t in this.timers) {
      if (this.timers[t].timerName != timerName && this.timers[t].pause()) {
        this.logger && this.logger.logAction(`timer: ${this.timers[t].timerName} paused`);
      }
    }
  };

  startAll() {
    this.logger && this.logger.logAction(`starting all timers`);
    for (const t in this.timers) {
      if (this.timers[t].start()) {
        this.logger && this.logger.logAction(`timer: ${this.timers[t].timerName} started`);
      }
    }
  };

}

export {
  TimerSystem
};