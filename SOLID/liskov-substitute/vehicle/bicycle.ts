import Vehicle from "./vehicle";

export default class Bicycle extends Vehicle {
  startEngine(): void {
    throw new Error("Bicycles don't have engines");
  }

  accelerate(speed: number): void {
    console.log(`Bicycle sped up to ${speed} km/h`);
  }
}
