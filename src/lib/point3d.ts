import { Coordinate3d } from './coordinate';
import { Vector2d } from './vector2d';

class Point3d extends Coordinate3d {
  constructor(x: number, y: number, z: number) {
    super(x, y, z);
  };

  clone(): Point3d {
    return new Point3d(this.x, this.y, this.z);
  };

  add(vector2d: Vector2d) {
    this.x += vector2d.x;
    this.y += vector2d.y;
  };

};

export {
  Point3d
};
