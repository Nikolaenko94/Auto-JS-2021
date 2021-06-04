const {browser, element} = require("protractor");
const BasePage = require("../pages/base-page");
const Logger  = require("../config/logger") ;
const  highilight = require('../config/hightlight');
const moduleName = __filename.slice(__dirname.length + 1);
let hgElement = null;
describe("compatibility unit-testing", function(){
    afterEach(()=>{
        highilight.highilight(hgElement);
        hgElement = null;
    });
    it('should open www.google.com',async function(){
        await browser.get('https://www.google.com/');
        await Logger.error(moduleName, "example for Logger Error");
        await Logger.warn(moduleName, "example for Logger Warn");
        await Logger.info(moduleName, "example for Logger Info");
        await Logger.verbose(moduleName, "example for Logger Verbose");
        await Logger.debug(moduleName, "example for Logger Debug");
        hgElement = await element(by.css("body"));
        const url = await BasePage.currentUrl();                 
        await expect(url).toBe('https://www.google.com/');             
    });
});