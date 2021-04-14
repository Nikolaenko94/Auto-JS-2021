// TASK 1 FOR HOMEWORK 1

function factorial(number){
    if(number<12 || (number ^ 0) !== number){
       return "Enter integer greater than 12";
    }
    let bigNumber = BigInt(number);    
    let factorialNumber = 1n;    
    for(let i=0n;i<bigNumber;i++){        
        factorialNumber *= bigNumber -i;
    }
    return String(factorialNumber);
}

//EXPORT function factorial() => use into ../index.js
module.exports = factorial;
