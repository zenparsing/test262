// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-25
description: >
    Array.prototype.map - This object is the Arguments object which
    implements its own property get method (number of arguments is
    less than number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === 9;
            } else {
                return false;
            }
        }

        var func = function (a, b) {
            return Array.prototype.map.call(arguments, callbackfn);
        };

        var testResult = func(9);

        return testResult[0] === true;
    }
runTestCase(testcase);