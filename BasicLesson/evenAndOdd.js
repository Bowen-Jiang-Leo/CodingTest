// Display all the number and its attribute of whether it is even number or odd number
showNumber(10);

// function showNumber(limit) {
//     for (let i = 0; i < 10; ++i) {
//         if (i % 2 === 0) console.log(i, 'Even');
//         else console.log(i, 'Odd');
//     }
// }

function showNumber(limit) {
    for (let i = 0; i <= 10; ++i) {
        const message = (i % 2 ===0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}