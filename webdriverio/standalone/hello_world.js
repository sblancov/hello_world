var fs          = require('fs');
var webdriverio = require('webdriverio');
var assert      = require('assert');

var options = {
    desiredCapabilities: {
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
        var date = new Date();
        var msg = date.toLocaleString() + ' Title is: ' + title + '\n';
        console.log(msg);
        fs.writeFile('hello_world.log', msg);
    })
    .waitForExist('#rso > div > div:nth-child(1) > div > h3 > a', 1000)
    .getText('#rso > div > div:nth-child(1) > div > h3 > a')
    .then(function (something) {
        console.log(something);
        assert(something === 'Selenium WebDriver');
    })
    .catch(function (err) {
        var message = err.name + ": " + err.message;
        console.log(message);
    })
    .end();
