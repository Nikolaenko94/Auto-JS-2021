//import main classes: Track, Artist, Album;
import {Track} from "./modules/track"
import {Album} from "./modules/album"
import {Artist} from "./modules/artist"
//import library class
import {Library} from "./modules/library"
//import player class
import {Player} from "./modules/player"
//import for pattern command
import {start} from 'repl'
//import readline for emitKeypressEvents
const readline = require('readline');
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
//creating librarys
let lpLibrary = new Library(trackInTheEnd);
let lpLibrary2 = new Library(trackPapercut);
lpLibrary.add(trackPapercut);
lpLibrary.delete(trackInTheEnd);
lpLibrary.add(trackInTheEnd,trackCastleOfGlass,trackFaint);
lpLibrary.update(trackInTheEnd, 'durationTime', 4);
lpLibrary.search("In The End");
lpLibrary.delete(trackFaint);
//createing player
let player = Player.getInstance([lpLibrary,lpLibrary2]);
player.shuffle();
function playerCommands(): void{
    const replServer  = start({prompt:">"});
    replServer.defineCommand('play',{
      help:'Play',
      action(){
        player.play()
      }
    });
    replServer.defineCommand('next',{
      help:'Next',
      action(){
        player.next()
      }
    });
    replServer.defineCommand('prev',{
      help:'Prev',
      action(){
        player.prev()
      }
    });
    replServer.defineCommand('pause',{
      help:'pause',
      action(){
        player.pause()
      }
    });    
};
setTimeout(() => {
    playerCommands(); 
}, 25000);

// BONUS: KeypressEvents
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}
//ctrl+c into terminal - for STOP setRawMode
process.stdin.on('keypress', (str:string,key) => {
  if (key.ctrl && key.name === 'c') {
    process.stdin.setRawMode(false);
  }
});
//ctrl+y - for play()
process.stdin.on('keypress', (str:string,key) => {
    if (key.ctrl && key.name === 'y') {
        player.play();
    }
  });
//ctrl+u - for pause()
process.stdin.on('keypress', (str:string,key) => {
  if (key.ctrl && key.name === 'u') {
      player.pause();
  }
});
//ctrl+l - for next()
process.stdin.on('keypress', (str:string,key) => {
  if (key.ctrl && key.name === 'l') {
      player.next();
  }
});
//shift+n - for prev()
process.stdin.on('keypress', (str:string,key) => {
  if (key.shift && key.name === 'n') {
      player.prev();
  }
});