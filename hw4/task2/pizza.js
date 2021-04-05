class Pizza { 
    #callories = 0;
    #price = 0;
    #myPizza = [];
    ingredients = {
        "chees": [10,10,"vegan"],
        "salami": [15,20,"novegan"],
        "greens": [10,5,"vegan"],
        "meet": [20,15,"novegan"]
    };
    sizes = {
        "small": [50,20],
        "big": [100,40]
    }      
    constructor(size){
        this.size = size;
        this.#callories = this.sizes[size][1];
        this.#price = this.sizes[size][0];                                          
    };    
    //FOR PIZZA SIZE  
    changeSize(value){
        //off old value into callories and price;
        this.#callories -= this.sizes[this.size][1];
        this.#price -= this.sizes[this.size][0];
        //add new value for size and add value into callories   
        this.size = value; 
        this.#callories += this.sizes[value][1]; 
        this.#price += this.sizes[value][0];                 
    };
    //ADD AND REMOVE TOPPING 
    addTopping(value){
        this.#callories += this.ingredients[value][1]; 
        this.#price += this.ingredients[value][0];
        this.#myPizza.push(this.ingredients[value][2]);
    };
    removeTopping(value){
        this.#callories -= this.ingredients[value][1]; 
        this.#price -= this.ingredients[value][0];
        let newValue = this.ingredients[value][2];
        let index = this.#myPizza.indexOf(newValue)
        this.#myPizza.splice(index,1);
    }; 
    // METHODS GET ( VEGAN, CALLORIES, PRICE)   
    get isVegan(){
        let result = true;
        this.#myPizza.forEach(element => {
            if(element === 'novegan'){
                result = false;
            }            
        });
        return result;
    };
    get callories(){
       return this.#callories; 
    };
    get price(){
        return this.#price;
    };
};

module.exports = {
    Pizza,
};