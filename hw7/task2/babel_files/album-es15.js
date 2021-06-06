"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Album = function Album(name, data, traks, singer) {
    _classCallCheck(this, Album);

    this.name = name;
    this.data = data;
    this.traks = traks;
    this.singer = singer;
};

;

module.exports = {
    Album: Album
};
