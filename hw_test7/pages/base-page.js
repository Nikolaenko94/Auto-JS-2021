const {browser} = require("protractor");

class BasePage {
    static pageTitle(){
        return browser.getTitle();
    };
    static currentUrl(){
        return browser.getCurrentUrl();
    }
};

module.exports = BasePage;