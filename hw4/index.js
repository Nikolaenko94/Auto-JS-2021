//import task1
const card = require("./task1/card");
//import task2
const pizza = require("./task2/pizza");
//import task3
const album = require("./task3/album");
const track = require("./task3/track");
const artist = require("./task3/artist");
const Library = require("./task3/library");


//usage task1
// console.log("==================TASK 1===============");
// let CreditCard = new card.Card("NikolaenkoStanislav","credit");
// let DebitCard = new card.Card("NikolaenkoStanislav","debit");
// console.log(DebitCard.getBalance());
// DebitCard.addBalance(2000);
// console.log(DebitCard.getBalance());
// console.log(DebitCard.offBalance(3000));
// DebitCard.offBalance(1000);
// console.log(DebitCard.getBalance());
// console.log(DebitCard.transferBalance(2.6));
// console.log(DebitCard.getBalance());
// console.log("offBalance for CreditCard:");
// CreditCard.addBalance(500);
// console.log(CreditCard.getBalance());
// CreditCard.offBalance(1000);
// console.log(CreditCard.getBalance());
//usage task2
// console.log("==================TASK 2===============");
// let myPizza = new pizza.Pizza("small");
// console.log(myPizza.size + " size my pizza");
// console.log(myPizza.callories + " callories my pizza");
// console.log(myPizza.price + " price my pizza");
// console.log("add greens into my pizza");
// myPizza.addTopping("greens");
// console.log(myPizza.isVegan + " my pizza vegan");
// console.log(myPizza.callories + " callories my pizza");
// console.log(myPizza.price + " price my pizza");
// console.log("add meet into my pizza");
// myPizza.addTopping("meet");
// console.log(myPizza.isVegan + " my pizza NOTvegan");
// console.log(myPizza.callories + " callories my pizza");
// console.log(myPizza.price + " price my pizza");
// console.log("remove meet into my pizza");
// myPizza.removeTopping("meet");
// console.log(myPizza.isVegan + " my pizza vegan");
// console.log(myPizza.callories + " callories my pizza");
// console.log(myPizza.price + " price my pizza");
// console.log("change size my pizza");
// myPizza.changeSize("big");
// console.log(myPizza.size + " size my pizza");
// console.log(myPizza.callories + " callories my pizza");
// console.log(myPizza.price + " price my pizza");
//usage task3
console.log("==================TASK 3===============");
let InTheEnd = new track.Track("In the End", 216, "Hybrid Theory", "Linkin Park", false);
let Papercut = new track.Track("Papercut", 184, "Hybrid Theory", "Linkin Park", false);
let HybridTheory = new album.Album("Hybrid Theory", new Date("2000-10-24"), "Linkin Park", [InTheEnd, Papercut]);
let LinkinPark = new artist.Artist("Linkin Park", new Date("1996-01-01"), [HybridTheory],[InTheEnd, Papercut]);


// console.log(Library.Library.add(InTheEnd));
console.log(Library.Library.add(LinkinPark));
console.log(LinkinPark.__proto__.constructor.name)
// console.log(Library.Library.delete(InTheEnd));