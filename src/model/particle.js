
import { GameObject } from './gameObject';
import { Vector2D, Math2D } from '../lib/lib2d';

class Particle extends GameObject {
  constructor(conf, position, engine) {
    super(conf, position, engine);
    this._lastTtlTick = 0;
    this._lastTick = 0;
    this._rgba = conf.rgba || {red: 255, green: 255, blue: 255, alpha: 1.0};
    this._radius = conf.radius || conf.width || conf.height;
    this._speed = conf.emitSpeed;
    this._heading = conf.emitAngle;
    this._lifeSpan = conf.ttl;
    this._ttl = conf.ttl;
    this._fadeIn = conf.fadeIn ? conf.fadeIn : false;
    this._fadeOut = conf.fadeOut ? conf.fadeOut : false;
    this._velocity = new Vector2D(Math2D.dir_x(conf.speed, conf.heading), Math2D.dir_y(conf.speed, conf.heading));
  }
  // getters
  get config() {
    return this._conf;
  }
  get TTL() {
    return this._ttl;
  }
  get lastTTLTick() {
    return this._lastTtlTick;
  }
  get lifeSpan() {
    return this._lifeSpan;
  }
  get RGBA() {
    return this._rgba;
  }
  get drawOriginCentre() {
    return this.engine.canvas('viewport').drawCentre(this);
  }
  
  // setters
  set TTL(timeToLive) {
    this._ttl = timeToLive;
  }
  set lastTTLTick(millis) {
    this._lastTtlTick = millis;
  }
}

Particle.prototype.init = function() {
	if (this.fsm) {
		this.engine.eventSystem.registerEvent(`${this.id}FSM`);
		this.engine.eventSystem.addEventListener(`${this.id}FSM`, this.fsm.eventListener.bind(this.fsm, this));
	}
  this.ready = true;
  this.canDraw = true;
}

Particle.prototype.draw = function(debug) {
  if (!this.ready) return;
  if (!this.isOnScreen(debug)) return;
  const viewport = this.engine.canvas('viewport');
  if (!viewport) return;
  viewport.context.fillStyle="rgba(" + this.RGBA.red + "," + this.RGBA.green + "," + this.RGBA.blue + "," + this.RGBA.alpha + ")";
  viewport.context.beginPath();
  viewport.context.arc(this.drawOriginCentre.x, this.drawOriginCentre.y, this.width, 0, Math.PI * 2);
  viewport.context.closePath();
  viewport.context.fill();
};

export {
  Particle
};