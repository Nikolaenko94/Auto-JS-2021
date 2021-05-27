var gulp = require('gulp');
var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: './hw_test5/reports/report.json',
    output: './hw_test5/reports/report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Enviroment": "STAGING",
        "Browser": "Chrome",
        "Platform": "Win 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

gulp.task('cucumberReports', function(){
    reporter.generate(options);
});