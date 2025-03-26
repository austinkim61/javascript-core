// 1 - Rotation (Part 1)
// let array = [1, 2, 3, 4];

// function rotateArray(args) {
//   if (!Array.isArray(args)) {
//     return undefined;
//   }

//   return [].concat(args.filter((_, index) => index !== 0), args.filter((_, index) => index === 0));
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined

// // the input array is not mutated
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]





// 2 - Rotation (Part 2)
// function rotateRightmostDigits(digit, count) {
//   let array = digit.toString().split('');
//   let lastDigits = array.splice(1 - count);
  
//   array.splice(array.length - 1, 0, lastDigits);

//   return Number(array.flat().join(''));  
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917



// Launch School Solution
// function rotateRightmostDigits(number, count) {
//   let numberString = String(number); // 735291
//   let firstPart = numberString.slice(0, numberString.length - count); // 0, 6 - 3 => 0, 3 => indices 0 to 2 => '735' 
//   let secondPart = numberString.slice(numberString.length - count); // 6 - 3, => 3 => indices 3 to end => 291
//   let resultString = firstPart + rotateString(secondPart);

//   return Number(resultString);
// }

// function rotateString(string) { // '291'
//   return string.slice(1) + string[0]; // '91' + '2'
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917





// 3 - Rotation (Part 3)
function maxRotation(number) {
  let result = '';
  let string = String(number);

  console.log(rotateRightmostDigits(number, string.length));

  for (let i = 0; i < string.length - 1; i++) {
    rotateRightmostDigits

  } 
}



function rotateRightmostDigits(number, count) {
  let numberString = String(number); // 735291
  let firstPart = numberString.slice(0, numberString.length - count); // 0, 6 - 3 => 0, 3 => indices 0 to 2 => '735' 
  let secondPart = numberString.slice(numberString.length - count); // 6 - 3, => 3 => indices 3 to end => 291
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) { // '291'
  return string.slice(1) + string[0]; // '91' + '2'
}






console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// 1st 0 digits fixed, 1st non fixed digit (1st) to the end
// 735291 // original
// 352917 // 1st 0 digits fixed, 1st non fixed digit (1st) - 7 to the end
// 329175 // 1st 1 digits fixed, 1st non fixed digit (2nd) - 5 to the end
// 321759 // 1st 2 digits fixed, 1st non fixed digit (3rd) - 9 to the end
// 321597 // 1st 3 digits fixed, 1st non fixed digit (4th) - 7 to the end
// 321579 // 1st 4 digits fixed, 1st non fixed digit (5th) - 9 to the end
// 
// rotations = string.length - 1



// 4 - Stack Machine Interpretation
// function minilang(string) {
  
// }

// console.log(minilang('PRINT'));
// // 0

// console.log(minilang('5 PUSH 3 MULT PRINT'));
// // 15

// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// // 5
// // 3
// // 8

// console.log(minilang('5 PUSH POP PRINT'));
// // 5

// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// // 5
// // 10
// // 4
// // 7

// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// // 6

// console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// // 12

// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// // 8

// console.log(minilang('6 PUSH'));
// // (nothing is printed because the `program` argument has no `PRINT` commands)





// 5 - Word to Digit
// function wordToDigit(string) {
  
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// // "Please call me at 5 5 5 1 2 3 4. Thanks."





// 6 - Fibonacci Number Location By Length
// function findFibonacciIndexByLength(integer) {
  
// }

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;





// 7 - Fibonacci Numbers (Recursion)
// function fibonacci(integer) {
  
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765





// 8 - Fibonacci Numbers (Procedural)
// function fibonacci(integer) {
  
// }

// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050





// 9 - Fibonacci Numbers (Memoization)
// function fibonacci(integer) {
  
// }

// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050

























