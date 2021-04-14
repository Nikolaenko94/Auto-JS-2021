class Track {    
    constructor(name, seconds, albom, singer, explicit){
        this.name = name;
        this.seconds = seconds;
        this.albom = albom;
        this.singer = singer;
        this.explicit = explicit;
    }
    duration(){
        return this.seconds;
    }

}

module.exports  = {
    Track,
}