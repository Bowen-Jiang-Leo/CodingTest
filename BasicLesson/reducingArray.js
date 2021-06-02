const numbers = [1, -1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // first argument of reduce method is the call back function the second one is the initial value of accumulator

console.log(sum);
