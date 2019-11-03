
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
	alias: 'canvas'
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
		this.canvasScrollScale = 0;
		this.canvasScrollData = new Scrollable(null, 0, 0);
		this.canvasFocusObject = null;
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
	get selector() {
		return this.config.canvas.selector;
	}
	get context() {
		return this.canvasContext;
	}
	get centre() {
		return new Point2D(this.canvasCordinates.x + (this.canvasWidth / 2), this.canvasCoordinates.y + (this.canvasHeight / 2));
	}
	get scrollData() {
		return this.canvasScrollData;
	}
	get focussedObject() {
		return this.canvasFocusObject;
	}

	/* setters */
	set context(contextRef) {
		this.canvasContext = contextRef;
	}
	set scrollData(scrollDataObj) {
		this.canvasScrollData = scrollDataObj;
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
};

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
	this.clear();
	this.canvasImage && this.canvasContext.drawImage(
		this.canvasImage, 
		0,
		0,
		this.canvasWidth, 
		this.canvasHeight);
};

Canvas2D.prototype.focus = function(gameObject) {
	if (!gameObject) return;
	if (this.canvasFocusObject === gameObject) return;
	this.canvasFocusObject = gameObject;
	this.canvasCoordinates.x = gameObject.coordinates.centre.x - (this.canvasWidth / 2);
	this.canvasCoordinates.y = gameObject.coordinates.centre.y - (this.canvasHeight / 2);
};

Canvas2D.prototype.scroll = function () {
	this.canvasCoordinates.x += this.canvasScrollData.velocity.x;
	this.canvasCoordinates.y += this.canvasScrollData.velocity.y;
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

Canvas2D.prototype.trackFocussedObject = function() {
	this.coordinates.x = this.focussedObject.coordinates.centre.x - this.width / 2;
	this.coordinates.y = this.focussedObject.coordinates.centre.y - this.height / 2;	
}

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
