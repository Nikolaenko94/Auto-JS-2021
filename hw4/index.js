//import task1
let card = require("./task1/card");

//usage task1
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
