const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 2);

console.log(output);
console.error('Invalid');

function move(array, index, offset) {
    const output = [...array];
    const element = output.splice(index, 1)[0]; // [0] represents the first element in [splice], which in here is 1
    output.splice(index + offset, 0, element);
    return output;
}