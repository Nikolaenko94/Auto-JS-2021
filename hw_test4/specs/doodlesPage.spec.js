const {browser, Key} = require("protractor");
const {expect} = require("chai");
const BasePage = require("../pages/base-page");
const EC = browser.ExpectedConditions;

describe("Doodles page for google.com unit-testing", function(){
    it('should that the google doodles page is opens with a dedicated button',async function(){                     
        await browser.get('https://www.google.com/');                                    
        await browser.wait(EC.elementToBeClickable(element(by.css('.FPdoLc.lJ9FBc center .RNmpXc'))), 5000);
        await element(by.css('.FPdoLc.lJ9FBc center .RNmpXc')).click();         
        let titleAfterSearch = await BasePage.pageTitle();
        await expect(titleAfterSearch).to.equal('Google Doodles');                 
    });
});