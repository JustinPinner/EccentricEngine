// A _really_ basic logger class for debugging ops
// Figured it'd be easier to use other logging targets/libraries via a single provider class

import { Formatter } from './format';

class Logger {
  private parent: Object;
  private formatter: Formatter;
  constructor(parent: Object) {
    this.parent = parent;
    this.formatter = new Formatter();
  }

  logAction(logMessage: string) {
    const now = new Date();
    const withMillis = true;
    console.log(`${this.formatter.time(now, withMillis)} > ${typeof this.parent || 'Object'}: ${logMessage}`);
  };
}; 

export {
  Logger
};