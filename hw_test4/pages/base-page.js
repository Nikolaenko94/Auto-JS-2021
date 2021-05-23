const {browser} = require("protractor");

class BasePage {
    get pageTitle(){
        return browser.getTitle();
    };
    get currentUrl(){
        return browser.getCurrentUrl();
    }
};

module.exports = BasePage;