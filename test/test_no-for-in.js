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
      errors: [ { message: "Use a for-of statement rather than a for-in statement." } ]
    },
    {
      code: "let x = null; for (x in y) {}",
      errors: [ { message: "Use a for-of statement rather than a for-in statement." } ]
    }
  ]
});
