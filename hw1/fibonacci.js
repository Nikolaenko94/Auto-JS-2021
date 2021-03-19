// TASK 2 FOR HOMEWORK 1
function fibonacci(fiboNumber){
    if(isNaN(fiboNumber)){
        return "Enter number";
    };
   if(fiboNumber<=1){
       return fiboNumber;
   }
   let mainNumber = 0;
   let secondNumber = 1;
   let boxForNumbers = [];
   for (let i=0; i<=fiboNumber; i++) {
        boxForNumbers.push(mainNumber);       
        let saveNumber = secondNumber;              
        secondNumber = mainNumber + secondNumber;
        mainNumber = saveNumber;
                 
   };
   return String(boxForNumbers) + `\nTotal numbers - ${boxForNumbers.length -1}`;
};

