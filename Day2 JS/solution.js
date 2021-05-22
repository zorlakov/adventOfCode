const fs = require('fs');

const rows = fs.readFileSync('testData.txt').toString('utf-8').split('\n');
var passwordsCount = 0;

/* rows.forEach((row) => {
  var dashCount = 0;
  let minRepetitions = 0;
  let maxRepetitions = 0;
  let letter = 0;
  for (let i = 0; i < row.length(); i++) {
    if (row[i] == '-') dashCount++;
    dashCount > 0
      ? row[i] >= '0' && row[i] <= '9'
        ? (minRepetitions += row[i])
        : {}
      : row[i] >= '0' && row[i] <= '9'
      ? (maxRepetitions += row[i])
      : {};
  }
});
 */

rows.forEach((row) => {
  // Replace all spaces and colons with a "-" character, then we split the string into four parts by using "-" as a parameter to the split function.
  // We are left with 4 strings which represent the rules for the password (first three) and the password itself (the last one).

  var fields = row.replace(' ', '-').replace(':', '-').split('-');
  var [minRepetitions, maxRepetitions, letter, password] = [
    parseInt(fields[0]),
    parseInt(fields[1]),
    // fields[0],
    //  fields[1],
    fields[2],
    fields[3],
  ];

  // console.log(minRepetitions);

  // We can use split() on the password string and send the letter that needs to be repeated N times as the argument to count how many times that letter repeats.
  var count = password.split(letter).length - 1;
  if (count >= minRepetitions && count <= maxRepetitions) passwordsCount++;
});

console.log(passwordsCount);
