// let count = 0;

// function conutTruthy(array){
//     for i in array{
//         if (Boolean(i) == true) {
//             count++;
//             i++;
//         }
//         else i++;
//     }
// }
// Count the truthy element in an array
// Use that to practice the ability of using truthy value like "if(value)"


function conutTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value) count++;
    return count;
}
