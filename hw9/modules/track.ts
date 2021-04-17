import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Track{
    constructor(
        public name: MainClassesTypes, 
        public durationTime: number, 
        public explicit: boolean, 
        public artist?: MainClassesTypes,
        public album?:MainClassesTypes){
    };
};
