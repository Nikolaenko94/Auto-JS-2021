const {Then, setDefaultTimeout} = require ("cucumber");
const {browser, Key} = require("protractor");
const {expect} = require("chai");
const BasePage = require("../../pages/base-page");
const { Driver } = require("selenium-webdriver/chrome");
const EC = browser.ExpectedConditions;
setDefaultTimeout(240 * 1000);

//1
Then(/^Enter a valid query in the search with key 'Enter'$/, async () =>{
    await browser.get('https://www.google.com/');
    await browser.wait(EC.visibilityOf(element(by.name('q'))), 5000);
    await element(by.name('q')).sendKeys("wikipedia",Key.ENTER);    
});
Then(/^Google search page with query results correctly open$/, async () =>{
    let titleAfterSearch = await BasePage.pageTitle();
    await expect(titleAfterSearch).to.equal('wikipedia - Google Search');
});
//2
Then(/^Enter a valid query in the search and click button 'Google Search'$/, async () =>{
    await browser.get('https://www.google.com/');
    await browser.wait(EC.visibilityOf(element(by.name('q'))), 5000);
    await element(by.name('q')).sendKeys("wikipedia");
    await browser.wait(EC.elementToBeClickable(element(by.name('btnK'))), 5000);
    await element(by.name('btnK')).click();  
});

