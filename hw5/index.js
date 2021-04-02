//import task2
const album = require("./task2/album");
const track = require("./task2/track");
const artist = require("./task2/artist");
const Library = require("./task2/library");

//usage taks2
console.log("==================TASK 2===============");
let library = new Library.Library;
let InTheEnd = new track.Track("In the End", 216, "HybridTheory", "Linkin Park", false);
let Papercut = new track.Track("Papercut", 184, "Hybrid Theory", "Linkin Park", false);
let HybridTheory = new album.Album("Hybrid Theory", new Date("2000-10-24"), "Linkin Park", [InTheEnd, Papercut]);
let LinkinPark = new artist.Artist("Linkin Park", new Date("1996-01-01"), [HybridTheory],[InTheEnd, Papercut]);
let newTrack = new track.Track("newTrack", 200, "HybridTheory", "Linkin Park", false);
let newTrack2 = new track.Track("newTrack2", 200, "HybridTheory", "Linkin Park", false);
let newAlbum = new album.Album("newAlbum", new Date("2000-10-24"), "Linkin Park", [InTheEnd, Papercut]);
let newAlbum2 = new album.Album("newAlbum2", new Date("2000-10-24"), "Linkin Park", [InTheEnd, Papercut]);


library.add(LinkinPark);
library.update(LinkinPark,'name', "adadasd");
console.log(library.Artist);

