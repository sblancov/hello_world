(function () {

    'use strict';

    var promiseCount = 0;

    function testPromise() {

        function asyncFunction(resolve, reject) {
            console.log("asyncFunction");
            var randomNumber = Math.random() * 10;
            if (randomNumber > 5) {
                console.log("reject");
                console.log(randomNumber);
                reject(randomNumber);
            } else {
                console.log("resolve");
                console.log(randomNumber);
                resolve(randomNumber);
            }
        }

        function success(val) {
            console.log("success");
            console.log(val);
        }

        function fail(val) {
            console.log("fail");
            console.log(val);
        }

        var promise = new Promise(asyncFunction);
        promise.then(success).catch(fail);
        var promise2 = new Promise(asyncFunction);
        promise2.then(success, fail).then(function () {
            console.log("Finish?");
        }).then(function (val) {
            console.log("I do not think so!");
        });
    }
    testPromise();
})();
