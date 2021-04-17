"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(library) {
    }
    ;
    Player.getInstance = function (library) {
        if (!Player.instance) {
            Player.instance = new Player(library);
        }
        return Player.instance;
    };
    ;
    return Player;
}());
exports.Player = Player;
