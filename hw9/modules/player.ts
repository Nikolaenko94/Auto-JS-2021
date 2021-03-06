import { Library } from "./library";
import { Track } from "./track";
import {EventEmitter} from 'events';
//import for pattern command
import {start} from 'repl'
export class Player {
    public TracksPlayer: Array<Track> = [];
    private nextTrack: Function;
    private prevTrack: Function;
    private pauseTrack: Function;
    private static instance: Player;
    private constructor(library: Array<Library>) {};
    static getInstance(library: Array<Library>): Player {
        if (!Player.instance) {
            Player.instance = new Player(library);
            Player.instance.playerCommands();
            library.forEach(element => {
                // Player.instance.TracksPlayer.push(element.tracksList);
                element.tracksList().forEach(element =>{
                    Player.instance.TracksPlayer.push(element)
                })
            });                                        
        }        
        return Player.instance;
    };
    //PLAY METHOD
    play():string{    
        const player: EventEmitter = new EventEmitter();                  
        let current: number = 0;         
        let strInfo: string = `${Player.instance.TracksPlayer[current].name}, Duration: ${Player.instance.TracksPlayer[current].durationTime}`; 
        //EventEmitter next()        
        this.nextTrack = function():void{player.on('next', ()=>{
            if(current + 1 >= Player.instance.TracksPlayer.length){ 
                current = 0;                
            }
            else{
                current++;                            
            }   
                    
        })};
        //EventEmitter prev()    
        this.prevTrack = function():void{player.on('prev', ()=>{
            if(current - 1 < 0){ 
                console.log("Invalid command");               
            }
            else{
                current--;                            
            }   
                    
        })};
        //EventEmitter pause()
        this.pauseTrack = function():void{player.on('pause', ()=>{
            mainInterval.unref();
            clearInterval(mainInterval);
            console.log("pause");                        
        })};

        let mainInterval: NodeJS.Timeout= setInterval(function(){
            player.emit('next');
            player.emit('prev');
            player.emit('pause');                                                                                      
            console.log(`${Player.instance.TracksPlayer[current+1].name}, Duration: ${Player.instance.TracksPlayer[current+1].durationTime}`);            
            current++;
            if(current + 1 >= Player.instance.TracksPlayer.length){
                current = 0;
                clearInterval(mainInterval);
            }                                     
        }, Player.instance.TracksPlayer[current].durationTime*1000);
        //THIS CODE EMMITATION FOR WORK PAUSE AND PLAY        
        mainInterval.ref();        
        //END EMITATION
        console.log("Play");
        console.log(`${Player.instance.TracksPlayer[current].name}, Duration: ${Player.instance.TracksPlayer[current].durationTime}`);
        return strInfo;
    };
    //next
    next():void{        
        this.nextTrack();
    };
    //prev
    prev():void{        
        this.prevTrack();
    };
    //pause
    pause():void{        
        this.pauseTrack();
    };
    //SHAFFLE METHOD
    shuffle(): void{
        //used method sorting Fisher-Iets 
        for (let i:number = Player.instance.TracksPlayer.length - 1; i > 0; i--) {
            let count: number = Math.floor(Math.random() * (i + 1));       
            [Player.instance.TracksPlayer[i], Player.instance.TracksPlayer[count]] = [Player.instance.TracksPlayer[count], Player.instance.TracksPlayer[i]];
          }          
    };
    playerCommands(): void{
        const replServer  = start({prompt:">"});
        replServer.defineCommand('play',{
        help:'Play',
        action(){
            Player.instance.play()
        }
        });
        replServer.defineCommand('next',{
        help:'Next',
        action(){
            Player.instance.next()
        }
        });
        replServer.defineCommand('prev',{
        help:'Prev',
        action(){
            Player.instance.prev()
        }
        });
        replServer.defineCommand('pause',{
        help:'pause',
        action(){
            Player.instance.pause()
        }
        })
    };
};
