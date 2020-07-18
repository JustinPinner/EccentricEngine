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
  Math2D
};
