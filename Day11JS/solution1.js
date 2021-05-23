const fs = require('fs');

const seats = fs.readFileSync('testDataX.txt').toString('utf-8').split('\n');
// var previousSeating = seats;
//var newSeating = new Array(seats.length);
var previousSeating = [[]];
var rows = seats.length;
var columns = seats[0].length;
for (let i = 0; i < rows; i++) {
  var line = new Array(columns - 1);
  for (let j = 0; j < columns - 1; j++) {
    line[j] = seats[i][j];
  }
  previousSeating[i] = line;
}

//var finalNumber = 0;

while (true) {
  let newSeating = [[]];
  for (let i = 0; i < rows; i++) {
    var line = new Array(columns - 1);
    for (let j = 0; j < columns - 1; j++) {
      line[j] = previousSeating[i][j];
    }
    newSeating[i] = line;
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns - 1; j++) {
      //  var toggleValue = false;
      if (previousSeating[i][j] == '.') continue;
      var counter = 0;
      if (i - 1 >= 0 && j - 1 >= 0)
        if (previousSeating[i - 1][j - 1] == '#') counter++;
      if (i - 1 >= 0) if (previousSeating[i - 1][j] == '#') counter++;
      if (j - 1 >= 0) if (previousSeating[i][j - 1] == '#') counter++;
      if (i + 1 < rows && j - 1 >= 0)
        if (previousSeating[i + 1][j - 1] == '#') counter++;
      if (i - 1 >= 0 && j + 1 < columns - 1)
        if (previousSeating[i - 1][j + 1] == '#') counter++;
      if (i + 1 < rows) if (previousSeating[i + 1][j] == '#') counter++;
      if (j + 1 < columns - 1) if (previousSeating[i][j + 1] == '#') counter++;
      if (i + 1 < rows && j + 1 < columns - 1)
        if (previousSeating[i + 1][j + 1] == '#') counter++;

      if (previousSeating[i][j] == '#' && counter >= 4) newSeating[i][j] = 'L';
      if (previousSeating[i][j] == 'L' && counter == 0) newSeating[i][j] = '#';

      /*  if (toggleValue && setas[i][j] == '#') {
        previousSeating[i][j] = 'L';
        toggleValue = false;
      }
      if (seats[i][j] == 'L' && toggleValue) {
        seats[i][j] = '#';
        toggleValue = false;
      } */
    }
  }

  var areTheSame = true;
  var finalNumber = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns - 1; j++) {
      if (previousSeating[i][j] != newSeating[i][j]) {
        areTheSame = false;
      }
      if (newSeating[i][j] == '#') finalNumber++;
    }
  }

  if (areTheSame) {
    console.log(finalNumber);
    break;
  } else {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns - 1; j++) {
        previousSeating[i][j] = newSeating[i][j];
      }
    }
  }
}
