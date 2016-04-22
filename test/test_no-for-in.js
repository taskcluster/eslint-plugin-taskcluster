"use strict";

var rule = require("../rules/no-for-in");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({parser: "babel-eslint"});

ruleTester.run("no-for-in", rule, {
  valid: [
    "for (let x of y) {}",
    "let x = null; for (x of y) {}",
  ],

  invalid: [
    {
      code: "for (let x in y) {}",
      errors: [ { message: "Avoid for-in loops! Replace with a for-of loop." } ]
    },
    {
      code: "let x = null; for (x in y) {}",
      errors: [ { message: "Avoid for-in loops! Replace with a for-of loop." } ]
    }
  ]
});
