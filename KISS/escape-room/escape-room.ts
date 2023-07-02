export default class EscapeRoom {
  private secretCode: number = 0;

  constructor(private theme: string, private description: string) { }

  startEscapeRoom(code: number) {
    try {
      this.setSecretCode(code);
      this.unlockDoor();
      this.playGame();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  private unlockDoor() {
    if (!this.secretCode)
      throw new Error('Please enter the secret code first! Hint: setSecretCode()');

    if (this.secretCode === 1204)
      return console.log('Code accepted! Have fun!');

    throw new Error('Incorrect code!');
  }

  private playGame() {
    console.log(`Welcome to ${this.theme} theme!`);
    this.showDescription();
    this.showFinishedMessage();
  }

  private showDescription() {
    console.log(this.description);
  }

  private showFinishedMessage() {
    const random = Math.round(Math.random() * 10);

    if (random < 5)
      console.log('Ops! We are sorry, but the time has passed on. :(');
    else
      console.log('Congratulations! You finished the game!');
  }

  private setSecretCode(code: number) {
    if (code < 1000)
      throw new Error('Invalid secret code! Must contain at least 4 digits.');

    this.secretCode = code;
  }
}