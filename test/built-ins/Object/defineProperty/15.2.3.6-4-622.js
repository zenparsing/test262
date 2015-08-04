// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-622
description: ES5 Attributes - all attributes in Date.now are correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Date, "now");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Date.now;

        try {
            Date.now = "2010";

            var isWritable = (Date.now === "2010");

            var isEnumerable = false;

            for (var prop in Date) {
                if (prop === "now") {
                    isEnumerable = true;
                }
            }

            delete Date.now;

            var isConfigurable = !Date.hasOwnProperty("now");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Date, "now", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);