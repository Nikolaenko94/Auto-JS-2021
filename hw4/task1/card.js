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
        try{            
            if(summ <= 0 || isNaN(summ) || typeof summ === "boolean"){
                throw new SyntaxError ("You entered an invalid value. Please try again.");
            }
            this.#balance += summ;
        } catch(addBalance){
            return ("addBalance Error: " + addBalance.message);
        };       
                
    }
    offBalance(summ){  
       try{
            if(this.typeOfCard === "debit"){
                if(summ > this.#balance){
                    throw new Error ("You entered an invalid value. Please try again.");
                }             
            }; 
            this.#balance -= summ;
        }catch(offBalance){
            return ("offBalance Error: " + offBalance.message);
            }; 
    };
};

module.exports = {
    Card,
};
