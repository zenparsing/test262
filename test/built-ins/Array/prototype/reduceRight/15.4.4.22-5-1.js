// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-5-1
description: >
    Array.prototype.reduceRight throws TypeError if 'length' is 0
    (empty array), no initVal
includes: [runTestCase.js]
---*/

function testcase() {
  function cb(){}
  
  try {
    [].reduceRight(cb);
  }
  catch (e) {
    if (e instanceof TypeError) {
      return true;
    }
  }
 }
runTestCase(testcase);