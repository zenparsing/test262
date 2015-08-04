// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-8-4
description: >
    Array.prototype.indexOf returns -1 when abs('fromIndex') is length
    of array
includes: [runTestCase.js]
---*/

function testcase() {

        return [1, 2, 3, 4].indexOf(0, -4) === -1;
    }
runTestCase(testcase);