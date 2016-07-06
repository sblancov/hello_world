Chrome Remote Interface
=======================

About Protocol
--------------

This protocol is used by Chrom Dev Tools. You can see it in action if you
launch chrome in this way:

    google-chrome --remote-debugging-port=9222

and type this url "http://localhost:9222" in your new instance of chrome.

It seems this protocol only support one connection. When a new client connects
with server, the other loses its connection.

Library
-------

1. Install library locally:

    npm install chrome-remote-interface

2. Import library in your node script:

    var cri = require('chrome-remote-interface');

REPL
----

1. Install library globally

    npm install -g chrome-remote-interface

2. Launch it from console

    chrome-repl

Links
-----

[Chrome Remote Interface in Github](https://github.com/cyrus-and/chrome-remote-interface)
[API documentation](https://chromedevtools.github.io/debugger-protocol-viewer/1-1/)
