import Vehicle from "./vehicle";

export default class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }

  accelerate(speed: number): void {
    console.log(`Car accelerated to ${speed} km/h`);
  }
}
