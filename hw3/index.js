// import task 1
const multiplication = require("./multiplication");
// import task 2
const cardCreating = require("./card");

// usage task 1
console.log("====================TASK 1 ==================");
console.log(multiplication.multi(3));
console.log(multiplication.multi(5));
console.log(multiplication.multi(2));
// usage task 2
console.log("====================TASK 2 ==================");
console.log(cardCreating.NikolaenkoCard.name);
console.log(cardCreating.NikolaenkoCard.checkBalance());
console.log(cardCreating.NikolaenkoCard.addBalance(50));
console.log(cardCreating.NikolaenkoCard.addBalance(50));
console.log(cardCreating.NikolaenkoCard.offBalance(200));
console.log(cardCreating.NikolaenkoCard.offBalance(30));
console.log(cardCreating.NikolaenkoCard.transferBalance(0.5));
console.log(cardCreating.NikolaenkoCard.checkBalance());
console.log("NikolaenkoCard.newCardBalance = 10000");
cardCreating.NikolaenkoCard.newCardBalance = 10000;
console.log(cardCreating.NikolaenkoCard.checkBalance() + " -balance not changing");