import Person from "./person";

export default class Bodybuilder extends Person {
  warmUp(): void {
    console.log("Bodybuilder is warming up..");
  }

  liftBarbell(weight: number): void {
    console.log(`Bodybuilder lifted ${weight} kilo's pretty easy!`);
  }
}
