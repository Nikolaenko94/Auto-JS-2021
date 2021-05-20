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
        .setChromeOptions(new chrome.Options().headless().addArguments('--lang=en-EN', '--window-size=1366,768'))
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
    
    //New tests after lection webdriver Actions and Executors.
    // This tests may be not needed for real project, but this tests give a chance training Actions and Executors methods 
    it('should been text "images" is blue for main logo for img-search page',async function(){                           
        await driver.get('https://www.google.com/');                                 
        let button = await driver.findElement(By.linkText("Images"));                        
        await driver.actions().click(button).perform();                          
        let text = await driver.findElement(By.css("#hplogo .a9nkvf"));
        let colorText = await text.getCssValue("color");
        await driver.quit();
        await expect(colorText).to.equal("rgba(66, 133, 244, 1)");                 
    });
    it('should correctly displayed panel "content info" for search results page',async function(){                           
        await driver.get('https://www.google.com/');                                 
        let inputForText = await driver.findElement(By.name("q"));        
        await driver.actions(inputForText).sendKeys("wikipedia",Key.ENTER).perform();
        //the next step only to use the scroll method, I understand that this step is not needed for isDisplayed ()
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
        let contentInfoDisplay = await driver.findElement(By.id("footcnt")).isDisplayed();
        await driver.quit();
        await expect(contentInfoDisplay).to.equal(true);              
    });
    it('should correctly working link "help" after opening the serch results page:',async function(){                           
        await driver.get('https://www.google.com/');                                 
        let inputForText = await driver.findElement(By.name("q"));        
        await driver.actions(inputForText).sendKeys("wikipedia").keyDown(Key.ENTER).keyUp(Key.ENTER).perform();
        let linkHelp = await driver.findElement(By.css('#fsl>a'));
        await driver.executeScript('arguments[0].click()', linkHelp);
        let title = await driver.executeScript('return document.title;');
        await driver.quit();
        await expect(title).to.equal("Google Search Help");              
    });
    //google map
    it('Google map should have start value for zoom = 50km ',async function(){                           
        await driver.get('https://www.google.com/maps');
        await (await driver).sleep(4000);
        let zoomElement= await driver.executeScript('return document.getElementById("widget-scale-label").innerHTML ;')
        await driver.quit();
        await expect(zoomElement).to.equal("50 km");
    });
    it('Google map should have zoom = 20km after double-click on map',async function(){                           
        await driver.get('https://www.google.com/maps');
        await (await driver).sleep(4000);
        let body = await driver.findElement(By.css('canvas'));
        await (await driver).sleep(1000);
        await driver.actions(body).doubleClick().perform();
        await (await driver).sleep(1000);
        let zoomElement= await driver.executeScript('return document.getElementById("widget-scale-label").innerHTML ;')
        await driver.quit();
        await expect(zoomElement).to.equal("20 km");
    });
    it('The Street View Image should opens after drag and drop the icon "Browse Street View Image" ',async function(){                                   
        await driver.get('https://www.google.com/maps');        
        await (await driver).sleep(2000);
        let inputForSearch = await driver.findElement(By.name("q"));        
        await driver.actions(inputForSearch).sendKeys("minsk",Key.ENTER).perform();
        await (await driver).sleep(5000);
        let elementStreetView = await driver.findElement(By.id("runway-expand-button"));
        await (await driver).sleep(5000);
        await driver.actions().dragAndDrop(elementStreetView, {x:-650, y:-350}).perform();
        await (await driver).sleep(2000);
        let elementImgDownloadDataText = await driver.executeScript('return document.querySelector(".mapsTactileClientFineprint__fineprint-item.mapsTactileClientFineprint__fineprint-padded.fineprint-copyrights span span").innerHTML;');
        await expect(elementImgDownloadDataText).to.include('Image capture');
        await driver.quit();
    });
}); 
   