
import { GameObject } from './gameObject';
import { Math2D } from '../lib/lib2d';
import { Vector2d } from '../lib/vector2d';
import { Point2d } from '../lib/point2d';
import { Rgba } from '../lib/rgba';
import { Coordinate2d } from '../lib/coordinate';

class Particle extends GameObject {
  config: object; // TODO: define ParticleConfig
  lastTtlTick: number;
  lastTick: number;
  rgba: Rgba;
  radius: number;
  speed: number;
  heading: number;
  lifeSpan: number;
  ttl: number;
  fadeIn: boolean;
  fadeOut: boolean;
  velocity: Vector2d;

  constructor(conf, position: Coordinate2d, engine) {
    super(conf, position, engine);
    this.lastTtlTick = 0;
    this.lastTick = 0;
    this.rgba = conf.rgba || new Rgba(255, 255, 255, 1.0);
    this.radius = conf.radius || conf.width || conf.height;
    this.speed = conf.speed;
    this.heading = conf.angle;
    this.lifeSpan = conf.ttl;
    this.ttl = conf.ttl;
    this.fadeIn = conf.fadeIn ? conf.fadeIn : false;
    this.fadeOut = conf.fadeOut ? conf.fadeOut : false;
    this.velocity = new Vector2d(Math2D.dir_x(conf.speed, conf.angle), Math2D.dir_y(conf.speed, conf.angle));
  }

  get drawOriginCentre(): Point2d {
    return this.engine.canvas('viewport').drawCentre(this);
  }

  load() {
    if (this.finiteStateMachine) {
      this.engine.registerEvent(`${this.id}FSM`);
      this.engine.addEventListener(`${this.id}FSM`, this.finiteStateMachine.eventListener.bind(this.fsm, this));
    }
    this.ready = true;
    this.canDraw = true;
  }

  draw() {
    if (!this.ready) return;
    if (!this.isOnScreen()) return;
    const viewport = this.engine.canvas('viewport');
    if (!viewport) return;
    viewport.context.fillStyle="rgba(" + this.rgba.red + "," + this.rgba.green + "," + this.rgba.blue + "," + this.rgba.alpha + ")";
    viewport.context.beginPath();
    viewport.context.arc(this.drawOriginCentre.x, this.drawOriginCentre.y, this.width, 0, Math.PI * 2);
    viewport.context.closePath();
    viewport.context.fill();
  }

}

export {
  Particle
};