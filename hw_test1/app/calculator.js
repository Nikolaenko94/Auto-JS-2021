class Calculator{
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
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Invalid data type")
        };
        if(b === 0 ){
            throw new Error("Cannot divide by zero")
        }
        return a / b   
    }
}

module.exports = {
    Calculator
}
