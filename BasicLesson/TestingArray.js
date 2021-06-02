const { number } = require("prop-types");

const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(value => value >= 0);
const atLeastOnePositive = numbers.some(value => value >= 0);
const filtered = numbers.filter(value => value >=0);

console.log(allPositive);
console.log(atLeastOnePositive);
console.log(filtered);