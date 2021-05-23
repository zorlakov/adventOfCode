const countOccupiedSeats = (
  positionX,
  positionY,
  rows,
  columns,
  currentSeating
) => {
  let counter = 0;
  let directions = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  // Now checking all seats in a direction until L or # shows up
  // Each time an empty seat is encoutered the new coordinates will be + (or -) the directs times 2, 3, 4, ...

  // Loop to move in each direction
  for (let i = 0; i < 8; i++) {
    // let nextRow = positionX + direction[i][0];
    // let nextColumn = positionY + direction[i][1];
    var temp = 1;
    var repetitions = 1;

    // let test = true;
    while (temp > 0) {
      let nextRow = positionX + directions[i][0] * repetitions;
      let nextColumn = positionY + directions[i][1] * repetitions;

      // Check if out of bounds
      if (nextRow < 0 || nextRow >= rows) temp = 0;
      else if (nextColumn < 0 || nextColumn >= columns - 1) {
        temp = 0;
      }

      // Occupied seat = move to next direction and don't increase the counter
      else if (currentSeating[nextRow][nextColumn] == 'L') {
        temp = 0;
      } else if (currentSeating[nextRow][nextColumn] == '#') {
        counter++;
        temp = 0;
      } else repetitions++;
    }
  }
  return counter;
};

function solveSecond(seats) {
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
        if (previousSeating[i][j] == '#' && counter >= 5)
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

module.exports = { solveSecond };
