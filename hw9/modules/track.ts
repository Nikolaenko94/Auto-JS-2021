import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Track{
    constructor(
        public name: MainClassesTypes, 
        public durationTime: MainClassesTypes, 
        public explicit: boolean, 
        public artist?: MainClassesTypes,
        public album?:MainClassesTypes){
    };
};
