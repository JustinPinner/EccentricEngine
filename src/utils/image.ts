class GameImage {
  path: string;
  image: HTMLImageElement;
  constructor(
    path: string,
    img: HTMLImageElement
  ) {
    this.path = path;
    this.image = img;
  };
};

class ImageService {
  defaultPath: string;
  images: GameImage[];

	constructor(defaultImagePath: string) {
		this.defaultPath = defaultImagePath;
  };
  
  load(imgPath: string, onLoadListener) {
    const fullPath = this.defaultPath + imgPath;
    for(var i = 0; i < this.images.length; i++) {
      if (this.images[i].path === fullPath) {
        return this.images[i].image;
      }
    };
    const image = new Image();
    image.src = fullPath;
    if (onLoadListener) {
      image.addEventListener('load', onLoadListener, false);
    };
    this.images.push(new GameImage(fullPath, image));
    return image;
  };

};

export {
  ImageService
};
