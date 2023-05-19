export default class WriteObject {
  constructor(public name: string, private pointSize: number) { }

  write() {
    console.log(`You are writing with ${this.name}.`);
  }

  writeDetails() {
    console.log(`This is a ${this.name}, with a point size of ${this.pointSize}.`);
  }
}
