var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {   

    directConnect: true,

    framework: 'jasmine2',

    specs: [
        '../specs/*.spec.js'
    ],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
                args: ['--headless','--lang=en-EN']}       
    },

     baseUrl: 'https://google.com/',

    onPrepare: function(){        
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        consolidateAll: true,
        savePath: './hw_test7/reports/',
        fileNamePrefix: 'google.com',
        })),
        browser.waitForAngularEnabled(false);
        browser.manage().window().setSize(1366,768);          
    },      
};