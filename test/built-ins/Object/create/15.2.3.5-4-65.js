// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-65
description: >
    Object.create - one property in 'Properties' is a Date object that
    uses Object's [[Get]] method to access the 'enumerable' property
    (8.10.5 step 3.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var descObj = new Date();

        descObj.enumerable = true;

        var newObj = Object.create({}, {
            prop: descObj 
        });
        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return accessed;
    }
runTestCase(testcase);