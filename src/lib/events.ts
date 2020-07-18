// from: https://stackoverflow.com/questions/15308371/custom-events-model-without-using-dom-events-in-javascript

import { Logger } from './logger';
const uuidv4 = require('uuid/v4');

class EventTrigger {
  public lastFired: number = 0;
  public duration: number = 0;

  constructor(
    public name: string,
    public action: (scope?: object, params?: any[]) => boolean,
    public scope?: object
  ) { };

  fire(args?: any[]): boolean {
    const start = Date.now();
    const result = this.action(this.scope, ...args);
    const finish = Date.now();
    this.lastFired = finish;
    this.duration = finish - start;
    return result;
  };

};

class Event {
  private logger: Logger;
  protected id: string = uuidv4();
  public triggers: EventTrigger[];
  public createdAt: number;
  constructor(
    public name: string, 
    protected debug?: boolean
  ) {
    this.createdAt = Date.now();
    this.name = name;
    this.debug = debug || false;
    this.logger = new Logger('Event');
  }

  get age(): number {
    return Date.now() - this.createdAt;
  };

  log (message: string) {
    this.logger.logAction(message);
  };

  setTrigger (triggerName: string, trigger: EventTrigger) {
    this.triggers[triggerName] = trigger;
    this.log(`trigger ${trigger.name} set for ${this.name} (${this.id}) ${this.triggers.length} exist.`);
  };

};

class EventSystem {
  private logger: Logger;
  private debug: boolean = false;
  protected events: Event[];

  constructor(debug?: boolean) {
    this.debug = debug || false;
    this.logger = new Logger('EventSystem');
  };

  log (message: string) {
    if (this.debug) {
      this.logger.logAction(message);
    }
  };

  registerEvent (eventName: string) {
    this.events[eventName] = new Event(eventName);
    this.log(`event registered: ${eventName}`);
  };

  dispatchEvent (eventName: string, triggerName?: string, triggerArgs?: any[]) {
    const self = this;
    if (this.events[eventName]) {
      let triggerCount = 0;
      const event: Event = this.events[eventName];
      if (event) {
        const triggers = triggerName 
          ? event.triggers.filter((trigger) => { return trigger.name === triggerName; }) 
          : event.triggers;
        
        triggers.forEach((trigger)=>{
          triggerCount += 1;
          trigger.fire(triggerArgs);
          self.log(`trigger ${trigger.name} fired for ${eventName} with args: ${triggerArgs ? triggerArgs : 'none'}`);
        });

        this.log(`event dispatched: ${eventName} - ${triggerCount} trigger(s) fired`);  
      }
    }
  };

  deRegisterEvent (eventName: string) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
    this.logger && this.logger.logAction(`event de-registered: ${eventName}`);
  };

  addEventListener (eventName: string, triggerName: string, eventTrigger: EventTrigger) {
    const event: Event = this.events[eventName];
    event.setTrigger(triggerName, eventTrigger);
    this.logger && this.logger.logAction(`eventListener trigger ${eventTrigger.name} registered for ${eventName}`);
  };
};

class GameEvent extends Event {
  public id: string;
  public type: string;
  constructor (
    public senderId: string,
    public recipientId: string,
    public trigger: EventTrigger,
    public acknowledge: boolean,
    protected debug?: boolean
  ){
    super(new uuidv4(), debug);
  }
};

class AcknowledgeEvent extends GameEvent {
  constructor(
    senderId: string,
    recipientId: string
  ) {
    super(
      senderId, 
      recipientId, 
      new EventTrigger('ACK', () => { return true; }), 
      false
    );
    this.type = 'ACK';
  };
};

export {
   EventSystem,
   EventTrigger,
   GameEvent
};
