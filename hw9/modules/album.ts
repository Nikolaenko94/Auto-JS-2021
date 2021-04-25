import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Album{
    constructor(
        public name: string, 
        public dateRelease: MainClassesTypes, 
        public tracks?: MainClassesTypes, 
        public artist?: MainClassesTypes){
    };
};
