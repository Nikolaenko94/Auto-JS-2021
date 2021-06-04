const {browser} = require("protractor");
const BasePage = require("../pages/base-page");

describe("compatibility unit-testing", function(){
    it('should open www.google.com',async function(){
        await browser.get('https://www.google.com/');
        const url = await BasePage.currentUrl();                 
        await expect(url).toBe('https://www.google.com/');                  
    });
});