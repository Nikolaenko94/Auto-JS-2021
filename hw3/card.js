function Card(name, newCardBalance){          
    this.name = name;
    isNaN(newCardBalance)?newCardBalance=0:true;
    this.name?true:this.name="Anonim Card";       
    // chekcBalance function    
    this.checkBalance = function (){        
        return newCardBalance;
    };       
    //balance replenishment function
    this.addBalance = function (summ){
        newCardBalance += summ;
        return newCardBalance;
    };
    //write-off balance function
    this.offBalance = function(summ){
        if(summ > newCardBalance){return "User has not money to write-off"}       
        else{
            newCardBalance -= summ;
            return newCardBalance;
        }        
    };
    //transfer to another currency function
    this.transferBalance = function(course){
        return newCardBalance * course;
    };    
};

let NikolaenkoCard = new Card(process.env.USERNAME,20);
module.exports = {
    Card,
    NikolaenkoCard,
};
