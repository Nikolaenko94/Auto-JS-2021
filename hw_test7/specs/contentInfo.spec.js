const {browser, Key, element} = require("protractor");
const { elementIsSelected } = require("selenium-webdriver/lib/until");
const BasePage = require("../pages/base-page");
const EC = browser.ExpectedConditions;
const  highilight = require('../config/hightlight');
let hgElement = null;

describe("Content Info for google.com unit-testing", function(){   
    afterEach(()=>{
        highilight.highilight(hgElement);
        hgElement = null;
    });
    it('should correctly displayed panel "content info" for search results page',async function(){                           
        await browser.get('https://www.google.com/');
        await element(by.name('q')).sendKeys("wikipedia",Key.ENTER);
        hgElement = await element(by.name('q'));    
        //the next step only to use the scroll method, I understand that this step is not needed for isDisplayed ()
        await browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
        await browser.wait(EC.visibilityOf(element(by.id('footcnt'))), 5000);
        hgElement = await element(by.id('footcnt'));
        let contentInfoDisplay = await element(by.id('footcnt')).isDisplayed();
        await expect(contentInfoDisplay).toBe(true);              
    });
    it('should correctly working link "help" after opening the serch results page:',async function(){                           
        await browser.get('https://www.google.com/');                                 
        let searchInput = await element(by.name('q'));
        hgElement = await element(by.name('q'));
        await browser.actions(searchInput).sendKeys('wikipedia',Key.ENTER).perform();
        await browser.wait(EC.elementToBeClickable(element(by.css('#fsl>a'))), 5000);          
        let linkHelp = await element(by.css('#fsl>a'));
        hgElement = await element(by.css('#fsl>a'));
        await browser.executeScript('arguments[0].click()', linkHelp);
        let title = await BasePage.pageTitle();
        hgElement = await element(by.css('body'));
        await expect(title).toBe("Google Search Help");              
    });
});