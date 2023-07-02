import EscapeRoom from "./escape-room";

const harryPotter = new EscapeRoom('Harry Potter', 'Hey, little wizards!\n Good luck in helping Harry Potter to find the truth of his parents\' story');
const jigSaw = new EscapeRoom('Jig Saw', "Let's play a game!\n You have an hour of testing your logic, and, if you fail, just think of what your hands and neck could feel!\nHave fun!");

harryPotter.startEscapeRoom(1204);
console.log('\n\n');

jigSaw.startEscapeRoom(99);
console.log('\n\n');

jigSaw.startEscapeRoom(1994);
console.log('\n\n');

jigSaw.startEscapeRoom(1204);