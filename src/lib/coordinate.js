import { Point2D, Math2D } from './lib2d';
import { Point3D } from './lib3d';

class Coordinate {
  constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get z() {
    return this._z;
  }

  get asPoint() {
    return this._z ? new Point3D(this._x, this._y, this._z) : new Point2D(this._x, this._y); 
  }

  set x(val) {
    this._x = val;
  }
  set y(val) {
    this._y = val;
  }
  set z(val) {
    this._z = val;
  }
}

Coordinate.prototype.rotate = function(centre, degrees) {
  this.point = Math2D.rotatePoint(
    centre.x, 
    centre.y,
    this._x,
    this._y,
    degrees
  );
};

class Coordinate2D extends Coordinate {
  constructor(point2D) {
    super(point2D.x, point2D.y);
  }
  get point() {
    return {x, y};
  }
  set point(point2D) {
    this.x = point2D.x;
    this.y = point2D.y;
  }
}

class Coordinate3D extends Coordinate {
  constructor(x, y, z) {
    super(x, y, z);
  }
};

Coordinate3D.prototype.clone = function() {
  return new Coordinate3D(this._x, this._y, this._z);
}

export {
  Coordinate2D,
  Coordinate3D
};
