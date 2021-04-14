const repl = require('repl'); 
class Player{
    constructor(library){
        this.library = library;        
        if(Player._instance){
            return Player._instance
        }
        Player._instance = this;       
    }
    Tracks = [];
    //ADD TRACKS INTO LIBRARY !
    //ALL LIBRARY MUST HAVE ARRAY Track FOR TRACKS
    add(Library){
       Library.Track.forEach(element => {
           this.Tracks.push(element);
       }); 
    }
    //PLAY METHOD
    play(){ 
        
        const EventEmitter = require('events');
        const player = new EventEmitter();              
        let current = 0; 
        let myTracks = this.Tracks;
        let strInfo = `${myTracks[current].name}, Duration: ${myTracks[current].seconds}`; 
        //EventEmitter next()        
        this.nextTrack = function(){player.once('next', ()=>{
            if(current + 1 >= myTracks.length){ 
                current = 0;                
            }
            else{
                current++;                            
            }   
                    
        })};
        //EventEmitter prev()    
        this.prevTrack = function(){player.once('prev', ()=>{
            if(current - 1 < 0){ 
                console.log("Invalid command");               
            }
            else{
                current--;                            
            }   
                    
        })};
        //EventEmitter pause()
        this.pauseTrack = function(){player.once('pause', ()=>{
            mainInterval.unref();
            clearInterval(mainInterval);
            console.log("pause");                        
        })};

        let mainInterval= setInterval(function(){
            player.emit('next');
            player.emit('prev');
            player.emit('pause');                                                                                      
            console.log(`${myTracks[current+1].name}, Duration: ${myTracks[current+1].seconds}`);            
            current++;
            if(current + 1 >= myTracks.length){
                current = 0;
                clearInterval(mainInterval);
            }                                     
        }, myTracks[current].seconds*1000);
        //THIS CODE EMMITATION FOR WORK PAUSE AND PLAY        
        mainInterval.ref();        
        //END EMITATION
        console.log("Play");
        console.log(`${myTracks[current].name}, Duration: ${myTracks[current].seconds}`);
        return strInfo;
    };
    next(){
        repl.start('Next music').context.next = this.nextTrack();
        this.nextTrack();
    };
    prev(){
        repl.start('Prev music').context.prev = this.prevTrack();
        this.prevTrack();
    };
    pause(){
        repl.start('Pause music').context.stop = this.pauseTrack();
        this.pauseTrack();
    };
}

module.exports = {
    Player,    
}