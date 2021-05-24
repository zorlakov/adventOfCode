// Navigate to "Day11JS folder" and run "node index" in terminal.
// Import modules
const solution = require('./solution');

const fs = require('fs');

const seats = fs.readFileSync('data.txt').toString('utf-8').split('\n');

var first = solution.solve(seats, 4);
var second = solution.solve(seats, 5);

console.log(first);

console.log(second);
