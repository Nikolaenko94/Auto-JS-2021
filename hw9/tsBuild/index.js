"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import main classes: Track, Artist, Album;
var track_1 = require("./modules/track");
var album_1 = require("./modules/album");
var artist_1 = require("./modules/artist");
//import library class
var library_1 = require("./modules/library");
//import player class
var player_1 = require("./modules/player");
//import for pattern command
var repl_1 = require("repl");
//import readline for emitKeypressEvents
var readline = require('readline');
//creating tracks, albom, artist
var trackInTheEnd = new track_1.Track("In The End", 5, false);
var trackPapercut = new track_1.Track("Papercut", 4, false);
var trackCastleOfGlass = new track_1.Track("Castle Of Glass", 6, false);
var trackFaint = new track_1.Track("Faint", 4, false);
var albumHybridTheory = new album_1.Album("Hybrid Theory", new Date("2000-10-24"), [trackInTheEnd, trackPapercut, trackCastleOfGlass, trackFaint]);
var artistLinkinPark = new artist_1.Artist("Linkin Park", new Date("1996-01-01"), [albumHybridTheory], [trackInTheEnd, trackPapercut, trackCastleOfGlass, trackFaint]);
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
var lpLibrary = new library_1.Library(trackInTheEnd);
lpLibrary.add(trackPapercut);
lpLibrary.delete(trackInTheEnd);
lpLibrary.add(trackInTheEnd, trackCastleOfGlass, trackFaint);
lpLibrary.update(trackInTheEnd, 'durationTime', 4);
lpLibrary.search("In The End");
lpLibrary.delete(trackFaint);
//createing player
var player = player_1.Player.getInstance(lpLibrary);
player.shafle();
// setTimeout(() => {
//     player.play();    
//     player.next();  
// }, 1000);
// setTimeout(() => {
//     player.pause()
// }, 3000);
// setTimeout(() => {
//     player.play()
//     player.prev()
// }, 5000);
function playerCommands() {
    repl_1.start('Playing music').context.play = player.play();
    repl_1.start('Next music').context.next = player.next();
    repl_1.start('Prev music').context.prev = player.prev();
    repl_1.start('Pause music').context.stop = player.pause();
    repl_1.start('Playing music').context.play = player.play();
}
;
// setTimeout(() => {
//     playerCommands(); 
// }, 25000);
// BONUS: KeypressEvents
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}
//ctrl+c into terminal - for STOP setRawMode
process.stdin.on('keypress', function (str, key) {
    if (key.ctrl && key.name === 'c') {
        process.stdin.setRawMode(false);
    }
});
//ctrl+y - for play()
process.stdin.on('keypress', function (str, key) {
    if (key.ctrl && key.name === 'y') {
        player.play();
    }
});
//ctrl+u - for pause()
process.stdin.on('keypress', function (str, key) {
    if (key.ctrl && key.name === 'u') {
        player.pause();
    }
});
//ctrl+l - for next()
process.stdin.on('keypress', function (str, key) {
    if (key.ctrl && key.name === 'l') {
        player.next();
    }
});
//shift+n - for prev()
process.stdin.on('keypress', function (str, key) {
    if (key.shift && key.name === 'n') {
        player.prev();
    }
});
