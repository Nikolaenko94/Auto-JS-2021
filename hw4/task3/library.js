class Library{
    // static #remember = []; 
    static #cashLibrary = {};   
    static add(value){ 
        // value.forEach(element => {
        //     this.#remember.push(element)
        // });        
        // return this.#remember;           
        return value.constructor.name;      
    };
    static delete(value){
    //     let index = this.#remember.indexOf(value);        
    //     this.#remember.splice(index,1);
    //     return this.#remember;
    // }
    };
};

module.exports = {
    Library,    
}