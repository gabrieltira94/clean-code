import Vehicle from "./vehicle";

export default class Motorcycle extends Vehicle {
  startEngine(): void {
    console.log("Motorcycle engine started");
  }

  accelerate(speed: number): void {
    console.log(`Motorcycle accelerated to ${speed} km/h`);
  }
}
