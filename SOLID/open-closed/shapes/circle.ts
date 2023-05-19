import { Shape } from "./shape.interface";

export default class Circle implements Shape {
  constructor(private radius: number) { }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
