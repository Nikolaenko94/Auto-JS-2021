"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var album = require("./album");
var track = require("./track");
var artist = require("./artist");

var Create = function () {
    function Create() {
        _classCallCheck(this, Create);
    }

    _createClass(Create, [{
        key: "create",
        value: function create(type) {
            var create = void 0;
            if (type === "artist") {
                create = new artist.Artist();
            } else if (type === "album") {
                create = new album.Album();
            } else if (type === "track") {
                create = new track.Track();
            }
            return create;
        }
    }]);

    return Create;
}();

module.exports = {
    Create: Create
};
