// Navigate to "Day11JS folder" and run "node index" in terminal.
// Import modules

//const solution = require('./partOne');
//const solution1 = require('./partTwo');
const solution = require('./solution');

const fs = require('fs');

const seats = fs.readFileSync('data.txt').toString('utf-8').split('\n');

// var first = solution.solveFirst(seats);

// var second = solution1.solveSecond(seats);
var first = solution.solve(seats, 4);
var second = solution.solve(seats, 5);

console.log(first);

console.log(second);
