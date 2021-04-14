//import task 1
const repl = require('repl');
const Library = require("./task1/library");
const album = require("./task1/album");
const track = require("./task1/track");
const artist = require("./task1/artist");
const fabric = require("./task1/fabric");

//usage task1
console.log("===============TASK 1================");
const library = new Library.Library;
const factory = new fabric.Create;
const fabricTrack = factory.create('track');
//ex fabric method work
fabricTrack.name = "Castle of Glass";
fabricTrack.seconds = 7;
fabricTrack.albom = album;
fabricTrack.explicit = false;
console.log("class creating prepared fabric pattern:")
console.log(fabricTrack);

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

library.add(HybridTheory);
library.add(LinkinPark);
library.add(InTheEnd);
library.add(Papercut);
library.add(newTrack);
library.add(newTrack2);
library.add(fabricTrack);

//DEMONSTRATION HOW WORK SINGLTON
console.log("Singlton work")
const newLibrary = new Library.Library;
console.log(newLibrary);
repl.start('Music is playing with REPL\n').context.play = library.play();
repl.start('Music pause with REPL\n').context.pause = library.pause();
repl.start('Music is playing with REPL\n').context.play = library.play();
repl.start('Music next with REPL\n').context.next = library.next();
repl.start('Music prev with REPL\n').context.prev = library.prev();