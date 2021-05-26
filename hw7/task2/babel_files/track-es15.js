"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Track = function () {
    function Track(name, seconds, explicit, albom, singer) {
        _classCallCheck(this, Track);

        this.name = name;
        this.seconds = seconds;
        this.albom = albom;
        this.singer = singer;
        this.explicit = explicit;
    }

    _createClass(Track, [{
        key: "duration",
        value: function duration() {
            return this.seconds;
        }
    }]);

    return Track;
}();

;

module.exports = {
    Track: Track
};
