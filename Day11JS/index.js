// Import modules
const solution = require('./solution');

const fs = require('fs');

const seats = fs.readFileSync('testData.txt').toString('utf-8').split('\n');

var first = solution.solveFirst(seats);
console.log(first);
