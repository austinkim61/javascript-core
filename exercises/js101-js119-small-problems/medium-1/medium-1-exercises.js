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
// function maxRotation(number) {
//   for (let i = String(number).length; i > 0; i--) {
//     number = rotateRightmostDigits(number, i);
//   }
//   return number;
// }

// function rotateRightmostDigits(number, count) {
//   let numberString = String(number);
//   let firstPart = numberString.slice(0, numberString.length - count); 
//   let secondPart = numberString.slice(numberString.length - count);
//   let resultString = firstPart + rotateString(secondPart);

//   return Number(resultString);
// }

// function rotateString(string) {
//   return string.slice(1) + string[0];
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845


// function maxRotation(number) {
//   for (let i = String(number).length; i > 0; i--) {
//     number = rotateRightmostDigits(number, i);
//   }
//   return number;
// }

// function rotateRightmostDigits(digit, count) {
//   let array = digit.toString().split('');
//   let lastDigits = array.splice(1 - count);
  
//   array.splice(array.length - 1, 0, lastDigits);

//   return Number(array.flat().join(''));  
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845





// 4 - Stack Machine Interpretation
// function minilang(string) {
//   let array = string.split(' ');
//   let register = 0;
//   let stack = [];

//   array.forEach(elem => {
//     if (Number.isInteger(Number(elem))) {
//       register = Number(elem);
//       // console.log(register);
//     } else if (elem === 'PUSH') {
//       stack.push(register);
//     } else if (elem === 'ADD') {
//       register += stack.pop();
//     } else if (elem === 'SUB') {
//       register -= stack.pop();
//     } else if (elem === 'MULT') {
//       register *= stack.pop();
//     } else if (elem === 'DIV') {
//       register = Math.floor(register / stack.pop());
//     } else if (elem === 'REMAINDER') {
//       register = Math.floor(register % stack.pop());
//     } else if (elem === 'POP') {
//       register = stack.pop();
//     } else if (elem === 'PRINT') {
//       console.log(register);
//     }
//   });  
// }

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)



// Launch School Solution
// function minilang(string) {
//   let array = string.split(' ');
//   let register = 0;
//   let stack = [];

//   array.forEach(elem => {
//     switch (elem) {
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'ADD':
//         register += stack.pop();
//         break;
//       case 'SUB':
//         register -= stack.pop();
//         break;
//       case 'MULT':
//         register *= stack.pop();
//         break;
//       case 'DIV':
//         register = Math.floor(register / stack.pop());
//         break;
//       case 'REMAINDER':
//         register = Math.floor(register % stack.pop());
//         break;
//       case 'POP':
//         register = stack.pop();
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;
//       default:
//         register = Number(elem);
//     }
//   });
// }

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)



// Further Exploration
// function minilang(string) {
//   let array = string.split(' ');
//   let register = 0;
//   let stack = [];

//   for (let elem of array) {
//     switch (elem) {
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'ADD':
//         if (stack.length === 0) {
//           console.log('Error: stack is empty.');
//           return;
//         }
//         register += stack.pop();
//         break;
//       case 'SUB':
//         if (stack.length === 0) {
//           console.log('Error: stack is empty.');
//           return;
//         }
//         register -= stack.pop();
//         break;
//       case 'MULT':
//         if (stack.length === 0) {
//           console.log('Error: stack is empty.');
//           return;
//         }
//         register *= stack.pop();
//         break;
//       case 'DIV':
//         register = Math.floor(register / stack.pop());
//         break;
//       case 'REMAINDER':
//         if (stack.length === 0) {
//           console.log('Error: stack is empty.');
//           return;
//         }
//         register = Math.floor(register % stack.pop());
//         break;
//       case 'POP':
//         if (stack.length === 0) {
//           console.log('Error: stack is empty.');
//           return;
//         }
//         register = stack.pop();
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;
//       default:
//         register = Number(elem);
//     }
//   }
// }

// minilang('5 PUSH POP POP PRINT');
// Error: stack is empty.

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)





// 5 - Word to Digit
// const NUMBERS = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };


// function wordToDigit(string) {
//   return string.split(' ').map(elem => NUMBERS[elem.replace(/[^a-z]/gi, '')] || elem).join(' ');  
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// function wordToDigit(string) {
//   return string.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/gi, match => {
//     switch (match) {
//       case 'zero':
//         return 0;
//       case 'one':
//         return 1;
//       case 'two':
//         return 2;
//       case 'three':
//         return 3;
//       case 'four':
//         return 4;
//       case 'five':
//         return 5;
//       case 'six':
//         return 6;
//       case 'seven':
//         return 7;
//       case 'eight':
//         return 8;
//       case 'nine':
//         return 9;
//     }
//   });
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// // "Please call me at 5 5 5 1 2 3 4. Thanks."
// console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."



// Launch School Solution
// const NUMBERS = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };


// function wordToDigit(string) {
//   Object.keys(NUMBERS).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'gi');
//     string = string.replace(regex, NUMBERS[word]);
//   });
//   return string;
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."





// 6 - Fibonacci Number Location By Length
// function findFibonacciIndexByLength(integer) {
//   let first = 1n;
//   let second = 1n;
//   let lastDigit = 0n;
//   let array = [1n, 1n];

//   for (let i = 0; i >= 0; i++) {
//     lastDigit = first + second;
//     first = second;
//     second = lastDigit;
//     array.push(lastDigit);
//     if (BigInt(lastDigit.toString().length) === integer) {
//       break;     
//     }    
//   }
//   return BigInt(array.length);  
// }

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// console.log(findFibonacciIndexByLength(2n));
// console.log(findFibonacciIndexByLength(3n));
// console.log(findFibonacciIndexByLength(10n));
// console.log(findFibonacciIndexByLength(16n));
// console.log(findFibonacciIndexByLength(100n));
// console.log(findFibonacciIndexByLength(1000n));
// console.log(findFibonacciIndexByLength(10000n));



// Launch School Solution
// function findFibonacciIndexByLength(length) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     count += 1n;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);

//   return count;
// }

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);


// console.log(findFibonacciIndexByLength(2n));
// console.log(findFibonacciIndexByLength(3n));
// console.log(findFibonacciIndexByLength(10n));
// console.log(findFibonacciIndexByLength(16n));
// console.log(findFibonacciIndexByLength(100n));
// console.log(findFibonacciIndexByLength(1000n));
// console.log(findFibonacciIndexByLength(10000n));





// 7 - Fibonacci Numbers (Recursion)
// function fibonacci(integer) {
//   return integer === 1 ? 1 : (integer === 0 ? 0 : ((fibonacci(integer - 1) + fibonacci(integer - 2))));  
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765


// function fibonacci(integer) {
//   return integer <=2 ? 1 : (fibonacci(integer - 1) + fibonacci(integer - 2));  
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765


// Launch School Solution
// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   }
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
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
//   let first = 1;
//   let second = 1;
//   let lastDigit;

//   if (integer < 3) {
//     return 1;
//   }

//   for (let i = 3; i <= integer; i++) {
//     lastDigit = first + second;
//     first = second;
//     second = lastDigit;
//   }
//   return lastDigit;
// }

// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050



// Launch School Solution
// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let counter = 3; counter <= nth; counter += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }

//   return previousTwo[1];
// }

// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050





// 9 - Fibonacci Numbers (Memoization)
// let obj = {};
// function fibonacci(n) {
//   if (n in obj) { // calls on it if in object
//     return obj[n];
//   }
//   if (n <= 2) { // lowest level calls
//     obj[n] = 1;
//   } else { // recursion but starts to store in object
//     obj[n] = fibonacci(n - 1) + fibonacci(n - 2);
//   }
//   return obj[n];
// }

// console.log(fibonacci(75));       // 2111485077978050



// Launch School Solution
// let memo = {};
// function fibonacci(n) {
//   if (n <= 2) {
//     return 1;
//   } else if (n in memo) {
//     return memo[n];
//   } else {
//     memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
//   }
//   return fibonacci(n);
// }

// console.log(fibonacci(75));       // 2111485077978050