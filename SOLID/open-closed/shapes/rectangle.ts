import { Shape } from "./shape.interface";

export default class Rectangle implements Shape {
  constructor(private width: number, private height: number) { }

  calculateArea(): number {
    return this.width * this.height;
  }
}
