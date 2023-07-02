export default class Booking {
  constructor(private destination: string, private periodInDays: number) { }

  private calculateTravelCost() {
    const totalCost = (Math.random() * 900).toFixed(2);

    console.log(`Your cost for ${this.periodInDays} days in ${this.destination} is $${totalCost}.`);
  }

  private bookFlight() {
    console.log(`We just booked the best flight based on your criterias for ${this.destination}!`);
  }


  private bookHotel() {
    console.log(`We booked the most beautiful hotel based on your needs while staying in ${this.destination}!`);
  }

  planTravel() {
    this.bookFlight();
    this.bookHotel();
    this.calculateTravelCost();
  }
}