export class Library {
    //create Track for storage all tracks, using generic type
    Track: Array<object> = [];    
    constructor(track: object ){
        this.Track.push(track);
    }
    
};