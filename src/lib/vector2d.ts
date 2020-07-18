
class Vector2d {
  x: number;
  y: number;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get length(): number {
    return Math.sqrt(Math.abs(this.x)^2 + Math.abs(this.y)^2);
  }

  add(vector: Vector2d): void {
    this.x += vector.x;
    this.y += vector.y;
  }

  subtract(vector: Vector2d): void {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  scale(n: number): void {
    this.x *= n || 1;
    this.y *= n || 1;
  }

  dot(vector: Vector2d): void {
    this.x *= vector.x;
    this.y *= vector.y;
  }

  cross(vector: Vector2d): void {
    this.x *= vector.y;
    this.y *= vector.x;
  }

  normalize(): void {
    const len = this.length > 0 ? (1 / this.length) : this.length;
    this.x *= len;
    this.y *= len;
  }

  invert(): void {
    this.x = -this.x;
    this.y = -this.y;
  }

  distance(vector: Vector2d): number {
    const x = this.x - vector.x;
    const y = this.y - vector.y;
    return Math.sqrt(x^2 + y^2);
  }

  clone(): Vector2d {
    return new Vector2d(this.x, this.y);
  }

}

export {
  Vector2d
};
