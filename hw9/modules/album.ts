import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Album{
    constructor(
        public name: MainClassesTypes, 
        public dateRelease: MainClassesTypes, 
        public tracks?: MainClassesTypes, 
        public artist?: MainClassesTypes){
    };
};
