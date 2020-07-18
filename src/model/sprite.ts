import { Coordinate2d } from '../lib/coordinate';
import { Canvas } from '../environment/canvas';
import { Area } from '../lib/area';
import { Point2d } from '../lib/point2d';
import { ImageService } from '../utils/image';

class Sprite {
  private imageService: ImageService;
  image: HTMLImageElement;

  constructor(
    protected imagePath: string, 
    protected frameWidth: number, 
    protected frameHeight: number, 
    imageService: ImageService
  ) {
    this.imageService = imageService;
    this.image = this.imageService.load(imagePath, ()=>{});
  }

  draw(canvas: Canvas, coordinates: Coordinate2d) {
    const sourceArea = new Area(
      new Point2d(0,0), 
      new Point2d(this.frameWidth,this.frameHeight)
    );
    const destinationArea = new Area(
      new Point2d(coordinates.x, coordinates.y),
      new Point2d(this.frameWidth, this.frameHeight)
    );
    canvas.drawImage(
      this.image,
      sourceArea,
      destinationArea
    );
  };

  switchImage(imagePath: string) {
    this.image = this.imageService.load(imagePath, ()=>{});
  };

};

class AnimatedSprite extends Sprite {
  private frames: number;
  private currentFrame: number;
  
  constructor(
    sheetPath: string, 
    frameWidth: number, 
    frameHeight: number, 
    imageService: ImageService, 
    protected rows: number, 
    protected columns: number, 
    protected repeat: boolean
  ) {
    super (
      sheetPath, 
      frameWidth, 
      frameHeight, 
      imageService
    );
    // your sprite sheet should be frameWidth * columns pixels wide and frameHeight * rows pixels tall
    // animation will always start at frame 0 (0,0 of the sheet) and progress through columns * rows frames
    this.columns = columns;
    this.rows = rows;
    this.frames = rows * columns;
    this.currentFrame = 0;
  }
  
  get frame() {
    return this.currentFrame;
  };

  advance(frameCount: number = 1) {
    if ((this.currentFrame + frameCount) > this.frames - 1) {
      if (this.repeat) {
        this.currentFrame = 0;
      }
    } else {
      this.currentFrame += frameCount;
    }
  };
  
  draw(canvas: Canvas, coordinates: Coordinate2d) {
    const cell = (this.currentFrame * this.frameWidth) / (this.frameWidth * this.columns);
    const row = Math.floor(this.currentFrame / this.columns);
    const col = (cell - row) * this.columns;
    const sourceArea = new Area(
      new Point2d(col * this.frameWidth, row * this.frameHeight),
      new Point2d(col * this.frameWidth + this.frameWidth, row * this.frameHeight + this.frameHeight)
    );
    const destinationArea = new Area(
      new Point2d(coordinates.x, coordinates.y),
      new Point2d(this.frameWidth, this.frameHeight)
    );

    canvas.drawImage(
      this.image, 
      sourceArea,
      destinationArea
    );

    this.advance();
  };  

};

export {
  Sprite,
  AnimatedSprite
};