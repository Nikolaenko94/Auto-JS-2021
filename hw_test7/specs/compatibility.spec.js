const {browser, element} = require("protractor");
const BasePage = require("../pages/base-page");
const  highilight = require('../config/hightlight');
let hgElement = null;

describe("compatibility unit-testing", function(){
    afterEach(()=>{
        highilight.highilight(hgElement);
        hgElement = null;
    });
    it('should open www.google.com',async function(){
        await browser.get('https://www.google.com/');
        hgElement = await element(by.css("body"));
        const url = await BasePage.currentUrl();                 
        await expect(url).toBe('https://www.google.com/');             
    });
});