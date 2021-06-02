const numbers = [1, 2, 3, 4, 10];

const Max = getMax(numbers);

console.log(Max);

// function getMax(array) {
//     return array.reduce(function(max, current) {
//         return max = (max < current) ? current : max;
//     }, 0);
// }

//reduce a array into a single number
function getMax(array) {
    return array.reduce((a, b) => (a > b) ? a : b);
}