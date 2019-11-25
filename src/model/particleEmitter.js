import { Particle } from './particle';

class ParticleEmitter {
  constructor(engine, hostObject) {
    this._host = hostObject;
    this._engine = engine;
  }
}

ParticleEmitter.prototype.emit = function(particleConf, coordinates) {
  new Particle(
    particleConf,
    coordinates,
    this._engine
  );
};

export {
  ParticleEmitter
};
