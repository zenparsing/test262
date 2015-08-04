// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-3-8
description: Object.isFrozen returns false for all built-in objects (String)
includes: [runTestCase.js]
---*/

function testcase() {
  var b = Object.isFrozen(String);
  if (b === false) {
    return true;
  }
 }
runTestCase(testcase);