import Booking from "./booking";

const barcelona = new Booking('Barcelona', 12);
const houston = new Booking('Houston', 7);
const bali = new Booking('Bali', 21);

barcelona.planTravel();
console.log('\n');

houston.planTravel();
console.log('\n');

bali.planTravel();
