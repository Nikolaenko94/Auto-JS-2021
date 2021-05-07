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
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Invalid data type")
        };
        if(a * b === -0){
            return 0
        }
        return a * b
    }   
    divide(a, b){

    }

}

const newCalc = new Calcalator();
let summ = newCalc.multiply(0, -2)
console.log(summ)