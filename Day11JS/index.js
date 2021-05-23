// Import modules
const solution = require('./solution');
const solution1 = require('./solution1');

const fs = require('fs');

const seats = fs.readFileSync('data.txt').toString('utf-8').split('\n');

var first = solution.solveFirst(seats);

var second = solution1.solveSecond(seats);

console.log(first);

console.log(second);
