//import task1
const card = require("./task1/card");
//import task2
const pizza = require("./task2/pizza");

// usage task1
console.log("==================TASK 1===============");
let CreditCard = new card.Card("NikolaenkoStanislav","credit");
let DebitCard = new card.Card("NikolaenkoStanislav","debit");
console.log(DebitCard.getBalance());
DebitCard.addBalance(2000);
console.log(DebitCard.getBalance());
console.log(DebitCard.offBalance(3000));
DebitCard.offBalance(1000);
console.log(DebitCard.getBalance());
console.log(DebitCard.transferBalance(2.6));
console.log(DebitCard.getBalance());
console.log("offBalance for CreditCard:");
CreditCard.addBalance(500);
console.log(CreditCard.getBalance());
CreditCard.offBalance(1000);
console.log(CreditCard.getBalance());
// usage task2
console.log("==================TASK 2===============");
let myPizza = new pizza.Pizza("small");
console.log(myPizza.size + " size my pizza");
console.log(myPizza.callories + " callories my pizza");
console.log(myPizza.price + " price my pizza");
console.log("add greens into my pizza");
myPizza.addTopping("greens");
console.log(myPizza.isVegan + " my pizza vegan");
console.log(myPizza.callories + " callories my pizza");
console.log(myPizza.price + " price my pizza");
console.log("add meet into my pizza");
myPizza.addTopping("meet");
console.log(myPizza.isVegan + " my pizza NOTvegan");
console.log(myPizza.callories + " callories my pizza");
console.log(myPizza.price + " price my pizza");
console.log("remove meet into my pizza");
myPizza.removeTopping("meet");
console.log(myPizza.isVegan + " my pizza vegan");
console.log(myPizza.callories + " callories my pizza");
console.log(myPizza.price + " price my pizza");
console.log("change size my pizza");
myPizza.changeSize("big");
console.log(myPizza.size + " size my pizza");
console.log(myPizza.callories + " callories my pizza");
console.log(myPizza.price + " price my pizza");
