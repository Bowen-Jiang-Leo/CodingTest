const { number } = require("prop-types");

const numbers = [1,2,3,4];

const last = numbers.pop();

const first = numbers.shift();


numbers.splice(2,1);

console.log(numbers);