"use strict";

console.log("Import me for side effects.");
var SUPERHERO = "Hulk";

function greet(greeting) {
  console.log(greeting);
}

var myDateTime = function myDateTime() {
  return Date();
};

module.exports = {
  greet: greet,
  myDateTime: myDateTime,
  SUPERHERO: SUPERHERO
};
greet("side-effects");