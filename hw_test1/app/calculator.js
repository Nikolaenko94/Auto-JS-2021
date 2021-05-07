class Calcalator{
    add(a, b){
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Invalid data type")
        };
        return a + b
    }
    subtract(a, b){
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Invalid data type")
        };
        return a - b
    }    
    
    multiply(a, b){

    }
    divide(a, b){

    }

}
