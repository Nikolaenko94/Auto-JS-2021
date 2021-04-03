class Library{    
    Track = [];
    Album = [];
    Artist = [];
 // ADD METHOD WITH NESTINGS   
    add(){ 
    //    value.constuctor.name; - return Class name "Track,Artist,Album";
    //    value.name - return class.name "Linkin park exemple";
    // IF :for classes! if one value - this CLASS. if more value: first - Class, nexts - parameters this Class;
    //ELSE: For class parameters. If we have more then one parameters = > [new Class,...parametrs for this class ];  
                            // TRACK
            if(arguments[0].constructor.name === "Track"){
                if(arguments.length === 1){
                    this.Track.push(arguments[0]);
                }
                //FOR TRACK WE DON'T HAVE NECESSARY ADD ADDITIONAL PARAMETERS. IT'S NOT LOGICAL
                else{ return "Pls using update for Track." }      
            };

                            // ALBUM
            if(arguments[0].constructor.name === "Album"){
                if(arguments.length === 1){
                    this.Album.push(arguments[0]);
                }
                else{
                    this.Album.forEach(element => {
                        if(element === arguments[0]){
                            for(let i = 1; i < arguments.length; i++){
                                if(Array.isArray(arguments[i])){
                                    if(arguments[i][i-1].constructor.name === "Track" ){                                                                                             
                                        element.traks = element.traks.concat(arguments[i]);
                                    }                                 
                                }
                                if(arguments[i].constructor.name === "Track"){
                                        element.traks.push(arguments[i]);
                                }                           
                            }
                        } 
                    });
                }         
            };
                                //ARTIST
            if(arguments[0].constructor.name === "Artist"){
                if(arguments.length === 1){
                    this.Artist.push(arguments[0]);
                }
                else{
                    this.Artist.forEach(element => {
                        if(element === arguments[0]){
                            for(let i = 1; i < arguments.length; i++){
                                if(Array.isArray(arguments[i])){
                                    if(arguments[i][i-1].constructor.name === "Track" ){                                                                                             
                                        element.traks = element.traks.concat(arguments[i]);
                                    }
                                    if(arguments[i][i-1].constructor.name === "Album"){
                                        element.albums = element.albums.concat(arguments[i]);
                                    }                                 
                                }
                                if(arguments[i].constructor.name === "Track"){
                                        element.traks.push(arguments[i]);
                                }
                                if(arguments[i].constructor.name === "Album"){
                                    element.albums.push(arguments[i]);
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
        let current = 0; 
        let myTracks = this.Track;             
        let mainInterval= setInterval(function(){ 
            console.log(myTracks[current+1].name)            
            current++;
            if(current + 1 >= myTracks.length){
                current = 0;
                clearTimeout(mainInterval);
            }             
        }, myTracks[current].seconds*1000);
        return myTracks[current].name;
    };    
};
module.exports = {
    Library,    
}