// import task 1
const multiplication = require("./multiplication");
// import task 2
const cardCreating = require("./card");
// import task 3
const car = require("./car");

// usage task 1
console.log("====================TASK 1 ==================");
console.log(multiplication.multi(3));
console.log(multiplication.multi(5));
console.log(multiplication.multi(2));
// usage task 2
console.log("====================TASK 2 ==================");
let NikolaenkoCard = new cardCreating.Card(process.env.USERNAME,20);
console.log(NikolaenkoCard.name);
console.log(NikolaenkoCard.getBalance());
console.log(NikolaenkoCard.addBalance(50));
console.log(NikolaenkoCard.addBalance(50));
console.log(NikolaenkoCard.offBalance(200));
console.log(NikolaenkoCard.offBalance(30));
console.log(NikolaenkoCard.transferBalance(0.5));
console.log(NikolaenkoCard.getBalance());
console.log("NikolaenkoCard.newCardBalance = 10000");
NikolaenkoCard.newCardBalance = 10000;
console.log(NikolaenkoCard.getBalance() + " -balance not changing");
// usage task 3
console.log("====================TASK 3 ==================");
console.log(car.Car);
console.log(car.GasolineStation);
console.log(car.Car.goToDistance(200));
