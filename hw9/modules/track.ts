import type {MainClassesTypes} from "./_typesGuardMainClass";

class Track{
    constructor(
        name: MainClassesTypes, 
        durationTime: MainClassesTypes, 
        explicit: boolean, 
        artist?: MainClassesTypes,
        album?:MainClassesTypes){
    };
};