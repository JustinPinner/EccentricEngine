
class FSM {
	constructor(host, role) {
    this.host = host;
    this.role = role;
    // this.states = states.__proto__.hasOwnProperty('apply') ? states() : states;
    this.currentAction = this.role.defaultAction || this.role.actions[0];
    this.lastTransitionTime = undefined;
    this.lastExecutionTime = undefined;
  }
}

FSM.prototype.eventListener = function(evt) { 
  switch (evt.command) {
    case 'SET':
      this.setAction(evt.action);
      break;
    case 'EXECUTE':
      if (evt.action && evt.action.execute) {
        evt.action.execute();
      } else {
        this.execute();
      }
      break;
    case 'TRANSITION':
      if (evt.action) {
        this.transition(evt.action);
      }
      break;
  }
}

FSM.prototype.execute = function() {  
  const now = Date.now();
  if (!this.host) {
    // Wut?!
    return;
  }
  if (!this.currentAction) {
    this.currentAction = (this.role.defaultAction ? this.role.defaultAction : undefined);
  } 
  if (this.host && this.currentAction && this.currentAction.execute) {
    if ((this.lastExecutionTime || 0) + (this.currentAction.minimumExecutionInterval || 0) <= now) {
      this.lastExecutionTime = now;
      this.currentAction.execute(this.host);
    }
	}
}

// FSM.prototype.pushAction = function () {
//   this.savedAction = this.currentAction;
// }

// FSM.prototype.popAction = function() {
//   this.currentAction = this.savedAction;
//   this.savedAction = undefined;
// }

FSM.prototype.setAction = function(newAction) {
  if (!this.host) {
    return;
  }
  const now = Date.now();
  this.currentAction = newAction;
  this.lastTransitionTime = now;
  this.startTime = now;
  this.lastExecutionTime = undefined;
}

FSM.prototype.transition = function(newAction, force) {
  if (this.currentAction && this.role.actions.includes(newAction.name) || newAction.force || force) {
    this.setAction(newAction);
    if (newAction.executeOnTransition) {
      this.execute();
    }
  }
}

FSM.prototype.collisionsEnabled = function() {
  return this.action.detectCollisions;
}

export { FSM };