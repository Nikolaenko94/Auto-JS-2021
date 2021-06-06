import { Album } from "./modules/album";
import { Artist } from "./modules/artist";
import { Library } from "./modules/library";
import { Track } from "./modules/track";


//tests for Alboms
test('Album: class Album exists ', () => {
    expect(typeof Album).toBe("function");
    expect(Album.name).toBe("Album");
  });
test('Album: required constructor', () => {
    const newAlbum: Album = new Album("AlbumName",new Date("2000-10-24"));  
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
test('Artist: class Artist exists ', () => {
    expect(typeof Artist).toBe("function");
    expect(Artist.name).toBe("Artist");
  });
test('Artist: required constructor', () => {
    const newArtist: Artist = new Artist("ArtistName",new Date("2000-10-24"));  
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
test('Track: class Track exists ', () => {
    expect(typeof Track).toBe("function");
    expect(Track.name).toBe("Track");
  });
test('Track: required constructor', () => {
    const newTrack: Track = new Track("TrackName",5,false);  
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
test('Library: class Library exists ', () => {
    expect(typeof Library).toBe("function");
    expect(Library.name).toBe("Library");
  });
test('Library: required constructor, method tracksList', () => {
    const newTrack: Track = new Track("TrackName",5,false);
    const newLibrary: Library = new Library(newTrack);
    const arrForTest: Array<Track> = new Array(newTrack);
    expect(newLibrary.tracksList().length).toBe(1);
});
test('Library: method add', () => {
    const newTrack: Track = new Track("TrackName",5,false);
    const newLibrary: Library = new Library();
    newLibrary.add(newTrack);
    expect(newLibrary.tracksList().length).toBe(1);
});
test('Library: method delete', () => {
    const newTrack: Track = new Track("TrackName",5,false);
    const newLibrary: Library = new Library(newTrack);
    newLibrary.delete(newTrack)
    expect(newLibrary.tracksList().length).toBe(0);
});
test('Library: method search', () => {
    const newTrack: Track = new Track("TrackName",5,false);
    const newLibrary: Library = new Library(newTrack);
    const searchResult = newLibrary.search("TrackName");
    setTimeout(() => {
        expect(searchResult).toBe(newTrack);
    }, 400);   
});
test('Library: method search have setTimeOut', () => {
    const newTrack: Track = new Track("TrackName",5,false);
    const newLibrary: Library = new Library(newTrack);        
    expect(newLibrary.search("TrackName")).toBe(undefined);     
});
test('Library: method search have 1 setTimeOut = 300ms', () => {
    const newTrack: Track = new Track("TrackName",5,false);
    const newLibrary: Library = new Library(newTrack);    
    jest.useFakeTimers();  
    newLibrary.search("TrackName")   
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    expect(setTimeout).toHaveBeenCalledTimes(1);     
});
test('Library: method update', () => {
    const newTrack: Track = new Track("TrackName",5,false);
    const newLibrary: Library = new Library(newTrack);
    newLibrary.update(newTrack,"name","newName");
    newLibrary.update(newTrack,"durationTime",7);
    newLibrary.update(newTrack,"explicit",true);
    expect(newLibrary.tracksList()[0].name).toBe("newName");
    expect(newLibrary.tracksList()[0].durationTime).toBe(7);
    expect(newLibrary.tracksList()[0].explicit).toBe(true);
});
