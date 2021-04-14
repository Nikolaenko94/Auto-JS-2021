"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Artist = function Artist(name, data, albums, traks) {
    _classCallCheck(this, Artist);

    this.name = name;
    this.data = data;
    this.albums = albums;
    this.traks = traks;
};



module.exports = {
    Artist: Artist
};
