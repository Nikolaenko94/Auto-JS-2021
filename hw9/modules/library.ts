import { Track } from "./track";
import { MainClassesTypes } from "./_typesGuardMainClass";
export class Library {
    //create Track for storage all tracks, using generic type
    private Track: Array<object> = [];    
    constructor(track?: Track ){
        this.Track.push(track);
    }
    //create Add public method for tracks with type void
    public add(...tracksArray: Track[]):void{       
        tracksArray.forEach(track => {
            this.Track.push(track)
        })               
    };
    //create tracks list for watching all tracks, because Track - private storage
    public tracksList():void{
        console.log(this.Track)        
    };
    //create Delete public method 
    public delete(value: Track):void{        
        let index: number = this.Track.indexOf(value);
        this.Track.splice(index,1);        
        console.log(`${value.name}: successfully deleted`)                    
    };
    //create Update public method
    public update(myElement: Track, argument: string, value: MainClassesTypes): void{
        this.Track.forEach(element => {
            if(element === myElement){
                element[`${argument}`] = value;
            }
        })
        let index: number = this.Track.indexOf(myElement);
        console.log("updated elemen:");
        console.log(this.Track[index]);
    };   
};