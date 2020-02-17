
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
  return new Point2D(this._x, this._y);
};

Point2D.prototype.rotate = function(p2dCentre, degrees) {
  //rotate counterclockwise
  const r = [];
  const x = this._x - p2dCentre.x;
  const y = this._y - p2dCentre.y;
  const rads = Math2D.degreesToRadians(degrees);
  r[0] = x * Math.cos(rads) - y * Math.sin(rads);
  r[1] = x * Math.sin(rads) + y * Math.cos(rads);
  r[0] += p2dCentre.x;
  r[1] += p2dCentre.y;
  this._x = r[0];
  this._y = r[1];
};

Point2D.prototype.invert = function() {
  return new Point2D(-this.x, -this.y);
}

Point2D.prototype.add = function(vector2D) {
  this.x += vector2D.x;
  this.y += vector2D.y;
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
};

Vector2D.prototype.subtract = function(v2d) {
  this._x -= v2d.x;
  this._y -= v2d.y;
};

Vector2D.prototype.scale = function(n) {
  this._x *= n || 1;
  this._y *= n || 1;
};

Vector2D.prototype.dot = function(v2d) {
  this._x *= v2d.x;
  this._y *= v2d.y;
};

Vector2D.prototype.cross = function(v2d) {
  this._x *= v2d.y;
  this._y *= v2d.x;
};

Vector2D.prototype.normalize = function() {
  const len = this.length > 0 ? (1 / this.length) : this.length;
  this._x *= len;
  this._y *= len;
};

Vector2D.prototype.invert = function() {
  return new Vector2D(-this.x, -this.y);
}

Vector2D.prototype.distance = function(v2d) {
  const x = this._x - v2d.x;
  const y = this._y - v2d.y;
  return Math.sqrt(x^2 + y^2);
};

Vector2D.prototype.clone = function() {
  return new Vector2D(this._x, this._y);
};

class Scrollable {
	constructor(anchorObject, vx, vy, s) {
    this._scale = s || 1;
		this._anchor = anchorObject;
		this._velocity = new Vector2D(this._anchor && (this._anchor.velocity.x || vx || 0), this._anchor && (this._anchor.velocity.y || vy || 0));
	}
	get anchor() {
		return this._anchor;
	}
	get velocity() {
    const currentV = this.anchor ? this.anchor.velocity.clone().invert() : this._velocity.clone();
    currentV.scale(this.scale);
    return currentV;
  }
  get scale() {
    return this._scale;
  }
  get focus() {
    return this._anchorObject;
  }
	set anchor(anchorObject) {
		this._anchor = anchorObject;
	}
	set velocity(vector2D) {
		this._velocity = vector2D;
  }
  set scale(scaleVal) {
    this._scale = scaleVal;
  }
  set focus(gameObject) {
    this._anchorObject = gameObject;
  }
}

const Math2D = {
  distanceBetweenObjects: function(objA, objB) {
    const dx = objA.coordinates.centre.x - objB.coordinates.centre.x;
    const dy = objA.coordinates.centre.y - objB.coordinates.centre.y;
    return Math.sqrt((dx * dx) + (dy * dy));  
  },
  distanceBetweenPoints: function(pointA, pointB) {
    const dx = pointA.x - pointB.x;
    const dy = pointA.y - pointB.y;
    return Math.sqrt((dx * dx) + (dy * dy));  
  },
  angleBetween: function(x1, y1, x2, y2) {
    return Math.atan2(y1 - y2, x1 - x2) * (180.0 / Math.PI);
  },    
  angleDifference: function(a1, a2) {
    return ((((a1 - a2) % 360) + 540) % 360) - 180;
  },      
  degreesToRadians: function(degrees) {
    return degrees * (Math.PI / 180);
  },
  dir_x: function(length, angle) {
    return length * Math.cos(this.degreesToRadians(angle));
  }, 
  dir_y: function(length, angle) {
    return length * Math.sin(this.degreesToRadians(angle));
  },
  rotatePoint: function(cx, cy, px, py, degrees) {
    const deg = (degrees > 359) ? (degrees - 359) : degrees || 0;
    const angle = this.degreesToRadians(deg);
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const p = new Point2D(px,py);
  
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
};

export {
  Point2D,
  Vector2D,
  Math2D,
  Scrollable
};
