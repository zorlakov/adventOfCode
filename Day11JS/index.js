// Navigate to "Day11JS folder" and run "node index" in terminal.
// Import modules
const solution = require('./partOne');
const solution1 = require('./partTwo');

const fs = require('fs');

const seats = fs.readFileSync('data.txt').toString('utf-8').split('\n');

var first = solution.solveFirst(seats);

var second = solution1.solveSecond(seats);

console.log(first);

console.log(second);
