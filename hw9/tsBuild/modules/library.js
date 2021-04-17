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
    //create Delete public method 
    Library.prototype.delete = function (value) {
        var index = this.Track.indexOf(value);
        this.Track.splice(index, 1);
        console.log(value.name + ": successfully deleted");
    };
    ;
    return Library;
}());
exports.Library = Library;
;
