const {browser, Key} = require("protractor");
const BasePage = require("../pages/base-page");
const EC = browser.ExpectedConditions;
const  highilight = require('../config/hightlight');
let hgElement = null;

describe("Img-search for google.com unit-testing", function(){   
    afterEach(()=>{
        highilight.highilight(hgElement);
        hgElement = null;
    });
    it('should opens img-search page after click link "Images"',async function(){                     
        await browser.get('https://www.google.com/'); 
        hgElement = await element(by.css("body"));                                   
        await browser.wait(EC.visibilityOf(element(by.linkText('Images'))), 5000);
        hgElement = await element(by.linkText('Images'));
        await element(by.linkText('Images')).click();         
        let titleAfterSearch = await BasePage.pageTitle();
        hgElement = await element(by.css("body"));
        await expect(titleAfterSearch).toBe('Google Images');                 
    });
    it('Img-search page should have special text "images" with logo ',async function(){ 
        let result = {
            visibleAtPage: null,
            text: null,
        }
        let finalyResult = {
            visibleAtPage: true,
            text: "images",
        }                     
        await browser.get('https://www.google.com/imghp?hl=en&ogbl');
        hgElement = await element(by.css("body"));
        await browser.sleep(5000);
        await browser.wait(EC.elementToBeClickable(element(by.css('#hplogo .a9nkvf span'))), 5000);
        hgElement = await element(by.css('#hplogo .a9nkvf span'));
        let textIntoLink = await element(by.css('#hplogo .a9nkvf span')).getText();                                
        let displaySpan = await element(by.css('#hplogo .a9nkvf span')).isDisplayed();
        await (function resultAfterCheck(){
            result.visibleAtPage = displaySpan;
            result.text= textIntoLink;
        })();
        await expect(result).toEqual(finalyResult);                 
    });
    it('should been text "images" is blue for main logo for img-search page',async function(){                           
        await browser.get('https://www.google.com/'); 
        hgElement = await element(by.css("body"));                                   
        await browser.wait(EC.visibilityOf(element(by.linkText('Images'))), 5000);
        hgElement = await element(by.linkText('Images'));
        await element(by.linkText('Images')).click();
        await browser.wait(EC.visibilityOf(element(by.css('#hplogo .a9nkvf'))), 5000);
        let colorText = await element(by.css('#hplogo .a9nkvf')).getCssValue('color');
        hgElement = await element(by.css('#hplogo .a9nkvf'));
        await expect(colorText).toBe('rgba(66, 133, 244, 1)');                 
    });    
});