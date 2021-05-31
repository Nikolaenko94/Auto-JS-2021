const axios = require("axios").default;
const chai = require("chai");
const spies = require("chai-spies");
const { expect } = require("chai");
const { Executor } = require("selenium-webdriver/http");
chai.use(spies);
const webdriver = require("selenium-webdriver"),
      By = webdriver.By,
      until = webdriver.until,
      Key = webdriver.Key,
      chrome = require("selenium-webdriver/chrome"),
      path = require("chromedriver").path;
       
describe("Posts API testing", function(){
    let driver;
    beforeEach(()=>{
        driver = new webdriver.Builder()
        .setChromeOptions(new chrome.Options().headless().addArguments('--lang=en-EN', '--window-size=1366,768'))
        .withCapabilities(webdriver.Capabilities.chrome())        
        .build();
    });                 
    afterEach(()=>{
        driver.quit()
    }) 
    it('',async function(){                          
        //arrange
        //act
        //assert                          
        await expect().to.equal();                  
    });
});