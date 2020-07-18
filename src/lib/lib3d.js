import { Point2d } from './point2d';


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
  Coordinates3D
};
