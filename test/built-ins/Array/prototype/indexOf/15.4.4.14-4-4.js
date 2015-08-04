// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-4-4
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 (generic
    'array' with length 0 )
includes: [runTestCase.js]
---*/

function testcase() {
  
 var i = Array.prototype.lastIndexOf.call({length: 0}, 1);
  
  if (i === -1) {
    return true;
  }
 }
runTestCase(testcase);