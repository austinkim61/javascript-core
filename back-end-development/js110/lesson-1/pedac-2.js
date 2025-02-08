// 1. Create an empty ‘rows’ array to hold all of our rows
// 2. Create a ‘row’ array and add it to the overall ‘rows’ array
// 3. Repeat step 2 until all the necessary rows have been created
//   - All the rows have been created when the length of the rows array is equal to the input
// 4. Sum the final row
// 5. Return the sum

function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let rowLength = 1; rowLength <= rowNumber; rowLength += 1) {
    let row = createRow(startInteger, rowLength);
    rows.push(row);

    startInteger = row[row.length - 1] + 2;
  }
  
  let finalRow = rows[rows.length - 1];
  return finalRow.reduce((a, b) => a + b, 0);
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]



















// Algorithm:

// 1. Create an empty ‘row’ array to contain the integers
// 2. Add the starting integer
// 3. Increment the starting integer by 2 to get the next integer in the sequence
// 4. Repeat steps 2 & 3 until the array has reached the correct length
// 5. Return the row array



// start the loop
//  - add startInteger to the row
//  - increment startInteger by 2
//  - break out of loop if length of row equals rowLength



// [
//   [2],
//   [4, 6],
//   [8, 10, 12],
//   [14, 16, 18, 20],
//   ... 
// ]



// Calculating the start integer:
// Rule: first integer of row == last integer of preceding row + 2
// Algorithm:
// - get the last row of the rows array
// - get the last integer from that row
// - add 2
