// import 1 task
factorial(28);
// import 2 task
// import 3 task


// usage 1 task
function factorial(number){
    if(number<12 || (number ^ 0) !== number){
       return console.log("Enter integer greater than 12");
    }
    let bigNumber = BigInt(number);    
    let factorialNumber = 1n;    
    for(let i=0n;i<bigNumber;i++){        
        factorialNumber *= bigNumber -i;
    };
    return console.log(String(factorialNumber));
};

// usage 2 task
// usage 3 task