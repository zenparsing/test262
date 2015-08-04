// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-8-b-iii-1-25
description: >
    Array.prototype.reduceRight - This object is the Arguments object
    which implements its own property get method (number of arguments
    is less than number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 0) {
                testResult = (prevVal === 1);
            }
        }

        var func = function (a, b, c) {
            Array.prototype.reduceRight.call(arguments, callbackfn);
        };

        func(0, 1);
        return testResult;
    }
runTestCase(testcase);