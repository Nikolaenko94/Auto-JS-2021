"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
var Track = /** @class */ (function () {
    function Track(name, durationTime, explicit, artist, album) {
        this.name = name;
        this.durationTime = durationTime;
        this.explicit = explicit;
        this.artist = artist;
        this.album = album;
        //TYPE GUADRD
        if (typeof durationTime !== "number") {
            throw new Error("Error data type for Track:durationTime");
        }
        if (typeof name !== "string") {
            throw new Error("Error data type for Track:name");
        }
        if (typeof artist !== "object" && typeof artist !== "undefined") {
            throw new Error("Error data type: for Track:artist");
        }
        if (typeof album !== "object" && typeof album !== "undefined") {
            throw new Error("Error data type for Track:album");
        }
        if (typeof explicit !== "boolean") {
            throw new Error("Error data type for Track:explicit");
        }
    }
    ;
    return Track;
}());
exports.Track = Track;
;
