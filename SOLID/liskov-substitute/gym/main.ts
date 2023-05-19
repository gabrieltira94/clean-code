import Bodybuilder from "./bodybuilder";
import Crossfiter from "./crossfiter";
import Person from "./person";
import Strongman from "./strongman";

const compete = (persons: Person[]) => {
  persons.forEach((person) => {
    person.warmUp();
    person.liftBarbell(80);
  });
};

const bodybuilder = new Bodybuilder();
const crossfiter = new Crossfiter();
const strongman = new Strongman();

/**
 * Although we created Bodybuilder, Crossfiter and Strongman instances,
 * the compete function expects Person instance
*/
compete([bodybuilder, crossfiter, strongman]);
