const fs = require('fs');

const rows = fs.readFileSync('data.txt').toString('utf-8').split('\n');
var passwordsCountFirst = 0;
var passwordsCountSecond = 0;

rows.forEach((row) => {
  // Replace all spaces and colons with a "-" character, then we split the string into four parts by using "-" as a parameter to the split function.
  // We are left with 4 strings which represent the rules for the password (first three) and the password itself (the last one).

  var fields = row.replace(' ', '-').replace(':', '-').split('-');
  var [minRepetitions, maxRepetitions, letter, password] = [
    parseInt(fields[0]),
    parseInt(fields[1]),
    fields[2],
    fields[3],
  ];

  // We can use split() on the password string and send the letter that needs to be repeated N times as the argument to count how many times that letter repeats. (PART ONE SOLUTION)
  var count = password.split(letter).length - 1;
  if (count >= minRepetitions && count <= maxRepetitions) passwordsCountFirst++;

  // Part two solution:
  if (
    (password.charAt(minRepetitions) == letter) !==
    (password.charAt(maxRepetitions) == letter)
  )
    passwordsCountSecond++;
});

console.log(passwordsCountFirst + ' is the solution for part one');
console.log(passwordsCountSecond + ' is the solution for part two');
