
class Sprite {
  constructor(conf, type, point2d, imageService) {
      this.conf = conf;
      this.type = type;
      this.coordinates = point2d;
      this.width = this.conf.image ? this.conf.image.imageWidth : this.conf.sheet.frameWidth;
      this.height = this.conf.image ? this.conf.image.imageHeight : this.conf.sheet.frameHeight;
      this.frames = this.conf.sheet ? (this.conf.sheet.rows * this.conf.sheet.columns) : undefined;
      this.frame = (this.conf.sheet && this.conf.sheet.startFrame) ? 
                    this.conf.sheet.startFrame : 
                    0;
      this.imagePath = this.conf.image ? this.conf.image.path : this.conf.sheet.path;
      this.image = imageService.load(this.imagePath);
      this.columns = (this.conf.sheet && this.conf.sheet.columns) ?
                    this.conf.sheet.columns : 
                    1;
      this.rows = (this.conf.sheet && this.conf.sheet.rows) ?
                    this.conf.sheet.rows : 
                    1;
  }
}

export {
  Sprite
};