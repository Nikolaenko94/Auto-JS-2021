"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(track) {
        //create Track for storage all tracks, using generic type
        this.Track = [];
        if (track) {
            this.Track.push(track);
        }
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
        return this.Track;
    };
    ;
    //create Delete public method 
    Library.prototype.delete = function (value) {
        var index = this.Track.indexOf(value);
        this.Track.splice(index, 1);
        console.log(value.name + ": successfully deleted");
    };
    ;
    //create Update public method
    Library.prototype.update = function (myElement, argument, value) {
        this.Track.forEach(function (element) {
            if (element === myElement) {
                element["" + argument] = value;
            }
        });
        var index = this.Track.indexOf(myElement);
        console.log("updated elemen:");
        console.log(this.Track[index]);
    };
    ;
    //create search() method how promise
    Library.prototype.search = function (value) {
        var arrFinaly = this.Track.filter(function (element) {
            return Object.values(element).includes(value);
        });
        var promise = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
        promise(300).then(function () {
            console.log(arrFinaly);
            return promise(300);
        });
    };
    ;
    return Library;
}());
exports.Library = Library;
;
