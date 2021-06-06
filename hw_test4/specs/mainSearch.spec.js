const {browser, Key} = require("protractor");
const {expect} = require("chai");
const BasePage = require("../pages/base-page");
const EC = browser.ExpectedConditions;

describe("main-search for google.com unit-testing", function(){
    it('should correctly work main-search',async function(){
        await browser.get('https://www.google.com/');
        await element(by.name('q')).sendKeys("wikipedia",Key.ENTER);
        let titleAfterSearch = await BasePage.pageTitle();
        await expect(titleAfterSearch).to.equal('wikipedia - Google Search');                 
    });
    it('should working search with press button "Google Search"',async function(){                     
        await browser.get('https://www.google.com/');                          
        await element(by.name('q')).sendKeys("wikipedia");           
        await browser.wait(EC.elementToBeClickable(element(by.name('btnK'))), 5000);
        await element(by.name('btnK')).click();         
        let titleAfterSearch = await BasePage.pageTitle();
        await expect(titleAfterSearch).to.equal('wikipedia - Google Search');                 
    });
});