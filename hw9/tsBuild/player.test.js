"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var album_1 = require("./modules/album");
var artist_1 = require("./modules/artist");
var library_1 = require("./modules/library");
var track_1 = require("./modules/track");
//tests for Alboms
test('Album: class Album exists ', function () {
    expect(typeof album_1.Album).toBe("function");
    expect(album_1.Album.name).toBe("Album");
});
test('Album: required constructor', function () {
    var newAlbum = new album_1.Album("AlbumName", new Date("2000-10-24"));
    expect(newAlbum.name).toBe("AlbumName");
    expect(newAlbum.dateRelease.toString()).toBe("Tue Oct 24 2000 04:00:00 GMT+0400 (Москва, летнее время)");
    expect(newAlbum.tracks).toBe(undefined);
    expect(newAlbum.artist).toBe(undefined);
    newAlbum.tracks = "Track1";
    newAlbum.artist = "Artist1";
    expect(newAlbum.tracks).toBe("Track1");
    expect(newAlbum.artist).toBe("Artist1");
});
//tests for Artist
test('Artist: class Artist exists ', function () {
    expect(typeof artist_1.Artist).toBe("function");
    expect(artist_1.Artist.name).toBe("Artist");
});
test('Artist: required constructor', function () {
    var newArtist = new artist_1.Artist("ArtistName", new Date("2000-10-24"));
    expect(newArtist.name).toBe("ArtistName");
    expect(newArtist.dateRelease.toString()).toBe("Tue Oct 24 2000 04:00:00 GMT+0400 (Москва, летнее время)");
    expect(newArtist.tracks).toBe(undefined);
    expect(newArtist.albums).toBe(undefined);
    newArtist.tracks = "Track1";
    newArtist.albums = "Album1";
    expect(newArtist.tracks).toBe("Track1");
    expect(newArtist.albums).toBe("Album1");
});
//test for Track  
test('Track: class Track exists ', function () {
    expect(typeof track_1.Track).toBe("function");
    expect(track_1.Track.name).toBe("Track");
});
test('Track: required constructor', function () {
    var newTrack = new track_1.Track("TrackName", 5, false);
    expect(newTrack.name).toBe("TrackName");
    expect(newTrack.durationTime).toBe(5);
    expect(newTrack.explicit).toBe(false);
    expect(newTrack.artist).toBe(undefined);
    expect(newTrack.album).toBe(undefined);
    newTrack.artist = "Artist1";
    newTrack.album = "Album1";
    expect(newTrack.artist).toBe("Artist1");
    expect(newTrack.album).toBe("Album1");
});
//tests for Library
test('Library: class Library exists ', function () {
    expect(typeof library_1.Library).toBe("function");
    expect(library_1.Library.name).toBe("Library");
});
test('Library: required constructor, method tracksList', function () {
    var newTrack = new track_1.Track("TrackName", 5, false);
    var newLibrary = new library_1.Library(newTrack);
    var arrForTest = new Array(newTrack);
    expect(newLibrary.tracksList().length).toBe(1);
});
test('Library: method add', function () {
    var newTrack = new track_1.Track("TrackName", 5, false);
    var newLibrary = new library_1.Library();
    newLibrary.add(newTrack);
    expect(newLibrary.tracksList().length).toBe(1);
});
test('Library: method delete', function () {
    var newTrack = new track_1.Track("TrackName", 5, false);
    var newLibrary = new library_1.Library(newTrack);
    newLibrary.delete(newTrack);
    expect(newLibrary.tracksList().length).toBe(0);
});
test('Library: method search', function () {
    var newTrack = new track_1.Track("TrackName", 5, false);
    var newLibrary = new library_1.Library(newTrack);
    var searchResult = newLibrary.search("TrackName");
    setTimeout(function () {
        expect(searchResult).toBe(newTrack);
    }, 400);
});
test('Library: method search have setTimeOut', function () {
    var newTrack = new track_1.Track("TrackName", 5, false);
    var newLibrary = new library_1.Library(newTrack);
    expect(newLibrary.search("TrackName")).toBe(undefined);
});
test('Library: method search have 1 setTimeOut = 300ms', function () {
    var newTrack = new track_1.Track("TrackName", 5, false);
    var newLibrary = new library_1.Library(newTrack);
    jest.useFakeTimers();
    newLibrary.search("TrackName");
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    expect(setTimeout).toHaveBeenCalledTimes(1);
});
test('Library: method update', function () {
    var newTrack = new track_1.Track("TrackName", 5, false);
    var newLibrary = new library_1.Library(newTrack);
    newLibrary.update(newTrack, "name", "newName");
    newLibrary.update(newTrack, "durationTime", 7);
    newLibrary.update(newTrack, "explicit", true);
    expect(newLibrary.tracksList()[0].name).toBe("newName");
    expect(newLibrary.tracksList()[0].durationTime).toBe(7);
    expect(newLibrary.tracksList()[0].explicit).toBe(true);
});
