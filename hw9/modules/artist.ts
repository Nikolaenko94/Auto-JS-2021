import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Artist{
    constructor(
        public name: string, 
        public dateRelease: MainClassesTypes, 
        public albums?: MainClassesTypes, 
        public tracks?: MainClassesTypes){
    };
};
