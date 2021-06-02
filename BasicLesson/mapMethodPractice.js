const numbers = [1, -1, 2, 3];
//const filtered = numbers.filter(n => n >= 0);

//Chaining
const filtered = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value >= 2);

const items = filtered.map(n => ({ value: n }));

console.log(filtered);
