// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-10
description: >
    Array.prototype.indexOf - element to be retrieved is own accessor
    property on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { length: 3 };
        Object.defineProperty(obj, "0", {
            get: function () {
                return 0;
            },
            configurable: true
        });

        Object.defineProperty(obj, "1", {
            get: function () {
                return 1;
            },
            configurable: true
        });

        Object.defineProperty(obj, "2", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        return 0 === Array.prototype.indexOf.call(obj, 0) &&
            1 === Array.prototype.indexOf.call(obj, 1) &&
            2 === Array.prototype.indexOf.call(obj, 2);
    }
runTestCase(testcase);