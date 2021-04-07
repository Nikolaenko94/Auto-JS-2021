//import task1
const calculator = require("./task1/calculator");
//import task2
const album = require("./task2/album");
const track = require("./task2/track");
const artist = require("./task2/artist");
const Library = require("./task2/library");

//usage task1
console.log("==================TASK 1===============");
console.log(calculator.funcInput);
//usage task2
setTimeout(() => {
console.log("==================TASK 2===============");
let library = new Library.Library;
let InTheEnd = new track.Track("In the End", 5, false);
let Papercut = new track.Track("Papercut", 4, false);
let HybridTheory = new album.Album("Hybrid Theory", new Date("2000-10-24"), [InTheEnd, Papercut]);
let LinkinPark = new artist.Artist("Linkin Park", new Date("1996-01-01"), [HybridTheory],[InTheEnd, Papercut]);
let newTrack = new track.Track("newTrack", 3, false, HybridTheory, LinkinPark);
let newTrack2 = new track.Track("newTrack2", 3, false, HybridTheory, LinkinPark);

InTheEnd.albom = HybridTheory;
InTheEnd.singer = LinkinPark;
Papercut.albom = HybridTheory;
Papercut.singer = LinkinPark;
HybridTheory.singer = LinkinPark;

library.add(InTheEnd);
library.add(Papercut);
library.add(newTrack);
library.add(newTrack2);
library.add(InTheEnd);
library.add(Papercut);
library.add(newTrack);
library.add(newTrack2);
console.log(library.Track[0].duration())
console.log(library.play());
setTimeout(()=> library.next(), 1000);
setTimeout(()=> library.prev(), 1000);
setTimeout(()=> library.prev(), 5000);
setTimeout(()=> library.pause(), 9000);
setTimeout(()=> library.play(), 13000);
}, 5000);

