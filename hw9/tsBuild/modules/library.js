"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(track) {
        //create Track for storage all tracks, using generic type
        this.Track = [];
        this.Track.push(track);
    }
    //create Add public method for tracks with type void
    Library.prototype.add = function () {
        var _this = this;
        var tracksArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tracksArray[_i] = arguments[_i];
        }
        tracksArray.forEach(function (track) {
            _this.Track.push(track);
        });
    };
    ;
    //create tracks list for watching all tracks, because Track - private storage
    Library.prototype.tracksList = function () {
        console.log(this.Track);
    };
    ;
    return Library;
}());
exports.Library = Library;
;
