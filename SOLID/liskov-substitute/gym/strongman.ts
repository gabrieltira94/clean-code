import Person from "./person";

export default class Strongman extends Person {
  warmUp(): void {
    console.log("Strongman is warming up..");
  }

  liftBarbell(weight: number): void {
    console.log(`Strongman lifted ${weight} kilo's without difficulties!`);
  }
}
