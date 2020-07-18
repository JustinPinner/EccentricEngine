import { Math2D } from './lib2d';
import { Vector2d } from './vector2d';
import { Coordinate2d } from './coordinate';

class Point2d extends Coordinate2d {

  constructor(public x: number, public y: number) {
    super(x, y);
  }

  clone(): Point2d {
    return new Point2d(this.x, this.y);
  }

  rotate(centre: Point2d, degrees: number): void {
    const r = [];
    const x = this.x - centre.x;
    const y = this.y - centre.y;
    const rads = Math2D.degreesToRadians(degrees);
    r[0] = x * Math.cos(rads) - y * Math.sin(rads);
    r[1] = x * Math.sin(rads) + y * Math.cos(rads);
    r[0] += centre.x;
    r[1] += centre.y;
    this.x = r[0];
    this.y = r[1];  
  }

  invert(): void {
    this.x = -this.x;
    this.y = -this.y;
  }

  add(vector: Vector2d): void {
    this.x += vector.x;
    this.y += vector.y;
  }
}

export {
  Point2d
};