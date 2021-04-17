//import main classes: Track, Artist, Album;
import {Track} from "./modules/track"
import {Album} from "./modules/album"
import {Artist} from "./modules/artist"
//import library class
import {Library} from "./modules/library"
//import player class
import {Player} from "./modules/player"
//creating tracks, albom, artist
let trackInTheEnd = new Track("In The End", 5, false);
let trackPapercut = new Track("Papercut", 4, false);
let trackCastleOfGlass = new Track("Castle Of Glass", 6, false);
let trackFaint = new Track("Faint", 4, false);
let albumHybridTheory = new Album("Hybrid Theory", new Date("2000-10-24"), [trackInTheEnd, trackPapercut, trackCastleOfGlass, trackFaint]);
let artistLinkinPark = new Artist("Linkin Park", new Date("1996-01-01"), [albumHybridTheory],[trackInTheEnd, trackPapercut, trackCastleOfGlass, trackFaint]);
albumHybridTheory.artist = artistLinkinPark;
trackInTheEnd.album = albumHybridTheory;
trackPapercut.album = albumHybridTheory;
trackCastleOfGlass.album = albumHybridTheory;
trackFaint.album = albumHybridTheory;
trackInTheEnd.artist = artistLinkinPark;
trackPapercut.artist = artistLinkinPark;
trackCastleOfGlass.artist = artistLinkinPark;
trackFaint.artist = artistLinkinPark;
//creating library
let lpLibrary = new Library(trackInTheEnd);
lpLibrary.add(trackPapercut);
lpLibrary.delete(trackInTheEnd);
lpLibrary.add(trackInTheEnd,trackCastleOfGlass,trackFaint);
lpLibrary.update(trackInTheEnd, 'durationTime', 4);
lpLibrary.search("In The End");
lpLibrary.delete(trackFaint);
//createing player
let player = Player.getInstance(lpLibrary);
console.log(player);