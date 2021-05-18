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
       
describe("Google.com unit testing", function(){
    let driver;
    beforeEach(()=>{
        driver = new webdriver.Builder()
        .setChromeOptions(new chrome.Options().headless().addArguments('--lang=en-EN'))
        .withCapabilities(webdriver.Capabilities.chrome())        
        .build();
    });                 
    afterEach(()=>{
        driver = null;
    }) 
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
    it('should working search with key "Enter"',async function(){               
        await driver.get('https://www.google.com/');           
        await driver.findElement(By.name("q")).sendKeys('wikipedia', Key.ENTER);        
        let titleAfterSearh = await driver.getTitle();
        await driver.quit()                           
        await expect(titleAfterSearh).to.equal('wikipedia - Google Search');                  
    });
    it('should working search with press button "Google Search"',async function(){                     
        await driver.get('https://www.google.com/');                          
        await driver.findElement(By.name("q")).sendKeys('wikipedia');        
        await (await driver).sleep(500);        
        await driver.findElement(By.name("btnK")).click();                        
        let titleAfterSearh = await driver.getTitle();
        await driver.quit();                           
        await expect(titleAfterSearh).to.equal('wikipedia - Google Search');                  
    });
    it('should opens doodles page after click button "I"m Feeling Lucky"',async function(){                           
        await driver.get('https://www.google.com/');                                 
        await driver.findElement(By.css(".FPdoLc.lJ9FBc center .RNmpXc")).click();                        
        let titleAfterSearh = await driver.getTitle();
        await driver.quit();                           
        await expect(titleAfterSearh).to.equal('Google Doodles');                  
    });
    it('should opens img-search page after click link "Images"',async function(){                           
        await driver.get('https://www.google.com/');                                 
        await driver.findElement(By.linkText("Images")).click();                        
        let titleAfterClick = await driver.getTitle();
        await driver.quit();                           
        await expect(titleAfterClick).to.equal('Google Images');                  
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
        await driver.get('https://www.google.com/imghp?hl=en&ogbl');                                 
        let displaySpan = await driver.findElement(By.css("#hplogo .a9nkvf span")).isDisplayed();
        let textIntoLink = await driver.findElement(By.css("#hplogo .a9nkvf span")).getText();
        await (function resultAfterCheck(){
            result.visibleAtPage = displaySpan;
            result.text = textIntoLink;
        })();                               
        await expect(result).to.eql(finalyResult);                  
    });
    it('should appears special window for searching by image after press button "Search by image"',async function(){                           
        await driver.get('https://www.google.com/imghp?hl=en&ogbl');                                 
        await driver.findElement(By.xpath("//*[@class='LM8x9c']")).click();
        await (await driver).sleep(1000);        
        let windowForSearchDisplayed = await driver.findElement(By.id("QDMvGf")).isDisplayed();                          
        await driver.quit();                           
        await expect(windowForSearchDisplayed).to.equal(true);                  
    });
});    