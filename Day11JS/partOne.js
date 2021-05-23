const countOccupiedSeats = (
  positionX,
  positionY,
  rows,
  columns,
  currentSeating
) => {
  let counter = 0;
  // Check the 8 adjacent seats
  for (let i = positionX - 1; i <= positionX + 1; i++) {
    // If i or j go below 0 or above the number of rows/columns skip - out of bounds
    if (i < 0 || i >= rows) continue;
    for (let j = positionY - 1; j <= positionY + 1; j++) {
      // Ignore current seat (when i and j are equal to position X and Y)
      if (j < 0 || j >= columns - 1 || (i == positionX && j == positionY))
        continue;
      else if (currentSeating[i][j] == '#') counter++;
    }
  }
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
      return finalNumber;
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
