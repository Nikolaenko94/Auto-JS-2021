//import task 1
const repl = require('repl');
const Library = require("./task1/library");
const album = require("./task1/album");
const track = require("./task1/track");
const artist = require("./task1/artist");
const fabric = require("./task1/fabric");
const player = require("./task1/player");

//usage task1
console.log("===============TASK 1================");
const library = new Library.Library;
const factory = new fabric.Create;
const fabricTrack = factory.create('track');
const myPlayer = new player.Player();
const library2 = new Library.Library;

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
library2.add(InTheEnd);
library2.add(newTrack2);

myPlayer.add(library);
myPlayer.add(library2);
const newMyPlayer = new player.Player();
console.log("Check singleton myPlayer");
console.log("Number of tracks in the player:");
console.log(newMyPlayer.Tracks.length);
function replPlay(){
    repl.start('Music is playing with REPL\n').context.play = myPlayer.play();
}
function replPause() {
    repl.start('Music pause with REPL\n').context.pause = myPlayer.pause();
}
function replNext() {
    repl.start('Music next with REPL\n').context.next = myPlayer.next();
}
function replPrev() {
    repl.start('Music prev with REPL\n').context.prev = myPlayer.prev();
}

replPlay();
replPause();
replPlay();
replNext();
replPrev();