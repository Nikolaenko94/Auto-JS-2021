const {browser, Key, element} = require("protractor");
const BasePage = require("../pages/base-page");
const EC = browser.ExpectedConditions;

describe("Google Map for google.com unit-testing", function(){ 
    it('Google map should have start value for zoom = 2km ',async function(){                           
        await browser.get('https://www.google.com/maps');
        await browser.wait(EC.visibilityOf(element(by.id('gAWHhb-scale-V67aGc'))), 5000);
        let zoomElement= await browser.executeScript('return document.getElementById("gAWHhb-scale-V67aGc").innerHTML ;')
        await expect(zoomElement).toBe("2 km");
    });
    it('Google map should have zoom = 1km after double-click on map',async function(){                           
        await browser.get('https://www.google.com/maps');
        await browser.wait(EC.visibilityOf(element(by.css('canvas'))), 5000);
        let canvas = await element(by.css('canvas'));
        await browser.sleep(4000);
        await browser.actions().doubleClick(canvas).perform();
        await browser.sleep(4000);
        let zoomElement= await browser.executeScript('return document.getElementById("gAWHhb-scale-V67aGc").innerHTML ;')
        await expect(zoomElement).toBe("1 km");
    });
    it('The Street View Image should opens after drag and drop the icon "Browse Street View Image" ',async function(){                                   
        await browser.get('https://www.google.com/maps');
        await browser.wait(EC.visibilityOf(element(by.name('q'))), 5000);       
        await element(by.name('q')).sendKeys("minsk",Key.ENTER);
        await browser.wait(EC.elementToBeClickable(element(by.id('runway-expand-button'))), 5000);
        let elementStreetView = await element(by.id("runway-expand-button"));
        await browser.sleep(3000);
        await browser.actions().dragAndDrop(elementStreetView, {x:-650, y:-350}).perform();
        await browser.sleep(2000);
        let elementImgDownloadDataText = await browser.executeScript('return document.querySelector(`body > jsl:nth-child(6) > div:nth-child(3) > div:nth-child(9) > div:nth-child(25) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(10) > span:nth-child(1) > span:nth-child(3) > span:nth-child(1)`).innerHTML;');
        await expect(elementImgDownloadDataText).toContain('Image capture');
    });
});