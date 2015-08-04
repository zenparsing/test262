// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-1-4
description: Array.prototype.filter applied to Boolean Object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return obj instanceof Boolean;
        }

        var obj = new Boolean(true);
        obj.length = 2;
        obj[0] = 11;
        obj[1] = 12;

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr[0] === 11 && newArr[1] === 12;
    }
runTestCase(testcase);