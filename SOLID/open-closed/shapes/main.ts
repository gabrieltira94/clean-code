import AreaCalculator from "./area-calculator";
import Circle from "./circle";
import Rectangle from "./rectangle";
import { Shape } from "./shape.interface";

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const shapes: Shape[] = [circle, rectangle];

const areaCalculator = new AreaCalculator(shapes);
const totalArea = areaCalculator.calculateTotalArea();

console.log("Total Area:", totalArea);
