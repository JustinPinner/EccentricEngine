const uuidv4 = require('uuid/v4');
import { GameObject } from '../model/gameObject';
import { Engine } from '../engine/engine';
import { Logger } from './logger';

class StateMachineState {
  public id: string;
  public host: GameObject | Engine;
  public force: boolean;
  public executeOnTransition: boolean;
  public minimumExecutionInterval: number;
  public isActive: boolean;
  private lastExecutionTime: number;
  private run: (self: GameObject | Engine, args: any[]) => boolean;

  constructor(
    host: GameObject | Engine,
    behaviour: (context: GameObject | Engine, args: any[]) => boolean
  ) {
    this.id = uuidv4();
    this.host = host;
    this.run = behaviour.bind(this.host);
  };

  execute (args: any[]): boolean {
    const now = Date.now();
    if ((this.lastExecutionTime || 0) + (this.minimumExecutionInterval || 0) > now) {
      return false;
    }
    this.lastExecutionTime = now;
    return this.run(this.host, args);
  };

};

class StateMachine {
  private logger: Logger;
  public id: string;
  public startTime: number;
  public lastTransitionTime: number;
  public lastExecutionTime: number;
	constructor(
    public host: GameObject | Engine, 
    public states?: StateMachineState[]
  ) {
    this.id = uuidv4();
    this.lastTransitionTime = undefined;
    this.lastExecutionTime = undefined;
  };

  protected exists(stateId: string): boolean {
    return this.states.filter((s: StateMachineState) => { return s.id === stateId}).length > 0;
  };

  public addState (newState: StateMachineState, transitionImmediately?: boolean): boolean {
    if (!this.exists(newState.id)) {
      this.states.push(newState);
      if (transitionImmediately) {
        this.transition(newState.id);
      }
      return true;
    } else {
      return false;
    }
  };

  get state(): StateMachineState {
    return this.states.filter((s) => { return s.isActive; })[0];
  };

  public transition (
    toStateId: string,
    withArgs?: any[],
    force?: boolean
  ) {
    if (this.state && this.exists(toStateId)) {
      this.state.isActive = false;
      this.states[toStateId].active = true;
      if (this.state.executeOnTransition || force) {
        this.execute(withArgs);
      }
    }
  };

  private execute (args?: any[]) {  
    if (!this.host) {
      this.logger.logAction('cannot execute without a host')
      return;
    }
    this.state.execute(args);
  };

};

export { 
  StateMachine,
  StateMachineState 
};
