var fs          = require('fs');
var webdriverio = require('webdriverio');
var assert      = require('assert');

var options = {
    desiredCapabilities: {
        loggingPrefs: {
            performance: 'ALL'
        },
        chromeOptions: {
            perfLoggingPrefs: {
                enableNetwork: true,
                traceCategories: "v8"
            }
        },
        browserName: 'chrome'
    }
};
var client = webdriverio.remote(options);

client.init()
    .url('https://www.google.com/')
    .setValue('#lst-ib', 'WebdriverIO')
    .waitForExist('#sblsbb > button', 10000)
    .click('#sblsbb > button')
    .getTitle().then(function(title) {
    })
    .waitForExist('#rso > div > div:nth-child(1) > div > h3 > a', 2000)
    .getText('#rso > div > div:nth-child(1) > div > h3 > a')
    .then(function (something) {
        console.log(something);
        assert(something === 'Selenium WebDriver');
    })
    .catch(function (err) {
        var message = err.name + ": " + err.message;
        console.log(message);
    })
    .log('performance').then(function(logs) {
        fs.unlink('performance.log', function (err) {
            console.error(err);
        });
        fs.appendFile('performance.log', JSON.stringify(logs, null, 4));
    }).catch(function (err) {
        console.error(err);
    })
    .end();
