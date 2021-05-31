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
       
describe("[GET] POSTS", function(){
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
    it('should return success status [200, "OK"]',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect([result.status,result.statusText]).to.eql([200, "OK"]);          
    });
    it('should return data length',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect(result.data.length).to.equal(100);          
    });
    it('should return keys for user data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        const keys = ['userId', 'id', 'title', 'body'];
        //act
        const result = await axios.get(URL);
        const user = result.data[0];
        //assert                          
        await expect(Object.keys(user)).to.eql(keys);          
    });
});