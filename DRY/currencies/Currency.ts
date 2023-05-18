export default class Currency {
  constructor(public name: string, public country: string) { }

  printName() {
    console.log(`This is ${this.name} currency.`);
  }

  printFullDetails() {
    console.log(`${this.name} currency is used in ${this.country} country.`);
  }
}