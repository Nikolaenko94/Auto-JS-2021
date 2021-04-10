const album = require("./album");
const track = require("./track");
const artist = require("./artist");
class Create {
    create(type){
        let create;
        if(type === "artist"){
            create = new artist.Artist();
        }else if(type === "album"){
            create = new album.Album();
        }else if(type === "track"){
           create = new track.Track();
        }
        return create;
    }
}

module.exports = {
    Create,
}