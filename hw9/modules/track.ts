import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Track{
    constructor(
        name: MainClassesTypes, 
        durationTime: MainClassesTypes, 
        explicit: boolean, 
        artist?: MainClassesTypes,
        album?:MainClassesTypes){
    };
};
