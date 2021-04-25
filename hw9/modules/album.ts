import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Album{
    constructor(
        public name: string,
        public dateRelease: MainClassesTypes, 
        public tracks?: MainClassesTypes, 
        public artist?: MainClassesTypes){
            //TYPE GUADRD
            if(typeof dateRelease !== "object"){
                throw new Error("Error data type for Album:dateRelease");                      
            }
            if(typeof name !== "string"){
                throw new Error("Error data type for Album:name");                      
            }
            if(typeof tracks !== "object" && typeof tracks !== "undefined" ){
                throw new Error("Error data type for Album:tracks");                      
            }
            if(typeof artist !== "object" && typeof artist !== "undefined" ){
                throw new Error("Error data type for Album:artist");                      
            }           
    };
    
};
