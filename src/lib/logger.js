// A _really_ basic logger class for debugging ops
// Figured it'd be easier to use other logging targets/libraries via a single provider class

import { Formatter } from '../lib/format';

class Logger {
  constructor(parent) {
    this._parent = parent;
    this.formatter = new Formatter();
  }
} 

Logger.prototype.logAction = function(logMessage) {
  const now = new Date();
  const withMillis = true;
  console.log(`${this.formatter.formatTime(now, withMillis)} > ${this._parent}: ${logMessage}`);
}

export {
  Logger
};