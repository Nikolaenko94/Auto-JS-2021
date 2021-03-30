class Card {  
    #balance = 0;  
    constructor(nameUser, typeOfCard){
        this.nameUser = nameUser;        
        this.typeOfCard = typeOfCard;                      
    }
    getBalance(){
        return `Balance: ${this.#balance}`
    }
    addBalance(summ){
        if(summ <= 0 || isNaN(summ) || typeof summ === "boolean"){
            return `You entered an invalid value. Please try again.`;
        }
        this.#balance += summ;
        return `amount of ${summ} added to the account`;        
    }
};

module.exports = {
    Card,
};
