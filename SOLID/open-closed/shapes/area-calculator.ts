import { Shape } from "./shape.interface";

export default class AreaCalculator {
  constructor(private shapes: Shape[]) { }

  calculateTotalArea(): number {
    return this.shapes.reduce((total, shape) => total += shape.calculateArea(), 0);
  }
}