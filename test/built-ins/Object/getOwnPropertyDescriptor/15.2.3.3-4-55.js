// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-55
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Array.prototype.some)
includes: [runTestCase.js]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(Array.prototype, "some");
  if (desc.value === Array.prototype.some &&
      desc.writable === true &&
      desc.enumerable === false &&
      desc.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);