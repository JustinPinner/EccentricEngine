// based on example from
// https://stackoverflow.com/questions/6343450/generating-sound-on-the-fly-with-javascript-html5

const exampleEffects = {
  'ping': {
    type: 'sine',
    frequency: 2400,
    volume: 0.5,
    duration: 100  
  }
};

class AudioEffect {
  constructor(config){
    this.cnf = config;
    this.sys = undefined;
  }
  get id() {
    return this.config.id;
  }
  get config() {
    return this.cnf;
  }
  get system() {
    return this.sys;
  }
  set system(value) {
    this.sys = value;
  }
}

class Audio {
  constructor() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.osc = null;
    this.snds = [];
    this.fx = [];
  }
  get context() {
    return this.ctx;
  }
  get oscillator() {
    return this.osc;
  }
  get effects() {
    return this.fx;
  }
  get sounds() {
    return this.snds;
  }
}

Audio.prototype.isEffectRegistered = function(effectId) {
  if (this.fx.length > 0) {
    return this.fx.filter(function(effect) { return effect.id == effectId; }).length > 0;  
  }
  return false;
} 

Audio.prototype.addEffect = function(audioEffect) {
  if (!this.isEffectRegistered(audioEffect.id)) {
    audioEffect.system = this;
    this.fx.push(audioEffect);
  }
}

Audio.prototype.getEffect = function(effectId) {
  return this.fx.filter(function(effect) {
    return effect.id == effectId;
  })[0];
}

Audio.prototype.removeEffect = function(effectId) {
  this.fx = this.fx.filter(function(effect) {
    return effect.id != effectId;
  })[0];
}

Audio.prototype.playEffect = function(effectId, delay, duration) {
  const effect = this.getEffect(effectId);
  if (effect) {
    if (this.osc) {
      // close it down before starting a new tone
      this.osc.stop(this.ctx.currentTime);
      this.osc.disconnect(this.ctx.destination);
      this.osc = null;  
    }
    // start
    this.osc = this.ctx.createOscillator();
    this.osc.frequency.value = effect.config.frequency;
    const startOffset = (delay || (effect.config.delay || 0)) / 1000;
    const stopOffset = (delay || (effect.config.delay || 0)) + (duration || (effect.config.duration || 0)) / 1000;
    this.osc.start(this.ctx.currentTime + startOffset);
    this.osc.connect(this.ctx.destination);
    // stop
    this.osc.stop(this.ctx.currentTime + stopOffset);
  }
}

export {
  Audio,
  AudioEffect
}
