// from: https://stackoverflow.com/questions/15308371/custom-events-model-without-using-dom-events-in-javascript

import { Logger } from '../lib/logger';

class Event {
  constructor(name, debug){
    this.name = name;
    this.debug = debug || false;
    this.callbacks = [];
    this.logger = debug ? new Logger('Event') : undefined;
  }
}

Event.prototype.registerCallback = function(callback){
  this.callbacks.push(callback);
  this.logger && this.logger.logAction(`callback pushed: ${this.callbacks.length} registered.`);
}

class Reactor{
  constructor(debug) {
    this.debug = debug || false;
    this.events = {};
    this.logger = debug ? new Logger('Reactor') : undefined;
  }
}

Reactor.prototype.registerEvent = function(eventName){
  const event = new Event(eventName);
  this.events[eventName] = event;
  this.logger && this.logger.logAction(`event registered: ${eventName}`);
};

Reactor.prototype.dispatchEvent = function(eventName, eventArgs){
  const self = this;
  let evCount = 0;
  this.events[eventName].callbacks.forEach(function(callback){
    evCount += 1;
    callback(eventArgs);
    self.logger && self.logger.logAction(`callback triggered for ${eventName} with args: ${eventArgs ? eventArgs : 'none'}`);
  });
  self.logger && self.logger.logAction(`event dispatched: ${eventName} - ${evCount} callback(s) triggered`);
};

Reactor.prototype.deRegisterEvent = function(eventName) {
  if (this.events[eventName]) {
    delete this.events[eventName];
  }
  this.logger && this.logger.logAction(`event de-registered: ${eventName}`);
};

Reactor.prototype.addEventListener = function(eventName, callback){
  this.events[eventName].registerCallback(callback);
  this.logger && this.logger.logAction(`eventListener callback registered: ${eventName}`);
};

export {
   Reactor
};
