// import task 1
const album = require("./task1/album");
const track = require("./task1/track");
const artist = require("./task1/artist");
const Library = require("./task1/library");
// import task 2

//usage task 1
let library = new Library.Library;
let InTheEnd = new track.Track("In the End", 5, "HybridTheory", "Linkin Park", false);
let Papercut = new track.Track("Papercut", 4, "Hybrid Theory", "Linkin Park", false);
let HybridTheory = new album.Album("Hybrid Theory", new Date("2000-10-24"), "Linkin Park", [InTheEnd, Papercut]);
let LinkinPark = new artist.Artist("Linkin Park", new Date("1996-01-01"), [HybridTheory],[InTheEnd, Papercut]);

library.add(HybridTheory);
library.add(LinkinPark);
library.add(InTheEnd);
library.add(Papercut);
console.log(library.search("In the End"));
//usage task 2
