const highilight = function(el){
    var styleOpt = "color: Red; border: 2px solid red;",
    webElement = el.getWebElement(),
    scriptArgument = "arguments[0].setAttribute('style',arguments[1]);"
    return browser.driver.executeScript(scriptArgument, webElement, styleOpt).then(function(){
        return browser.wait(function(){
            return el.getCssValue('border').then(function (border){
                return border.toString().indexOf('2px solid rgb(255,')> -1;
            })
        },5000, 'style is not applied');
    })
};

module.exports = {
    highilight
}