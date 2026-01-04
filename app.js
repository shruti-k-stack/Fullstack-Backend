require('./xyz'); //one module into another module

// const util = require ('node:util');

const { calculateMultiply, calculateSum } = require('./calculate');
const data = require('./data.json');

console.log(data);

var name = "Backend Developer";

var a = 5;
var b = 10;

calculateSum(a, b);
calculateMultiply(a, b);

console.log(globalThis === global)