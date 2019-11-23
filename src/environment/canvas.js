
import { Point2D, Scrollable, Math2D } from '../lib/lib2d';
import { Coordinate3D } from '../lib/lib3d';

const defaultConfig = {
	x: 0,
	y: 0,
	width: window.innerWidth,
	height: window.innerHeight,
	wrapper: {
		selector: '#canvas-wrapper',
		style: {
			background: 'transparent',
			backgroundColour: '#000000',
		}
	},
	canvas: {
		selector: '#canvas-element',
	},
  alias: 'canvas',
  scroll: false
};

class Canvas2D {
	constructor(canvasConfig, gameEngine) {
		this.config = canvasConfig || defaultConfig;
		this.gameEngine = gameEngine;
		this.canvasReady = false;
		this.canvasWidth = this.config.width;
		this.canvasHeight = this.config.height;
		this.canvasCoordinates = new Point2D(this.config.x, this.config.y);
		this.canvasDrawable = {from: new Point2D(0,0), to: new Point2D(this.config.width, this.config.height)},
		this.canvasContext = null;
		this.canvasImage = null;
		this.canvasScrollController = this.config.scroll && this.config.scroll == true ? new Scrollable(null, 0, 0, this.config.scrollScale) : undefined;
		this.canvasAlias = this.config.alias;
		// size and style wrapper div
		const wrapper = document.querySelector(this.config.wrapper.selector);
		if (wrapper) {
			wrapper.style.left = this.config.x.toString() + 'px';
			wrapper.style.top = this.config.y.toString() + 'px';
			wrapper.style.width = this.config.width.toString() + 'px';
			wrapper.style.height = this.config.height.toString() + 'px';
			wrapper.style.background = this.config.wrapper.style.background;
			wrapper.style.backgroundColor = this.config.wrapper.style.backgroundColour;
		}
		// size canvas to match wrapper dimensions
		const canvas = document.querySelector(this.config.canvas.selector);
		if (canvas) {
			canvas.style.left = this.config.x.toString() + 'px';
			canvas.style.top = this.config.y.toString() + 'px';
			canvas.width = this.config.width;
			canvas.height = this.config.height;
		}
	}
	/* getters */
	get isReady() {
		return this.canvasReady;
	}
	get alias() {
		return this.canvasAlias;
	}
	get width() {
		return this.canvasWidth;
	}
	get height() {
		return this.canvasHeight;
	}
	get coordinates() {
		return this.canvasCoordinates;
  }
  get image() {
    return this.canvasImage;
  }
	get selector() {
		return this.config.canvas.selector;
	}
	get context() {
		return this.canvasContext;
	}
	get centre() {
		return new Point2D(this.canvasCordinates.x + (this.canvasWidth / 2), this.canvasCoordinates.y + (this.canvasHeight / 2));
	}
	get scroller() {
		return this.canvasScrollController;
	}

  /* setters */
  set image(img) {
    this.canvasImage = img;
  }
  set coordinates(newCoords) {
    this.canvasCoordinates = newCoords;
  }
	set context(contextRef) {
		this.canvasContext = contextRef;
	}
	set scroller(scrollController) {
		this.canvasScrollController = scrollController;
	}
};

Canvas2D.prototype.loadImage = function(imagePath, onLoad) {
	return this.gameEngine.images.load(imagePath, onLoad);
}

Canvas2D.prototype.init = function(fillImage, callBack) {
	if (this.config.canvas.selector && !this.canvasContext) {
		const canvasElem = document.querySelector(this.config.canvas.selector);
		if (canvasElem) {
			this.canvasContext = canvasElem.getContext('2d');
		}
	}
	if (fillImage || this.config.canvas.image) {
		this.canvasImage = this.loadImage((fillImage || this.config.canvas.image), callBack);		
	}
  this.canvasReady = !!this.canvasContext;
  this.draw();
};

Canvas2D.prototype.refresh = function() {
  if (this.config.refresh) {
    this.config.refresh(this);
    return;
  }
  this.clear();
  if (this.scroller) this.scroll();
  this.draw();
}

Canvas2D.prototype.clear = function(fromPoint, toPoint) {
	if (!this.canvasContext) return;
	this.canvasContext.clearRect((fromPoint && fromPoint.x) || 0, 
		(fromPoint && fromPoint.y) || 0, 
		(toPoint && toPoint.x) || this.width, 
		(toPoint && toPoint.y) || this.height
	);
};

Canvas2D.prototype.draw = function() {
  if (!this.canvasReady || !this.canvasContext) return;
  if (this.scroller) {
    if (this.image) {
      // with a scroll controller and an image, we should apply the image in a 3x3 grid, e.g.
      // [1,1][1,2][1,3]
      // [2,1][2,2][2,3]
      // [3,1][3,2][3,3]
      // starting at the centre (2,2)
      this.context.drawImage(this.image, this.coordinates.x, this.coordinates.y, this.width, this.height);
      // top-left (1,1)
      this.context.drawImage(this.image, this.coordinates.x - this.width, this.coordinates.y - this.height, this.width, this.height);
      // top (1,2)
      this.context.drawImage(this.image, this.coordinates.x, this.coordinates.y - this.height, this.width, this.height);
      // top-right (1,3)
      this.context.drawImage(this.image, this.coordinates.x + this.width, this.coordinates.y - this.height, this.width, this.height);
      // right (2,3)
      this.context.drawImage(this.image, this.coordinates.x + this.width, this.coordinates.y, this.width, this.height);
      // bottom-right (3,3)
      this.context.drawImage(this.image, this.coordinates.x + this.width, this.coordinates.y + this.height, this.width, this.height);
      // bottom (3,2)
      this.context.drawImage(this.image, this.coordinates.x, this.coordinates.y + this.height, this.width, this.height);		
      // botom-left (3,1)
      this.context.drawImage(this.image, this.coordinates.x - this.width, this.coordinates.y + this.height, this.width, this.height);
      // left (2,1)
      this.context.drawImage(this.image, this.coordinates.x - this.width, this.coordinates.y, this.width, this.height);		
    }
    return;
  }

  // without a scroll controller, we're just going to draw an image if we have one
  if (this.image) {
    this.context.drawImage(
      this.image, 
      this.coordinates.x,
      this.coordinates.y,
      this.width, 
      this.height
    );  
  }
};

Canvas2D.prototype.contains = function(x, y, width, height, heading) {
	const x1 = x;
	const y1 = y;
	const x2 = x + width;
	const y2 = y + height;
	const cx = x1 + width / 2;
	const cy = y1 + height / 2;

	const p1 = heading ? 
		Math2D.rotatePoint(cx, cy, x1, y1, heading) :
		new Point2D(x1, y1);
	
	const p2 = heading ?
    Math2D.rotatePoint(cx, cy, x2, y2, heading) :
		new Point2D(x2, y2);

	const isContained =
		this.canvasFocusObject ?
			p1.x >= this.canvasFocusObject.coordinates.x - this.canvasWidth / 2 && 
			p1.y >= this.canvasFocusObject.coordinates.y - this.canvasHeight / 2 && 
			p2.x <= this.canvasFocusObject.coordinates.x + this.canvasWidth / 2 &&
			p2.y <= this.canvasFocusObject.coordinates.y + this.canvasHeight / 2
		:
			p1.x >= this.canvasDrawable.from.x &&
			p1.y >= this.canvasDrawable.from.y &&
			p2.x <= this.canvasDrawable.to.x &&
			p2.y <= this.canvasDrawable.to.y;

	return isContained;
};

Canvas2D.prototype.containsObject = function(obj) {
	if (this.canvasFocusObject === obj) {
		return true;
	} else {
		return this.contains(
			obj.coordinates.x, 
			obj.coordinates.y, 
			obj.width, 
			obj.height, 
			obj.rotation
		);
	}
};

Canvas2D.prototype.track = function(gameObject) {
  // note: attempting to scroll _and_ track an object 
  // with a single canvas will almost certainly make weird things happen
  // to avoid that use one canvas to scroll e.g. a background and another
  // over the top of the scrolling one to draw everything on
  if (this.scroller && gameObject.velocity) {
    // generally, scrolling happens in the opposite direction to the focussed
    // object's velocity
    this.scroller.velocity = gameObject.velocity.clone().invert();
  } else {
    if (gameObject.coordinates && gameObject.coordinates.centre) {
      // if we're not scrolling this canvas, we lock its coordinates relative to
      // the object we're tracking
      this.coordinates.x = gameObject.coordinates.centre.x - this.width / 2;
      this.coordinates.y = gameObject.coordinates.centre.y - this.height / 2;	  
    }
  }
}

Canvas2D.prototype.scroll = function() {
  if (!this.scroller) return;
  if (!this.scroller.velocity) return;
	const newX = this.scroller && this.scroller.velocity.x != 0 ? this.coordinates.x + this.scroller.velocity.x * (this.scroller.scale || 1) : this.coordinates.x;
	const newY = this.scroller && this.scroller.velocity.y != 0 ? this.coordinates.y + this.scroller.velocity.y * (this.scroller.scale || 1) : this.coordinates.y;
  
  // return if no change
  if (newX == this.coordinates.x && newY == this.coordinates.y) return;

  this.coordinates.x = newX >= this.width ? 0 : (newX < 0 ? this.width : newX);
	this.coordinates.y = newY >= this.height ? 0 : (newY < 0 ? this.height : newY);
};

Canvas2D.prototype.drawOrigin = function(forObject) {
	if (!forObject || !this.coordinates) {
		return new Coordinate3D(0,0,0);
	}
	const objOrigin = (forObject.coordinates && forObject.coordinates.origin) || forObject.coordinates;
	return new Coordinate3D(
		objOrigin.x + -this.coordinates.x,
		objOrigin.y + -this.coordinates.y,
		objOrigin.z || 0
	);
};

Canvas2D.prototype.drawCentre = function(forObject) {
	if (!forObject || !this.coordinates) {
		return new Coordinate3D(0,0,0);
	}
	const objCentre = (forObject.coordinates && forObject.coordinates.centre) || forObject.coordinates;
	return new Coordinate3D(
		objCentre.x + -this.coordinates.x,
		objCentre.y + -this.coordinates.y,
		objCentre.z || 0
	);	
};

Canvas2D.prototype.isVisible = function(gameObject) {
	const _x = (gameObject.coordinates && gameObject.coordinates.origin && gameObject.coordinates.origin.x) || gameObject.coordinates.x;
	const _y = (gameObject.coordinates && gameObject.coordinates.origin && gameObject.coordinates.origin.y) || gameObject.coordinates.y;
	return(
		_x >= this.coordinates.x &&
		_y >= this.coordinates.y &&
		_x <= this.coordinates.x + this.width &&
		_y <= this.coordinates.y + this.height
	);
}

export {
  Canvas2D
};
