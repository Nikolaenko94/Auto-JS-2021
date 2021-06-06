"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
var Album = /** @class */ (function () {
    function Album(name, dateRelease, tracks, artist) {
        this.name = name;
        this.dateRelease = dateRelease;
        this.tracks = tracks;
        this.artist = artist;
        //TYPE GUADRD
        if (typeof dateRelease !== "object") {
            throw new Error("Error data type for Album:dateRelease");
        }
        if (typeof name !== "string") {
            throw new Error("Error data type for Album:name");
        }
        if (typeof tracks !== "object" && typeof tracks !== "undefined") {
            throw new Error("Error data type for Album:tracks");
        }
        if (typeof artist !== "object" && typeof artist !== "undefined") {
            throw new Error("Error data type for Album:artist");
        }
    }
    ;
    return Album;
}());
exports.Album = Album;
;
