const countOccupiedSeats = (i, j, rows, columns, currentSeating) => {
  var counter = 0;
  // if statements to check for all 8 adjacent seats (or less if they are out of bounds)
  if (i - 1 >= 0 && j - 1 >= 0)
    if (currentSeating[i - 1][j - 1] == '#') counter++;
  if (i - 1 >= 0) if (currentSeating[i - 1][j] == '#') counter++;
  if (j - 1 >= 0) if (currentSeating[i][j - 1] == '#') counter++;
  if (i + 1 < rows && j - 1 >= 0)
    if (currentSeating[i + 1][j - 1] == '#') counter++;
  if (i - 1 >= 0 && j + 1 < columns - 1)
    if (currentSeating[i - 1][j + 1] == '#') counter++;
  if (i + 1 < rows) if (currentSeating[i + 1][j] == '#') counter++;
  if (j + 1 < columns - 1) if (currentSeating[i][j + 1] == '#') counter++;
  if (i + 1 < rows && j + 1 < columns - 1)
    if (currentSeating[i + 1][j + 1] == '#') counter++;

  return counter;
};

function solveFirst(seats) {
  // 2D array equal to the input data
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

  while (true) {
    // Infinite loop which ends once the seating doesn't change after going through the loop
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
        if (previousSeating[i][j] == '.') continue;

        let counter = countOccupiedSeats(i, j, rows, columns, previousSeating);
        if (previousSeating[i][j] == '#' && counter >= 4)
          newSeating[i][j] = 'L';
        if (previousSeating[i][j] == 'L' && counter == 0)
          newSeating[i][j] = '#';
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
      //  console.log(finalNumber);
      return finalNumber;
      break;
    } else {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns - 1; j++) {
          previousSeating[i][j] = newSeating[i][j];
        }
      }
    }
  }
}

module.exports = { solveFirst };
