// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-4-2
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 ( length
    overridden to null (type conversion))
includes: [runTestCase.js]
---*/

function testcase() {
  
  var i = Array.prototype.indexOf.call({length: null}, 1);
  
  if (i === -1) {
    return true;
  }
 }
runTestCase(testcase);