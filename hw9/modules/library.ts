import { Track } from "./track";
import { MainClassesTypes } from "./_typesGuardMainClass";
export class Library {
    //create Track for storage all tracks, using generic type
    private Track: Array<Track> = [];    
    constructor(track?: Track ){
        if(typeof track !== "object"){
            throw new Error("Error data type for track");            
        }
        if(track){
            this.Track.push(track);
        }                
    }
    //create Add public method for tracks with type void
    public add(...tracksArray: Track[]):void{       
        tracksArray.forEach(track => {
            this.Track.push(track)
        })               
    };
    //create tracks list for watching all tracks, because Track - private storage
    public tracksList():Array<Track>{        
        console.log(this.Track);
        return this.Track        
    };
    //create Delete public method 
    public delete(value: Track):void{        
        let index: number = this.Track.indexOf(value);
        this.Track.splice(index,1);        
        console.log(`${value.name}: successfully deleted`)                    
    };
    //create Update public method
    public update(myElement: Track, argument: string, value: MainClassesTypes | boolean): void{
        this.Track.forEach(element => {
            if(element === myElement){
                element[`${argument}`] = value;
            }
        })
        let index: number = this.Track.indexOf(myElement);
        console.log("updated elemen:");
        console.log(this.Track[index]);
    };
    //create search() method how promise
    public search(value: string):void{        
        let arrFinaly: Array<object> = this.Track.filter((element)=>{               
            return Object.values(element).includes(value);
        });                         
        const promise: Function = (ms:number) => new Promise((resolve) => setTimeout(resolve,ms));
        promise(300).then(()=>{        
                console.log(arrFinaly); 
                return promise(300);
        })        
    };
};