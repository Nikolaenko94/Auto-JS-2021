import { Track } from "./track";
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
};