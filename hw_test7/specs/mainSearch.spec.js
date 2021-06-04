const {browser, Key} = require("protractor");
const BasePage = require("../pages/base-page");
const EC = browser.ExpectedConditions;
const  highilight = require('../config/hightlight');
let hgElement = null;

describe("main-search for google.com unit-testing", function(){
    afterEach(()=>{
        highilight.highilight(hgElement);
        hgElement = null;
    });
    it('should correctly work main-search',async function(){
        await browser.get('https://www.google.com/');
        hgElement = await element(by.css("body"));
        await element(by.name('q')).sendKeys("wikipedia",Key.ENTER);
        let titleAfterSearch = await BasePage.pageTitle();
        hgElement = await element(by.css("body"));
        await expect(titleAfterSearch).toBe('wikipedia - Google Search');                 
    });
    it('should working search with press button "Google Search"',async function(){                     
        await browser.get('https://www.google.com/'); 
        hgElement = await element(by.css("body"));                         
        await element(by.name('q')).sendKeys("wikipedia");           
        await browser.wait(EC.elementToBeClickable(element(by.name('btnK'))), 5000);
        await element(by.name('btnK')).click();         
        let titleAfterSearch = await BasePage.pageTitle();
        hgElement = await element(by.css("body"));
        await expect(titleAfterSearch).toBe('wikipedia - Google Search');                 
    });
});