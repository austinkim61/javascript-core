/*
// Exercise

## Leftover Blocks
You have a number of building blocks that can be used to build a valid structure. 
There are certain rules about what determines the validity of a structure:
  - The building blocks are cubes
  - The structure is built in layers
  - The top layer is a single block
  - A block in an upper layer must be supported by four blocks in a lower layer
  - A block in a lower layer can support more than one block in an upper layer
  - You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.





# Step 1
## P: Understand the Problem

Input: Integer representing the number for a specific amount of cubes
Output: Integer representing the number of blocks left over after building the tallest possible valid structure

Explicit rules:
  - Building blocks are cubes
  - Top layer is a single block
  - A block in an upper layer must be supported by four blocks in a lower layer
  - A block in a lower layer can support more than one block in an upper layer
  - Cannot leave gaps between blocks
  - Must build the tallest possible valid structure

Implicit rules: 
  - Forms a pyramid shape (less blocks at the top)
  - Have to start from the top to bottom to determine leftover blocks
  - Second layer is four blocks
  - Direct relationship between the layer number and the number of blocks along each side of that layer
  - The number of blocks in a lkayer is the number of blocks on one side of a layer multiplied by itself
  - A block in a lower layer must support a upper layer block in order for it to be the tallest possible
  - Layer number correlates with blocks in a layer
  - Layer number x layer number = number of blocks in layer

Sequence
  - Layer 1 - 1 (1 x 1) --> 1 cubes
  - Layer 2 - 4 (2 x 2) --> 5 cubes
  - Layer 3 - 9 (3 x 3) --> 14 cubes
  - Layer 4 - 16 (4 x 4) --> 30 cubes
  - Layer 5 - 25 (5 x 5) --> 55 cubes

Questions
  - Are all the cubes the same size in dimension?
  - Should the number of blocks used or number of layers be returned as well?
  - What should be output if input is a negative number?
  - When gaps cannot be left between blocks does that mean for each layer?
  - Can more blocks than needed be added to lower layers?
  - Will there always be leftover blocks?



# Step 2
## E: Examples and Test Cases
console.log(calculateLeftoverBlocks(0) === 0);  // true --> 0 layers 0 leftover
console.log(calculateLeftoverBlocks(1) === 0);  // true --> 1 layers 0 leftover
console.log(calculateLeftoverBlocks(2) === 1);  // true --> 1 layers 1 leftover
console.log(calculateLeftoverBlocks(4) === 3);  // true --> 1 layers 3 leftover
console.log(calculateLeftoverBlocks(5) === 0);  // true --> 2 layers 0 leftover
console.log(calculateLeftoverBlocks(6) === 1);  // true --> 2 layers 1 leftover
console.log(calculateLeftoverBlocks(14) === 0); // true --> 3 layers 0 leftover



# Step 3
## D: Data Structures
  - Layers of blocks
  - Order of layers is important
  - Each layer, starting from the top starts from one and increases by one going down (e.g. 1, 2, 3, etc.)
  - Each layer requires a number of blocks equal to the layer number squared
  - Use nested arrays with each nested array representing one layer
    - [
        ['x'],
        ['x', 'x', 'x', 'x'],
        ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
        ...
      ]



# Step 4
## A: Algorithms

1. Set a value for the current number of cubes equal to the input number of cubes
2. Start a loop
For loop starting from index 1 until the last index position
  Determine the number of required cubes as index * index
  If the number of required cubes is greater than the number of current cubes
    Return the number of current cubes as the leftover cubes and break
  Set current number of cubes equal to current cubes minus required cubes
  Increment index by 1



# Step 5
## C: Implementing a Solution in Code 
*/



// function calculateLeftoverBlocks(blocks) {
//   let currentBlocks = blocks;
//   for (let i = 1; i > 0; i++) {
//     let requiredBlocks = i * i;
//     if (requiredBlocks > currentBlocks) {
//       return currentBlocks;
//       break;
//     }
//     currentBlocks = currentBlocks - requiredBlocks;
//   }
// }


function calculateLeftoverBlocks(n) {
  let currentLayer = 0;
  let remainingCubes = n;

  let requiredCubes = (currentLayer + 1)**2;

  while (remainingCubes >= requiredCubes) {
    remainingCubes -= requiredCubes;
    currentLayer += 1;
    requiredCubes = (currentLayer + 1)**2;
    // console.log(
    //   {remainingCubes},
    //   {currentLayer},
    //   {requiredCubes}
    // );
  }
  return remainingCubes;
}

console.log(calculateLeftoverBlocks(0) === 0);
console.log(calculateLeftoverBlocks(1) === 0);
console.log(calculateLeftoverBlocks(2) === 1);
console.log(calculateLeftoverBlocks(4) === 3);
console.log(calculateLeftoverBlocks(5) === 0);
console.log(calculateLeftoverBlocks(6) === 1);
console.log(calculateLeftoverBlocks(14) === 0);