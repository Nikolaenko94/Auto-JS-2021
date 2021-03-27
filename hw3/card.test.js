//import task 2 
const cardCreating = require("./card");

let testCard = new cardCreating.Card(process.env.USERNAME,500);
let testCardNormalName = new cardCreating.Card("IvanovIvan",500);
let testCardWithoutValues = new cardCreating.Card();
//tests
test('check name on card with process.env',()=>{
    expect(testCard.name).toBe(process.env.USERNAME);
});
test('check name on card',()=>{
    expect(testCardNormalName.name).toBe("IvanovIvan");
});
test('check name on card, if it created without name',()=>{
    expect(testCardWithoutValues.name).toBe("Anonim Card");
});
test('check balance on card',()=>{
    expect(testCard.checkBalance()).toBe(500);
});
test('check balance on card, if it was created without balance',()=>{
    expect(testCardWithoutValues.checkBalance()).toBe(0);
});
test('check manual balance change',()=>{
    testCard.newCardBalance = 1000000;
    expect(testCard.checkBalance()).toBe(500);
});
test('check balance change after use addBalance method',()=>{
    testCard.addBalance(50);
    expect(testCard.checkBalance()).toBe(550);
});
test('check the write-off of money from a smaller balance.',()=>{
    testCard.offBalance(600);
    expect(testCard.checkBalance()).toBe(550);
});
test('check error text when write-off a larger amount',()=>{    
    expect(testCard.offBalance(600)).toBe("User has not money to write-off");
});
test('check the write-off of money from balance',()=>{
    testCard.offBalance(500);
    expect(testCard.checkBalance()).toBe(50);
});
test('check transfer balance, ex: USD - BYN, count - 2.6',()=>{    
    expect(testCard.transferBalance(2.6)).toBe(130);
});
test('check balance after transfer balance. Transfer not change balance.',()=>{    
    expect(testCard.checkBalance()).toBe(50);
});


