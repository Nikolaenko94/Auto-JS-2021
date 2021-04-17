import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Artist{
    constructor(
        public name: MainClassesTypes, 
        public dateRelease: MainClassesTypes, 
        public albums?: MainClassesTypes, 
        public tracks?: MainClassesTypes){
    };
};
