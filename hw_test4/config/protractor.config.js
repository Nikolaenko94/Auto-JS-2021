exports.config = {   

    directConnect: true,

    framework: 'mocha',

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
                args: ['--headless','--lang=en-EN']}       
    },

     baseUrl: 'https://google.com/',

    onPrepare:async function(){
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().setSize(1366,768);
    },

    mochaOpts: {
        reporter: 'spec',
        timeout: 150000
    }
};