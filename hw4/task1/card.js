class Card {  
    #balance = 0;  
    constructor(nameUser, typeOfCard){
        this.nameUser = nameUser;        
        this.typeOfCard = typeOfCard;                      
    }
    getBalance(){
        return `Balance: ${this.#balance}`
    }
    
};

module.exports = {
    Card,
};
