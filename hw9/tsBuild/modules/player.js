"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var events_1 = require("events");
var Player = /** @class */ (function () {
    function Player(library) {
        this.TracksPlayer = [];
    }
    ;
    Player.getInstance = function (library) {
        if (!Player.instance) {
            Player.instance = new Player(library);
            library.tracksList().forEach(function (element) {
                Player.instance.TracksPlayer.push(element);
            });
        }
        return Player.instance;
    };
    ;
    //PLAY METHOD
    Player.prototype.play = function () {
        var player = new events_1.EventEmitter();
        var current = 0;
        var strInfo = Player.instance.TracksPlayer[current].name + ", Duration: " + Player.instance.TracksPlayer[current].durationTime;
        //EventEmitter next()        
        this.nextTrack = function () {
            player.once('next', function () {
                if (current + 1 >= Player.instance.TracksPlayer.length) {
                    current = 0;
                }
                else {
                    current++;
                }
            });
        };
        //EventEmitter prev()    
        this.prevTrack = function () {
            player.once('prev', function () {
                if (current - 1 < 0) {
                    console.log("Invalid command");
                }
                else {
                    current--;
                }
            });
        };
        //EventEmitter pause()
        this.pauseTrack = function () {
            player.once('pause', function () {
                mainInterval.unref();
                clearInterval(mainInterval);
                console.log("pause");
            });
        };
        var mainInterval = setInterval(function () {
            player.emit('next');
            player.emit('prev');
            player.emit('pause');
            console.log(Player.instance.TracksPlayer[current + 1].name + ", Duration: " + Player.instance.TracksPlayer[current + 1].durationTime);
            current++;
            if (current + 1 >= Player.instance.TracksPlayer.length) {
                current = 0;
                clearInterval(mainInterval);
            }
        }, Player.instance.TracksPlayer[current].durationTime * 1000);
        //THIS CODE EMMITATION FOR WORK PAUSE AND PLAY        
        mainInterval.ref();
        //END EMITATION
        console.log("Play");
        console.log(Player.instance.TracksPlayer[current].name + ", Duration: " + Player.instance.TracksPlayer[current].durationTime);
        return strInfo;
    };
    ;
    //next
    Player.prototype.next = function () {
        this.nextTrack();
    };
    ;
    //prev
    Player.prototype.prev = function () {
        this.prevTrack();
    };
    ;
    //pause
    Player.prototype.pause = function () {
        this.pauseTrack();
    };
    ;
    //SHAFFLE METHOD
    Player.prototype.shafle = function () {
        var _a;
        //used method sorting Fisher-Iets 
        for (var i = Player.instance.TracksPlayer.length - 1; i > 0; i--) {
            var count = Math.floor(Math.random() * (i + 1));
            _a = [Player.instance.TracksPlayer[count], Player.instance.TracksPlayer[i]], Player.instance.TracksPlayer[i] = _a[0], Player.instance.TracksPlayer[count] = _a[1];
        }
    };
    ;
    return Player;
}());
exports.Player = Player;
;
