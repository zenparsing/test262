// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-3
description: Array.prototype.lastIndexOf must return correct index(string)
includes: [runTestCase.js]
---*/

function testcase() {
  var obj = {toString:function (){return "false"}};
  var szFalse = "false";
  var a = new Array(szFalse, "false","false1",undefined,0,false,null,1,obj,0);
  if (a.lastIndexOf("false") === 1) 
  {
    return true;
  }
 }
runTestCase(testcase);