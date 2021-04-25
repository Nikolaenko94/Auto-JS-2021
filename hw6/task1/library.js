const { setImmediate, setInterval } = require('timers');
const EventEmitter = require('events');
const Track = require('./track');
const Album = require('./album');
const Artist = require('./artist')
class Library{    
    Track = [];
    Album = [];
    Artist = [];
 // ADD METHOD WITH NESTINGS   
    add(...args){ 
    //    value.constuctor.name; - return Class name "Track,Artist,Album";
    //    value.name - return class.name "Linkin park exemple";
    // IF :for classes! if one value - this CLASS. if more value: first - Class, nexts - parameters this Class;
    //ELSE: For class parameters. If we have more then one parameters = > [new Class,...parametrs for this class ];           
             
                            // TRACK                            
            if(args[0] instanceof Track.Track){
                if(args.length === 1){
                    this.Track.push(args[0]);                    
                }
                //FOR TRACK WE DON'T HAVE NECESSARY ADD ADDITIONAL PARAMETERS. IT'S NOT LOGICAL
                else{ return "Pls using update for Track." }      
            };

                            // ALBUM
            if(args[0] instanceof Album.Album){
                if(args.length === 1){
                    this.Album.push(args[0]);
                }
                else{
                    this.Album.forEach(element => {
                        if(element === args[0]){
                            for(let i = 1; i < args.length; i++){
                                if(Array.isArray(args[i])){
                                    if(args[i][i-1].constructor.name === "Track" ){                                                                                             
                                        element.traks = element.traks.concat(args[i]);
                                    }                                 
                                }
                                if(args[i].constructor.name === "Track"){
                                        element.traks.push(args[i]);
                                }                           
                            }
                        } 
                    });
                }         
            };
                                //ARTIST
            if(args[0] instanceof Artist.Artist){
                if(args.length === 1){
                    this.Artist.push(args[0]);
                }
                else{
                    this.Artist.forEach(element => {
                        if(element === args[0]){
                            for(let i = 1; i < args.length; i++){
                                if(Array.isArray(args[i])){
                                    if(args[i][i-1].constructor.name === "Track" ){                                                                                             
                                        element.traks = element.traks.concat(args[i]);
                                    }
                                    if(args[i][i-1].constructor.name === "Album"){
                                        element.albums = element.albums.concat(args[i]);
                                    }                                 
                                }
                                if(args[i].constructor.name === "Track"){
                                        element.traks.push(args[i]);
                                }
                                if(args[i].constructor.name === "Album"){
                                    element.albums.push(args[i]);
                                }
                                                         
                            }
                        } 
                    });
                }                           
            };         
    };        

// DELETE METHOD 
    delete(value){
                    //TRACK
        if(value.constructor.name === "Track"){
           let index = this.Track.indexOf(value);
           this.Track.splice(index,1);               
        };
                    //ALBUM
        if(value.constructor.name === "Album"){
            let index = this.Album.indexOf(value);
            this.Album.splice(index,1);               
         };
                    //ARTIST
        if(value.constructor.name === "Artist"){
            let index = this.Artist.indexOf(value);
            this.Artist.splice(index,1);               
         };         
    };

// UPDATE METHOD
    update(myElement, argument, value ){
                    //TRACK
        if(myElement.constructor.name === "Track"){
            this.Track.forEach(element => {
                if(element === myElement){
                    element[`${argument}`] = value;
                }
            });            
        }
                    //ALBUM
        if(myElement.constructor.name === "Album"){
            this.Album.forEach(element => {
                if(element === myElement){
                    element[`${argument}`] = value;
                }
            });            
        }
        if(myElement.constructor.name === "Artist"){
            this.Artist.forEach(element => {
                if(element === myElement){
                    element[`${argument}`] = value;
                }
            });            
        }        
    }
    
//PLAY METHOD
    play(){        
        const player = new EventEmitter();              
        let current = 0; 
        let myTracks = this.Track;
        let strInfo = `${myTracks[current].name}, Duration: ${myTracks[current].seconds}`; 
        //EventEmitter next()        
        this.nextTrack = function(){player.on('next', ()=>{
            if(current + 1 >= myTracks.length){ 
                current = 0;                
            }
            else{
                current++;                            
            }   
                       
        })};
        //EventEmitter prev()    
        this.prevTrack = function(){player.on('prev', ()=>{
            if(current - 1 < 0){ 
                console.log("Invalid command");               
            }
            else{
                current--;                            
            }   
                       
        })};
        //EventEmitter pause()
        this.pauseTrack = function(){player.on('pause', ()=>{
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
        console.log(myTracks[current].name)
        return strInfo;
    };
    next(){
        this.nextTrack();
    };
    prev(){
        this.prevTrack();
    };
    pause(){
        this.pauseTrack();
    };
    search(value){
        const arrForSearch = this.Track.concat(this.Artist, this.Album);        
        let arrFinaly = arrForSearch.filter((element)=>{               
               return Object.values(element).includes(value);
        });
        return arrFinaly;
    }    
};

module.exports = {
    Library,    
}