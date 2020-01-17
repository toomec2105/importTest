"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cube = cube;
exports.graph = exports.foo = void 0;

function cube(x) {
  return x * x * x;
}

var foo = Math.PI + Math.SQRT2;
exports.foo = foo;
var graph = {
  options: {
    color: 'white',
    thickness: '2px'
  },
  draw: function draw() {
    console.log('From graph draw function');
  }
};
exports.graph = graph;