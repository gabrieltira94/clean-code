import Person from "./person";

export default class Crossfiter extends Person {
  warmUp(): void {
    console.log("Crossfiter is warming up..");
  }

  liftBarbell(weight: number): void {
    console.log(`Crossfiter lifted ${weight} kilo's fairly good!`);
  }
}
