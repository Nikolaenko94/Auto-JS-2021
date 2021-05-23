const { browser } = require("protractor");

exports.config = {

    directConnect: true,

    framework: 'mocha',

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        browserName: 'chrome',
        platform: 'ANY',
            'chromeOptions': {
                'args': ['lang=es-ES']}       
    },

    onPrepare: function(){
        browser.driver.manage().window().setSize(1366,768);
    },

    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    }
};