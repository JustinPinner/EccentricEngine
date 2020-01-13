import { Point2D } from './lib2d';

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

Point3D.prototype.add = function(vector2D) {
  this.x += vector2D.x;
  this.y += vector2D.y;
}

class Coordinate3D {
  constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }
  get x() {
    return this._x;
  }
  set x(val) {
    this._x = val;
  }
  get y() {
    return this._y;
  }
  set y(val) {
    this._y = val;
  }
  get z() {
    return this._z;
  }
  set z(val) {
    this._z = val;
  }
};

Coordinate3D.prototype.clone = function() {
  return new Coordinate3D(this._x, this._y, this._z);
}

class Coordinates3D {
  constructor(x, y, z, w, h, d) {
    this._origin = new Coordinate3D(
        x || 0, 
        y || 0, 
        z || 0
    );
    this._centre = new Coordinate3D(
      (x || 0) + ((w || 0) / 2),
      (y || 0) + ((h || 0) / 2),
      (z || 0) + ((d || 0) / 2)
    );
    this._screen = this._origin;
  }
  get origin() {
    return this._origin;
  }
  set origin(val) {
    this._origin = val;
  }
  get centre() {
    return this._centre;
  }
  set centre(val) {
    this._centre = val;
  }
  get screen() {
    return this._screen;
  } 
  set screen(val) {
    this._screen = val;
  }
}

Coordinates3D.prototype.adjustForScreen = function(w, h) {
  // const c = new Coordinates3d();
  // c.origin._x = this._origin._x + (systemGeometry.width / 2) - ((w || 0) / 2);
  // c.origin._y = this._origin._y + (systemGeometry.height / 2) - ((h || 0) / 2);
  // c.centre._x = c.origin._x + ((w || 0) / 2);
  // c.centre._y = c.origin._y + ((h || 0) / 2);
  // return c;   
  
  this._screen = new Coordinates3D(
    this._origin._x + (systemGeometry.width / 2) - ((w || 0) / 2),
    this._origin._y + (systemGeometry.height / 2) - ((h || 0) / 2),
    this._origin._z,
    w,
    h,
    0
  );

  return this._screen;
}

Coordinates3D.prototype.rotate = function(degrees) {
  const o = this._origin.clone();
  o.rotate(this._centre, degrees);
  const c = this._centre.clone();

  const r = new Coordinates3D();
  r.origin = o;
  r.centre = c;
  return r;
}


export { 
  Point3D,
  Coordinate3D,
  Coordinates3D
};
