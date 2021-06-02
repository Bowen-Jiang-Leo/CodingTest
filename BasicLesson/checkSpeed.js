// Speed Limit = 70
// 5 above -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

// Here is my original anwser

// const output = checkSpeed(1);
// console.log(output);

// function checkSpeed(speed){
//     if (speed <= 74) return 'OK';
//     else {
//         if (Math.floor((speed - 70)/5) >= 12) return 'suspended';
//         return Math.floor((speed - 70)/5) + ' points';
//     }
// }

// Here is the better answer
checkSpeed(100);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('Ok');
    
    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('License suspended');
        else
            console.log('Points', points);
    }
}