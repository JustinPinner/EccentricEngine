import Point2D from './2d';

class Point3D extends Point2D {
  constructor(x, y, z) {
      super(x, y);
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

Point3D.prototype.clone = function() {
  return new Point3D(this._x, this._y, this._z);
}

export default Point3D;
