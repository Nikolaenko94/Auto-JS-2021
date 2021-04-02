//import task2
const album = require("./task2/album");
const track = require("./task2/track");
const artist = require("./task2/artist");
const Library = require("./task2/library");

//usage taks2
console.log("==================TASK 2===============");
let InTheEnd = new track.Track("In the End", 216, "Hybrid Theory", "Linkin Park", false);
let Papercut = new track.Track("Papercut", 184, "Hybrid Theory", "Linkin Park", false);
let HybridTheory = new album.Album("Hybrid Theory", new Date("2000-10-24"), "Linkin Park", [InTheEnd, Papercut]);
let LinkinPark = new artist.Artist("Linkin Park", new Date("1996-01-01"), [HybridTheory],[InTheEnd, Papercut]);


console.log(Library.Library.add(LinkinPark));
console.log(LinkinPark.__proto__.constructor.name)
