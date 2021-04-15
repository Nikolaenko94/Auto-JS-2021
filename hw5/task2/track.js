class Track {    
    constructor(name, seconds, explicit, albom, singer){
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