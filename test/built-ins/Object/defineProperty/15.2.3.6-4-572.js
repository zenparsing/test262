// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-572
description: >
    ES5 Attributes - [[Set]] attribute is a function which has zero
    argument
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var setFunc = function () { };

        Object.defineProperty(obj, "prop", {
            set: setFunc
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.hasOwnProperty("prop") && desc.set === setFunc;
    }
runTestCase(testcase);