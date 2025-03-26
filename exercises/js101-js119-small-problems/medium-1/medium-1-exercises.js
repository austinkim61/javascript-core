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
function wordToDigit(string) {
  const NUMBERS = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  }
  return string.split(' ').map(elem => NUMBERS[elem.replace(/[^a-z]/gi, '')] || elem).join(' ');  
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."





function wordToDigit(string) {
  let regex = /(one)/;

}


const result = str.replace(/(zero)(one)(two)(three)(four)(five)(six)(seven)(eight)(nine))/gi, match => {
  switch (match) {
    case 'zero':
      return 0;
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    case 'four':
      return 4;
    case 'five':
      return 5;
    case 'six':
      return 6;
    case 'seven':
      return 7;
    case 'eight':
      return 8;
    case 'nine':
      return 9;
  }
});




console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
















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

























