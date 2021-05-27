const {resolve} = require('path');
const reportsDir = "../reports";

exports.config = {   

    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs:[resolve('./hw_test5/features/**/*.feature')],

    allScriptsTimeout: 360000,
    getPageTimeout: 360000,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
                args: ['--headless','--lang=en-EN','--incognito']
            },       
    },

    cucumberOpts: {
        format: [`json:${reportsDir}/report.json`],
        tags: '@compatibility',
    },

    onPrepare: async function(){
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().setSize(1366,768);
    },

};