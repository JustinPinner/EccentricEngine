
class ImageService {
	constructor() {
		this.defaultPath = './assets/'
		this._loadedImages = [];
	}
}

ImageService.prototype.load = function(imgPath, onLoad) {
	const fullPath = this.defaultPath + imgPath;
	for(var i = 0; i < this._loadedImages.length; i++) {
		if (this._loadedImages[i].path === fullPath) {
			return this._loadedImages[i].img;
		}
	}
	const image = new Image();
	image.src = fullPath;
	if (onLoad) {
		image.addEventListener('load', onLoad, false);
	}
	this._loadedImages.push({path: fullPath, img: image});
	return image;
}

export {
  ImageService
};
