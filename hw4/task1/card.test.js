//import task1
let card = require("../task1/card");
//TESTS
//CREATED CARD TESTS
test('test name of card',()=>{
    let TestCard = new card.Card("TestCard");
    expect(TestCard.nameUser).toBe("TestCard");
});
test('test type of card',()=>{
    let TestCard = new card.Card("TestCard","debit");
    expect(TestCard.typeOfCard).toBe("debit");
});
test('test balance after created card', ()=>{
    let TestCard = new card.Card("TestCard");
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
//addBalance TESTS
test('test balance after adding money', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 500;
    TestCard.addBalance(money);
    expect(TestCard.getBalance()).toBe(`Balance: ${money}`);
});
test('test balance after adding summ < 0', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = -500;
    TestCard.addBalance(money);
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
test('test Error after adding summ < 0', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = -500;
    expect(TestCard.addBalance(money)).toBe("addBalance Error: You entered an invalid value. Please try again.");
});
test('test balance after adding summ = 0', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 0;
    TestCard.addBalance(money);
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
test('test Error after adding summ = 0', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 0;
    expect(TestCard.addBalance(money)).toBe("addBalance Error: You entered an invalid value. Please try again.");
});
test('test balance after adding summ = Boolean', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = true;
    TestCard.addBalance(money);
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
test('test Error after adding summ = Boolean', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = false;
    expect(TestCard.addBalance(money)).toBe("addBalance Error: You entered an invalid value. Please try again.");
});
test('test balance after adding summ = string', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = "1";
    TestCard.addBalance(money);
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
test('test Error after adding summ = string', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = "1";
    expect(TestCard.addBalance(money)).toBe("addBalance Error: You entered an invalid value. Please try again.");
});
//offBalance TESTS
test('test balance after off money', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 500;
    TestCard.addBalance(money);
    TestCard.offBalance(money/2);
    expect(TestCard.getBalance()).toBe(`Balance: ${money-money/2}`);
});
test('test balance after off summ < 0', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = -500;
    TestCard.offBalance(money);
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
test('test Error after off summ < 0', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = -500;
    expect(TestCard.offBalance(money)).toBe("offBalance Error: You entered an invalid value. Please try again.");
});
test('test balance after off summ = 0', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 0;
    TestCard.offBalance(money);
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
test('test Error after off summ = 0', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 0;
    expect(TestCard.offBalance(money)).toBe("offBalance Error: You entered an invalid value. Please try again.");
});
test('test balance after off summ = Boolean', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = true;
    TestCard.offBalance(money);
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
test('test Error after off summ = Boolean', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = false;
    expect(TestCard.offBalance(money)).toBe("offBalance Error: You entered an invalid value. Please try again.");
});
test('test balance after off summ = string', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = "1";
    TestCard.offBalance(money);
    expect(TestCard.getBalance()).toBe("Balance: 0");
});
test('test Error after adding summ = string', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = "1";
    expect(TestCard.offBalance(money)).toBe("offBalance Error: You entered an invalid value. Please try again.");
});
//transferBalance TESTS
test('test transfer money', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 500;
    TestCard.addBalance(money);    
    expect(TestCard.transferBalance(2)).toBe(money*2);
});
test('test balance after transfer', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 500;
    TestCard.addBalance(money);     
    expect(TestCard.transferBalance(2)).toBe(1000);
});
test('test Error after transfer(<0) ', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 500;
    TestCard.addBalance(money);    
    expect(TestCard.transferBalance(-2)).toBe("transferBalance Error: You entered an invalid value. Please try again.");
});

test('test Error after transfer(0)', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 500;
    TestCard.addBalance(money);    
    expect(TestCard.transferBalance(0)).toBe("transferBalance Error: You entered an invalid value. Please try again.");
});
test('test Error after off transfer(Boolean)', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 500;
    TestCard.addBalance(money);    
    expect(TestCard.transferBalance(true)).toBe("transferBalance Error: You entered an invalid value. Please try again.");
});
test('test Error after transfer(string)', ()=>{
    let TestCard = new card.Card("TestCard");
    let money = 500;
    TestCard.addBalance(money);    
    expect(TestCard.transferBalance("2")).toBe("transferBalance Error: You entered an invalid value. Please try again.");
});
//DEBIT CARD TESTS
test('test created DebitCard',()=>{
    let DebitCard = new card.Card("TestCard","debit");
    expect(DebitCard.typeOfCard).toBe("debit");
});
test('test balance, if use more offBalance  for DebitCard',()=>{
    let DebitCard = new card.Card("TestCard","debit");    
    DebitCard.offBalance(555);
    expect(DebitCard.getBalance()).toBe("Balance: 0");
});
test('test ERROR, if use more offBalance  for DebitCard',()=>{
    let DebitCard = new card.Card("TestCard","debit"); 
    expect(DebitCard.offBalance(555)).toBe("offBalance Error: You entered an invalid value. Please try again.");
});
//CREDIT CARD TESTS
test('test created CreditCard',()=>{
    let CreditCard = new card.Card("TestCard","credit");
    expect(CreditCard.typeOfCard).toBe("credit");
});
test('test balance, if use more offBalance  for CreditCard',()=>{
    let CreditCard = new card.Card("TestCard","credit");    
    CreditCard.offBalance(555);
    expect(CreditCard.getBalance()).toBe("Balance: -555");
});
test('test transfer for CreditCard if balance < 0',()=>{
    let CreditCard = new card.Card("TestCard","credit");    
    CreditCard.offBalance(100);
    expect(CreditCard.transferBalance(2)).toBe(-200);
});
