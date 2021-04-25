import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Artist{
    constructor(
        public name: string, 
        public dateRelease: MainClassesTypes, 
        public albums?: MainClassesTypes, 
        public tracks?: MainClassesTypes){
                      //TYPE GUADRD
            if(typeof dateRelease !== "object"){
                throw new Error("Error data type for Artist:dateRelease");                      
            }
            if(typeof name !== "string"){
                throw new Error("Error data type for Artist:name");                      
            }
            if(typeof tracks !== "object" && typeof tracks !== "undefined" ){
                throw new Error("Error data type: for Artist:tracks");                      
            }
            if(typeof albums !== "object" && typeof albums !== "undefined" ){
                throw new Error("Error data type for Artist:albums");                      
            }    
    };
};
