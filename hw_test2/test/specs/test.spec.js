const chai = require("chai");
const spies = require("chai-spies");
const { expect } = require("chai");
chai.use(spies);
const webdriver = require("selenium-webdriver"),
      By = webdriver.By,
      until = webdriver.until,
      Key = webdriver.Key,
      chrome = require("selenium-webdriver/chrome"),
      path = require("chromedriver").path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
const driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
        
describe("Google.com unit testing", function(){                 
         
    it('should open www.google.com',async function(){
        async function getURL(){
            await driver.get('https://www.google.com/');
            let url = await driver.getCurrentUrl();
            await driver.quit();
            return url
        };
        let url = await getURL();                   
        await expect(url).to.equal('https://www.google.com/');                  
    });
});    