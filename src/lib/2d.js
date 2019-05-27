
class Point2D {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(xNew) {
    this._x = xNew;
  }
  set y(yNew) {
    this._y = yNew;
  }
}

Point2D.prototype.clone = function() {
  return new Point2d(this._x, this._y);
}

Point2D.prototype.rotate = function(p2dCentre, degrees) {
  //rotate counterclockwise
  const r = [];
  const x = this._x - p2dCentre.x;
  const y = this._y - p2dCentre.y;
  const rads = degreesToRadians(degrees);
  r[0] = x * Math.cos(rads) - y * Math.sin(rads);
  r[1] = x * Math.sin(rads) + y * Math.cos(rads);
  r[0] += p2dCentre.x;
  r[1] += p2dCentre.y;
  this._x = r[0];
  this._y = r[1];
}

class Vector2D extends Point2D {
  constructor(x, y) {
      super(x, y);
  }
  get length() {
      return Math.sqrt(Math.abs(this._x)^2 + Math.abs(this._y)^2);
  }
}

Vector2D.prototype.add = function(v2d) {
  this._x += v2d.x;
  this._y += v2d.y;
}

Vector2D.prototype.subtract = function(v2d) {
  this._x -= v2d.x;
  this._y -= v2d.y;
}

Vector2D.prototype.scale = function(n) {
  this._x *= n;
  this._y *= n;
}

Vector2D.prototype.dot = function(v2d) {
  this._x *= v2d.x;
  this._y *= v2d.y;
}

Vector2D.prototype.cross = function(v2d) {
  this._x *= v2d.y;
  this._y *= v2d.x;
}

Vector2D.prototype.normalize = function() {
  const len = this.length > 0 ? (1 / this.length) : this.length;
  this._x *= len;
  this._y *= len;
}

Vector2D.prototype.distance = function(v2d) {
  const x = this._x - v2d.x;
  const y = this._y - v2d.y;
  return Math.sqrt(x^2 + y^2);
}

Vector2D.prototype.clone = function() {
  return new Vector2d(this._x, this._y);
}

class Scrollable {
	constructor(anchorObject, vx, vy) {
		this._anchor = anchorObject;
		this._velocity = new Point2D(this._anchor && (this._anchor.velocity.x || vx || 0), this._anchor && (this._anchor.velocity.y || vy || 0));
	}

	get anchor() {
		return this._anchor;
	}
	get velocity() {
		return this._velocity;
	}

	set anchor(anchorObject) {
		this._anchor = anchorObject;
	}
	set velocity(point2D) {
		this._velocity = point2D;
	}
}

function distanceBetweenObjects(objA, objB) {
  const dx = (objA.coordinates.x + objA.centre.x) - (objB.coordinates.x + objB.centre.x);
  const dy = (objA.coordinates.y + objA.centre.y) - (objB.coordinates.y + objB.centre.y);
  return Math.sqrt((dx * dx) + (dy * dy));
}

function distanceBetweenPoints(pointA, pointB) {
  const dx = pointA.x - pointB.x;
  const dy = pointA.y - pointB.y;
  return Math.sqrt((dx * dx) + (dy * dy));  
}

function angleBetween(x1, y1, x2, y2) {
  return Math.atan2(y1 - y2, x1 - x2) * (180.0 / Math.PI);
}

function angleDifference(a1, a2) {
  return ((((a1 - a2) % 360) + 540) % 360) - 180;
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function dir_x(length, angle) {
  return length * Math.cos(degreesToRadians(angle));
}

function dir_y(length, angle) {
  return length * Math.sin(degreesToRadians(angle));
}

function rotatePoint(cx, cy, px, py, degrees)
{
  const deg = (degrees > 359) ? (degrees - 359) : degrees || 0;
  const angle = degreesToRadians(deg);
  const s = Math.sin(angle);
  const c = Math.cos(angle);
  const p = new Point2d(px,py);

  // translate point back to origin:
  p.x -= cx;
  p.y -= cy;

  // rotate point
  const xnew = p.x * c - p.y * s;
  const ynew = p.x * s + p.y * c;

  // translate point back:
  p.x = xnew + cx;
  p.y = ynew + cy;
  
  return p;
}

export {
  Point2D,
  Vector2D,
  Scrollable
};
