import type {MainClassesTypes} from "./_typesGuardMainClass";

export class Track{
    constructor(
        public name: string, 
        public durationTime: number, 
        public explicit: boolean, 
        public artist?: MainClassesTypes,
        public album?:MainClassesTypes){
                                  //TYPE GUADRD
            if(typeof durationTime !== "number"){
                throw new Error("Error data type for Track:durationTime");                      
            }
            if(typeof name !== "string"){
                throw new Error("Error data type for Track:name");                      
            }
            if(typeof artist !== "object" && typeof artist !== "undefined" ){
                throw new Error("Error data type: for Track:artist");                      
            }
            if(typeof album !== "object" && typeof album !== "undefined" ){
                throw new Error("Error data type for Track:album");                      
            }
            if(typeof explicit !== "boolean"){
                throw new Error("Error data type for Track:explicit");                      
            }
    };
};
