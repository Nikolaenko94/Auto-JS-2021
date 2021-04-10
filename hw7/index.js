//import task 1 
const { StringBuilder } = require('./task1/stringBuilder');
//import task 2
const album = require("./task1/album");
const track = require("./task1/track");
const artist = require("./task1/artist");
const Library = require("./task1/library");

//usage task 1
console.log("===============TASK 1================");
const hellobuilder = new StringBuilder('HH');
hellobuilder.append('el')
hellobuilder.append('lo')
hellobuilder.delete(1,1)
hellobuilder.build()         
console.log(hellobuilder.toString());

//usage task2
console.log("===============TASK 2================");
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

library.add(HybridTheory);
library.add(LinkinPark);
library.add(InTheEnd);
library.add(Papercut);
console.log(library.search("In the End"));