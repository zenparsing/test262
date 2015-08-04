// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-iii-12
description: >
    Array.prototype.some - return value of callbackfn is a number
    (value is NaN)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return NaN;
        }

        return ![11].some(callbackfn);
    }
runTestCase(testcase);