const {browser, Key} = require("protractor");
const BasePage = require("../pages/base-page");
const EC = browser.ExpectedConditions;
const  highilight = require('../config/hightlight');
let hgElement = null;

describe("Doodles page for google.com unit-testing", function(){
    afterEach(()=>{
        highilight.highilight(hgElement);
        hgElement = null;
    });
    it('should that the google doodles page is opens with a dedicated button',async function(){                     
        await browser.get('https://www.google.com/');
        hgElement = await element(by.css("body"));                                    
        await browser.wait(EC.elementToBeClickable(element(by.css('.FPdoLc.lJ9FBc center .RNmpXc'))), 5000);
        hgElement = await element(by.css('.FPdoLc.lJ9FBc center .RNmpXc'));
        await element(by.css('.FPdoLc.lJ9FBc center .RNmpXc')).click();         
        let titleAfterSearch = await BasePage.pageTitle();
        hgElement = await element(by.id("nav")); 
        await expect(titleAfterSearch).toBe('Google Doodles');                 
    });
});