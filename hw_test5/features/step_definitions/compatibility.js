const {Then, setDefaultTimeout} = require ("cucumber");
const {browser} = require("protractor");
const {expect} = require("chai");
const BasePage = require("../../pages/base-page");

setDefaultTimeout(240 * 1000);

Then(/^Opens www.google.com with Chrome$/, async () =>{
        await browser.get('https://www.google.com/');       
});
Then(/^Website correctly open on Chrome browser$/, async () =>{
        const url = await BasePage.currentUrl();                 
        await expect(url).to.equal('https://www.google.com/');       
});
