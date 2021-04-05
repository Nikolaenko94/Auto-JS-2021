//import task 2 
const cardCreating = require("./card");

//tests
test('check name on card with process.env',()=>{
    let testCard = new cardCreating.Card(process.env.USERNAME,500);
    expect(testCard.name).toBe(process.env.USERNAME);
});
test('check name on card',()=>{
    let testCardNormalName = new cardCreating.Card("IvanovIvan",500);
    expect(testCardNormalName.name).toBe("IvanovIvan");
});
test('check name on card, if it created without name',()=>{
    let testCardWithoutValues = new cardCreating.Card();
    expect(testCardWithoutValues.name).toBe("Anonim Card");
});
test('check balance on card',()=>{
    let testCard = new cardCreating.Card(process.env.USERNAME,500);
    expect(testCard.getBalance()).toBe(500);
});
test('check balance on card, if it was created without balance',()=>{
    let testCardWithoutValues = new cardCreating.Card();
    expect(testCardWithoutValues.getBalance()).toBe(0);
});
test('check manual balance change',()=>{
    let testCard = new cardCreating.Card(process.env.USERNAME,500);
    testCard.newCardBalance = 1000000;    
    expect(testCard.getBalance()).toBe(500);
});
test('check balance change after use addBalance method',()=>{
    let testCard = new cardCreating.Card(process.env.USERNAME,500);
    testCard.addBalance(50);
    expect(testCard.getBalance()).toBe(550);
});
test('check the write-off of money from a smaller balance.',()=>{
    let testCard = new cardCreating.Card(process.env.USERNAME,500);
    testCard.offBalance(600);
    expect(testCard.getBalance()).toBe(500);
});
test('check error text when write-off a larger amount',()=>{
    let testCard = new cardCreating.Card(process.env.USERNAME,500);    
    expect(testCard.offBalance(600)).toBe("User has not money to write-off");
});
test('check the write-off of money from balance',()=>{
    let testCard = new cardCreating.Card(process.env.USERNAME,550);
    testCard.offBalance(500);
    expect(testCard.getBalance()).toBe(50);
});
test('check transfer balance, ex: USD - BYN, count - 2.6',()=>{ 
    let testCard = new cardCreating.Card(process.env.USERNAME,50);   
    expect(testCard.transferBalance(2.6)).toBe(130);
});
test('check balance after transfer balance. Transfer not change balance.',()=>{
    let testCard = new cardCreating.Card(process.env.USERNAME,50);
    testCard.transferBalance(2.6);    
    expect(testCard.getBalance()).toBe(50);
});
