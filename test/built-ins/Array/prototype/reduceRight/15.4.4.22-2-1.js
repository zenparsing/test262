// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-2-1
description: >
    Array.prototype.reduceRight applied to Array-like object, 'length'
    is an own data property
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var obj = {
            0: 12,
            1: 11,
            2: 9,
            length: 2
        };

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj.length === 2;
        }

        return Array.prototype.reduceRight.call(obj, callbackfn, 11) && accessed;
    }
runTestCase(testcase);