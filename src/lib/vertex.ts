import { Point2d } from './point2d';

class Vertex extends Point2d {
  constructor(
    id: number,
    x: number,
    y: number,
    connectsTo: number[]
  ) {
    super(x, y);
  };

}

export {
  Vertex
};
