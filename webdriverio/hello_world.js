var fs = require('fs');
var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
var client = webdriverio.remote(options);

client.init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        var date = new Date();
        var msg = date.toLocaleString() + ' Title is: ' + title;
        console.log(msg);
        fs.writeFile('hello_world.log', msg);
    })
    .end();
