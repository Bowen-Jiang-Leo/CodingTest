const numbers = arrayFromRange(0, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const FinalArray = [];
    while (min <= max) {
        FinalArray.push(min);
        min += 1;
    } 
    return FinalArray;
}

