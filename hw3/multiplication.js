function multi(num){  
    const numberN = function(n1) {
        return multi(num * n1);
    }
    numberN.valueOf = function() { return num; };    
    return numberN;
  }

module.exports = {    
    multi,        
};
