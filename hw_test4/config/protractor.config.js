exports.config = {   

    directConnect: true,

    framework: 'mocha',

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
                args: ['--lang=es-ES']}       
    },

     baseUrl: 'https://google.com/',

    onPrepare:async function(){
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().setSize(1366,768);
    },

    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    }
};