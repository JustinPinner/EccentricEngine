
import { Math2D } from '../lib/lib2d';
import { Point2d } from '../lib/point2d';
import { Logger } from '../lib/logger';
import { Scroller } from '../lib/scroll';
import { Area } from '../lib/area';
import { ImageService } from '../utils/image';
import { GameObject } from '../model/gameObject';
import { Coordinate3d } from '../lib/coordinate';

// const defaultConfig = {
// 	x: 0,
// 	y: 0,
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// 	wrapper: {
// 		selector: '#canvas-wrapper',
// 		style: {
// 			background: 'transparent',
// 			backgroundColour: '#000000',
// 		}
// 	},
// 	canvas: {
// 		selector: '#canvas-element',
// 	},
//   alias: 'canvas',
//   scroll: false
// };

class BackgroundStyle {
  constructor(
    public background: string = 'transparent', 
    public backgroundColour: string = '#000000'
  ) {};
};

class CanvasWrapper {
  constructor(
    public selector: string = "#canvas-wrapper", 
    public style: BackgroundStyle
  ) {};
};

class CanvasElement {
  constructor(
    public selector: string = '#canvas-element'
  ) {};
};

class Canvas {
  wrapper: CanvasWrapper;
  element: CanvasElement;
  drawArea: Area;
  private logger: Logger;

  constructor(
    public coordinates: Point2d,
    public width: number, 
    public height: number, 
    protected wrapperSelector: string,
    protected backgroundType: string,
    protected backgroundColour: string, 
    protected selector: string,
    protected alias: string,
    private imageService: ImageService,
    protected mainImage?: HTMLImageElement,
    private scroller?: Scroller
  ) {
    this.wrapper = new CanvasWrapper(wrapperSelector, new BackgroundStyle(backgroundType, backgroundColour));
    this.element = new CanvasElement(selector);
    this.alias = alias;
    this.scroller = scroller;
		this.drawArea = new Area(coordinates, new Point2d(coordinates.x + this.width, coordinates.y + this.height));
		// this.canvasScrollController = this.config.scroll && this.config.scroll == true ? new Scrollable(null, 0, 0, this.config.scrollScale) : undefined;
    this.logger = new Logger(this);
		// size and style wrapper div
		// size canvas to match wrapper dimensions
  };
  
  get renderingContext(): CanvasRenderingContext2D {
    const docCanv = document.querySelector<HTMLCanvasElement>(this.selector);
    try {
      return docCanv.getContext('2d');
    } catch(error) {
      const msg = `Unable to call .getContext on ${this.selector} because ${error}`;
      this.logger.logAction(msg);
      throw error;
    };
  };

  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
		const wrapperDomElement = document.querySelector<HTMLDivElement>(this.wrapper.selector);
    try {
			wrapperDomElement.style.left = this.coordinates.x.toString() + 'px';
			wrapperDomElement.style.top = this.coordinates.y.toString() + 'px';
			wrapperDomElement.style.width = this.width.toString() + 'px';
			wrapperDomElement.style.height = this.height.toString() + 'px';
			// wrapperElement.style.background = this.wrapper.style.background;
			// wrapperElement.style.backgroundColor = this.wrapper.style.backgroundColour;
    } catch(error) {
      const msg = `Unable to resize ${this.wrapper.selector} because ${error}`;
      this.logger.logAction(msg);
      throw error;
    };

    try {
      const canvasDomElement = document.querySelector<HTMLCanvasElement>(this.selector);
      canvasDomElement.style.left = this.coordinates.x.toString() + 'px';
      canvasDomElement.style.top = this.coordinates.y.toString() + 'px';
      canvasDomElement.width = this.width;
      canvasDomElement.height = this.height;  
    } catch(error) {
      const msg = `Unable to resize ${this.selector} because ${error}`;
      this.logger.logAction(msg);
      throw error;
    };
  };

  get centre() {
		return new Point2d(this.coordinates.x + (this.width / 2), this.coordinates.y + (this.height / 2));
	};

  clear(from: Point2d = this.drawArea.from, to: Point2d = this.drawArea.to) {
    this.renderingContext.clearRect(
      from.x, 
      from.y, 
      to.x, 
      to.y
    );
  };

  // TODO: define geometry
  contains(geometry) {
    const x1 = geometry.ox;
    const y1 = geometry.oy;
    const x2 = geometry.ox + Math2D.dir_x(geometry.width, geometry.rotation);
    const y2 = geometry.oy + Math2D.dir_y(geometry.height, geometry.rotation);
  
    const p1 = new Point2d(x1, y1);
    const p2 = new Point2d(x2, y2);
  
    const isContained =
      p1.x >= this.coordinates.x &&
      p1.y >= this.coordinates.y &&
      p2.x <= this.coordinates.x + this.width &&
      p2.y <= this.coordinates.y + this.height;
  
    return isContained;
  };

  containsObject = function(gameObject: GameObject) {
    if (gameObject.isFocussed) {
      return true;
    } else {
      const geometry = {
        ox: (gameObject.coordinates && gameObject.coordinates.origin) ? gameObject.coordinates.origin.x : gameObject.coordinates.x, 
        oy: (gameObject.coordinates && gameObject.coordinates.origin) ? gameObject.coordinates.origin.y : gameObject.coordinates.y, 
        width: gameObject.width, 
        height: gameObject.height, 
        rotation: gameObject.rotatedDegrees
      };
      return this.contains(geometry);
    };
  };

  draw() {
    if (this.mainImage) {
      if (this.scroller) {
        // with a scroll controller and a tilable mainImage, we apply the image in a 3x3 grid, e.g.
        // [1,1][1,2][1,3]
        // [2,1][2,2][2,3]
        // [3,1][3,2][3,3]
        // starting at the centre (2,2)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x, 
          this.coordinates.y, 
          this.width, 
          this.height
        );
        // top-left (1,1)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x - this.width, 
          this.coordinates.y - this.height, 
          this.width, 
          this.height
        );
        // top (1,2)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x, 
          this.coordinates.y - this.height, 
          this.width, 
          this.height
        );
        // top-right (1,3)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x + this.width, 
          this.coordinates.y - this.height, 
          this.width, 
          this.height
        );
        // right (2,3)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x + this.width, 
          this.coordinates.y, 
          this.width, 
          this.height
        );
        // bottom-right (3,3)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x + 
          this.width, 
          this.coordinates.y + this.height, 
          this.width, 
          this.height
        );
        // bottom (3,2)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x, 
          this.coordinates.y + this.height, 
          this.width, 
          this.height
        );		
        // botom-left (3,1)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x - this.width, 
          this.coordinates.y + this.height, 
          this.width, 
          this.height
        );
        // left (2,1)
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x - this.width, 
          this.coordinates.y, 
          this.width, 
        this.height);		
      } else {
        // with no scroll controller, we just paint a single image
        this.renderingContext.drawImage(
          this.mainImage, 
          this.coordinates.x,
          this.coordinates.y,
          this.width, 
          this.height
        );  
      };
    };
  };

  drawImage(
    image: CanvasImageSource,
    source: Area,
    destination: Area 
  ) {
    this.renderingContext.drawImage(
      image,
      source.from.x,
      source.from.y,
      source.to.x,
      source.to.y,
      destination.from.x,
      destination.from.y,
      destination.to.x,
      destination.to.y
    );
  };

  init(fillImage, callBack) {
    // if (this.config.canvas.selector && !this.canvasContext) {
    //   const canvasElem = document.querySelector(this.config.canvas.selector);
    //   if (canvasElem) {
    //     this.canvasContext = canvasElem.getContext('2d');
    //   }
    // }
    if (fillImage) {
      this.loadImage(fillImage, callBack);		
    }
    this.draw();
  };

  loadImage(imagePath: string, onLoadListener) {
    this.mainImage = this.imageService.load(imagePath, onLoadListener);
  };

  refresh(from: Point2d = this.drawArea.from, to: Point2d = this.drawArea.to) {
    this.clear(from, to);
    if (this.scroller) this.scroll();
    this.draw();
  };

  scroll(): void {
    if (!this.scroller.currentVelocity) return;
    const newX = this.scroller && this.scroller.currentVelocity.x != 0 ? this.coordinates.x + this.scroller.currentVelocity.x * (this.scroller.scale || 1) : this.coordinates.x;
    const newY = this.scroller && this.scroller.currentVelocity.y != 0 ? this.coordinates.y + this.scroller.currentVelocity.y * (this.scroller.scale || 1) : this.coordinates.y;
    
    // return if no change
    if (newX == this.coordinates.x && newY == this.coordinates.y) return;
  
    this.coordinates.x = newX >= this.width ? 0 : (newX < 0 ? this.width : newX);
    this.coordinates.y = newY >= this.height ? 0 : (newY < 0 ? this.height : newY);
  };

  track(gameObject: GameObject) {
    // note: attempting to scroll _and_ track an object 
    // with a single canvas will almost certainly make weird things happen
    // to avoid that use one canvas to scroll e.g. a background and another
    // over the top of the scrolling one to draw everything on
    if (this.scroller && gameObject.velocity) {
      // generally, scrolling happens in the opposite direction to the focussed
      // object's velocity
      this.scroller.setVelocity(gameObject.velocity.clone().invert());
    } else {
      if (gameObject.coordinates && gameObject.coordinates.centre) {
        // if we're not scrolling this canvas, we lock its coordinates relative to
        // the object we're tracking
        this.coordinates.x = gameObject.coordinates.centre.x - this.width / 2;
        this.coordinates.y = gameObject.coordinates.centre.y - this.height / 2;	  
      };
    };
  };

  // map object's world relative x,y to screen-relative 0,0
  // used when objects exist in a larger virtual space that 
  // extends beyond the screen area
  worldToScreenOrigin(gameObject: GameObject) {
    if (!gameObject || !this.coordinates) {
      return new Coordinate3d(0,0,0);
    }
    const objOrigin = (gameObject.coordinates && gameObject.coordinates.origin) || gameObject.coordinates;
    return new Coordinate3d(
      objOrigin.x + -this.coordinates.x,
      objOrigin.y + -this.coordinates.y,
      objOrigin.z || 0
    );
  };

  // map object's world-relative centre x,y into screen-relative centre x,y
  // used when objects exist in a larger virtual space that 
  // extends beyond the screen area
  worldToScreenCentre(gameObject: GameObject) {
    if (!gameObject || !this.coordinates) {
      return new Coordinate3d(0,0,0);
    }
    const objCentre = (gameObject.coordinates && gameObject.coordinates.centre) || gameObject.coordinates;
    return new Coordinate3d(
      objCentre.x + -this.coordinates.x,
      objCentre.y + -this.coordinates.y,
      objCentre.z || 0
    );	
  };

  // determine if object's world-relative location and geometry are within screen borders
  // used when objects exist in a larger virtual space that 
  // extends beyond the screen area
  worldToScreenVisible(gameObject: GameObject) {
    const _x = (gameObject.coordinates && gameObject.coordinates.origin && gameObject.coordinates.origin.x) || gameObject.coordinates.x;
    const _y = (gameObject.coordinates && gameObject.coordinates.origin && gameObject.coordinates.origin.y) || gameObject.coordinates.y;
    return(
      _x >= this.coordinates.x &&
      _y >= this.coordinates.y &&
      _x <= this.coordinates.x + this.width &&
      _y <= this.coordinates.y + this.height
    );
  }

};

export {
  Canvas
};
