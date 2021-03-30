//import task1
let card = require("../task1/card");
//tests
test('test name of card',()=>{
    let TestCard = new card.Card("TestCard");
    expect(TestCard.nameUser).toBe("TestCard");
});
test('test type of card',()=>{
    let TestCard = new card.Card("TestCard","debit");
    expect(TestCard.typeOfCard).toBe("debit");
});
