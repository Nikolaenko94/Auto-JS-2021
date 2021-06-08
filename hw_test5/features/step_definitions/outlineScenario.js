const {Then, When, setDefaultTimeout} = require("cucumber");
const {browser, Key, element} = require("protractor");
const {expect} = require("chai");
setDefaultTimeout(240 * 1000);

When('Enter and summ {int} and {int}', async (int, int2) =>{
    await browser.get('https://www.calculator.net/');
    await browser.sleep(2000);
    await browser.actions().sendKeys(`${int}`,Key.ADD).perform();
    await browser.actions().sendKeys(`${int2}`,Key.ENTER).perform();         
});
Then('Correctly summ value = {int}', async (int) =>{  
    await browser.sleep(1000);       
    let finaly = await element(by.id('sciOutPut')).getText();  
    await expect(+finaly).to.equal(int); 
});