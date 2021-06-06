"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
var Artist = /** @class */ (function () {
    function Artist(name, dateRelease, albums, tracks) {
        this.name = name;
        this.dateRelease = dateRelease;
        this.albums = albums;
        this.tracks = tracks;
        //TYPE GUADRD
        if (typeof dateRelease !== "object") {
            throw new Error("Error data type for Artist:dateRelease");
        }
        if (typeof name !== "string") {
            throw new Error("Error data type for Artist:name");
        }
        if (typeof tracks !== "object" && typeof tracks !== "undefined") {
            throw new Error("Error data type: for Artist:tracks");
        }
        if (typeof albums !== "object" && typeof albums !== "undefined") {
            throw new Error("Error data type for Artist:albums");
        }
    }
    ;
    return Artist;
}());
exports.Artist = Artist;
;
