var { After, Status } = require("cucumber");

After(function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        var world = this;
        return browser.takeScreenshot().then(function(screenShot, error) {
            if (!error) {
                world.attach(screenShot, "image/png");
            }
        });
    }
});