import Bicycle from "./bicycle";
import Car from "./car";
import Motorcycle from "./motorcycle";
import Vehicle from "./vehicle";

const race = (vehicles: Vehicle[]) => {
  vehicles.forEach((vehicle) => {
    vehicle.startEngine();
    vehicle.accelerate(100);
  });
};

const car = new Car();
const bicycle = new Bicycle();
const motorcycle = new Motorcycle();

race([car, bicycle, motorcycle]);
