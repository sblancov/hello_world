WebDriverIO
===========

[WebDriverIO](http://webdriver.io/)

[Selenium Standalone](https://www.npmjs.com/package/selenium-standalone)

Install dependencies
====================

npm install

npm install -g wdio-mocha-framework

selenium-standalone install


Standalone version
------------------

1. Create your own node script or copy/modify `standalone/hello_world.js`
2. Start up Selenium

    selenium-standalone start

3. Run your node script

    node hello_world.js

WDIO version
------------

WebDriverIO comes with a cli to make easy developing tests. Test it!

1. Create your own test or copy/modify `wdio/tests/specs/hello_world.js`
2. Start up Selenium

    selenium-standalone start

3. Use my `wdio.config.js` or generate your own with this command:

    wdio config

4. Run your tests

    wdio wdio.conf.js
