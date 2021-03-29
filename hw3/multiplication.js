function makeMultiplication(){
  let counter=1;
  return function(number){  
    return counter *= number;
  }  
};
const multi = makeMultiplication();

module.exports = {    
    multi,        
};
