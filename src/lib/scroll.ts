import { Vector2d } from './vector2d';
import { GameObject } from '../model/gameObject';

class Scroller {
  private vel: Vector2d;
  scale: number = 1;
  focussedObject: GameObject;

	constructor(
    velocity?: Vector2d, 
    scale?: number, 
    focussedObject?: GameObject
  ) {
  	this.vel = velocity || new Vector2d(0,0);
	  this.scale = scale || 1;
		this.focussedObject = focussedObject;
	}
  
  get currentVelocity(): Vector2d {
    const currentV = this.focussedObject ? this.focussedObject.velocity.clone().invert() : this.vel.clone();
    currentV.scale(this.scale);
    return currentV;
  }

  anchorTo(gameObject: GameObject): void {
		this.focussedObject = gameObject;
  }

  focusOn(gameObject: GameObject) {
    this.anchorTo(gameObject);
  }
  
	setVelocity(velocity: Vector2d): void {
		this.vel = velocity;
  }
  
  setScale(scale: number): void {
    this.scale = scale;
  }
  
}

export {
  Scroller
};
