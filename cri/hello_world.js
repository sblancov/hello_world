var cri = require('chrome-remote-interface');

cri(function (chrome) {
    chrome.Page.enable();

    chrome.Page.navigate({url: "http://www.google.com"});
    chrome.close();
});
