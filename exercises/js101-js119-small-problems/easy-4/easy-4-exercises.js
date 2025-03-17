// 1 - Searching 101
// let rlSync = require('readline-sync');
// let num1 = Number(rlSync.question('Enter the 1st number: '));
// let num2 = Number(rlSync.question('Enter the 2nd number: '));
// let num3 = Number(rlSync.question('Enter the 3rd number: '));
// let num4 = Number(rlSync.question('Enter the 4th number: '));
// let num5 = Number(rlSync.question('Enter the 5th number: '));
// let numLast = Number(rlSync.question('Enter the last number: '));
// let value = 25;

// let numbers = [num1, num2, num3, num4, num5];

// if (numbers.includes(numLast)) {
//   console.log(`The number ${numLast} appears in ${num1},${num2},${num3},${num4},${num5}.`);
// } else {
//   console.log(`The number ${numLast} does not appear in ${num1},${num2},${num3},${num4},${num5}.`);
// }

// console.log(numbers.some((x) => x > value))





// 2 - Palindromic Strings (Part 1)
// function isPalindrome(string) {
//   let lowerCase = string.split('').reverse().join('').toLowerCase();
//   let characters = string.split('').reverse().join('').replaceAll(/[^a-zA-Z0-9]/g, '');

//   if (string === string.split('').reverse().join('')) {
//     return 'true';
//   } else if (string.toLowerCase() === lowerCase) {
//     return 'false (case matters)';
//   } else if (string.replaceAll(/[^a-zA-Z0-9]/g, '') === characters) {
//     return 'false (all characters matter)';
//   // } else if (string.replaceAll(/[^a-zA-Z0-9\s]/g, '') === characters) {
//   //   return 'false (all characters matter)';
//   } else {
//     return 'false';
//   }
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true
// console.log(isPalindrome("mada m'i'm adam"));      // true





// 3 - Palindromic Strings (Part 2)
// function isRealPalindrome(string) {
//   let lowerCase = string.split('').reverse().join('').toLowerCase();
//   let characters = string.split('').reverse().join('').replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();

//   if (string === string.split('').reverse().join('')) {
//     return 'true';
//   } else if (string.toLowerCase() === lowerCase) {
//     return 'true (case does not matter)';
//   } else if (string.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase() === characters) {
//     return 'true (only alphanumerics matter)';
//   // } else if (string.replaceAll(/[^a-zA-Z0-9\s]/g, '') === characters) {
//   //   return 'false (all characters matter)';
//   } else {
//     return 'false';
//   }
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false





// 4 - Palindromic Numbers
// function isPalindromicNumber(numbers) {
//   let string = String(numbers);
//   if (string === string.split('').reverse().join('')) {
//     return true;
//   }
//   return false;
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true





// 5 - Running Totals
// function runningTotal(array) {
//   if (array[0] === undefined) {
//     return [];
//   }

//   let summedArray = [];
//   let newArray = []

//   for (let i = 1; i <= array.length; i++) {
//     newArray = array.slice(0, i); // 2, 5
//     summedArray.push(newArray.reduce((sum, num) => sum + num, 0))    
//   }
//   return summedArray;

// }


// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []



// Launch School Solution
// function runningTotal(array) {
//   let resultArray = [];
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     resultArray.push((sum += array[i]));
//   }

//   return resultArray;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []



// function runningTotal(array) {
//   let sum = 0;
//   let resultArray = array.map((x) => sum += x);

//   return resultArray;

// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []





// 6 - Letter Counter (Part 1)
// function wordSizes(string) {
//   let array = string.split(' ').filter(word => word !== '');
//   let length = [];
//   let obj = {};

//   array.forEach(word => length.push(word.length)); // [4, 5, 3, 6]

//   for (let i = 0; i < array.length; i++) {
//     obj[length[i]] = length.filter(num => num === length[i]).length;
//   }
//   return obj;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}





// 7 - Letter Counter (Part 2)
// function wordSizes(string) {

//   let array = string.replaceAll(/[^a-zA-Z\s]/g, '').split(' ').filter(word => word !== '');
//   let length = [];
//   let obj = {};

//   array.forEach(word => length.push(word.length));

//   for (let i = 0; i < array.length; i++) {
//     obj[length[i]] = length.filter(num => num === length[i]).length;
//   }
//   return obj;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));                                            // {}



// Launch School Solution
// function wordSizes(words) {
//   let wordsArray = words.split(' ');
//   let count = {};

//   for (let idx = 0; idx < wordsArray.length; idx += 1) {
//     let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
//     if (cleanWordSize === 0) {
//       continue;
//     }

//     count[cleanWordSize] = count[cleanWordSize] || 0;
//     count[cleanWordSize] += 1;
//   }

//   return count;
// }

// function removeNonLetters(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (isLetter(string[idx])) {
//       result += string[idx];
//     }
//   }

//   return result;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));                                            // {}





// 8 - Letter Swap
// THIS IS TO SWAP EVERYTHING, NOT JUST THE FIRST AND LAST CHARACTER
// function swap(string) {
//   return string.split(' ')
//                .map((x) => x.split('').reverse().join(''))
//                .join(' ');
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// function swap(string) {  
//   return string.split(' ')
//                .map((x) => {
//                 if (x.length === 1) {
//                   return x;
//                 } else {
//                   return x.slice(-1) + x.slice(1, -1) + x.slice(0, 1);
//                 }
//                 })
//                .join(' ');  
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"





// 9 - Convert a String to a Number
// function stringToInteger(string) {
//   // let number = string * 1;
//   // console.log(Number.isInteger(number));
//   return string * 1;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true



// Launch School Solution
// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
  // let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  // let value = 0;
  // arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  // return value;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true



// Further Exploration
// function hexadecimalToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     a: 10,
//     b: 11,
//     c: 12,
//     d: 13,
//     e: 14,
//     f: 15,
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15
//   };
//   let arrayOfDigits = string.split("").map(char => DIGITS[char]);
//   let value = 0;
//   for (let i = 0; i < arrayOfDigits.length; i++) { // [ 4, 3, 2, 1]
//     value += arrayOfDigits[i] * Math.pow(16, arrayOfDigits.length - (i + 1));
//   }
//   return value;
// }

// console.log(hexadecimalToInteger('4D9f') === 19871);





// 10 - Convert a String to a Signed Number
// function stringToSignedInteger(string) {  
//   let sign = signed(string);
//   let value = stringToInteger(string);
//   let multiplier = sign + 1;
//   value = multiplier * value;
//   return value;
// }

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let value = 0;
//   let arrayOfDigits = string.replace(/[+-]/, '').split("").map(char => DIGITS[char]);  
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// function signed(string) {
//   if (string[0] === ('-' || '+')) {
//     let symbol = string[0];
//     return symbol;
//   }
//   return '';
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true





// 11 - Convert a Number to a String
// function integerToString(integer) {
//   const STRINGS = {
//     0: '0',
//     1: '1',
//     2: '2',
//     3: '3',
//     4: '4',
//     5: '5',
//     6: '6',
//     7: '7',
//     8: '8',
//     9: '9'
//   };

//   let array = [];

//   if (integer === 0) {
//     return STRINGS[0];
//   }

//   let i = 10;
//   let previousNumber = 0;

//   while (i <= integer * 10) {
//     array.push((integer % i - previousNumber) / (i / 10));
//     previousNumber = integer % i;
//     i *= 10;
//   }
//   let result = '';
//   array.reverse().forEach((x) => result += STRINGS[x]);
//   return result;

// }

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"



// Launch School Solution
// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }


// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"



// 12 - Convert a Signed Number to a String
// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
//   let result = '';
//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

// function signedIntegerToString(signedInteger) {
//   switch (1 / Math.sign(signedInteger)) {
//     case 1:
//       return `+${integerToString(Math.abs(signedInteger))}`;
//     case -1:
//       return `-${integerToString(Math.abs(signedInteger))}`;
//     case Infinity:
//       return `${integerToString(signedInteger)}`;
//     case -Infinity:
//       return `-${integerToString(signedInteger)}`;
//   }
// }

// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");
// console.log(signedIntegerToString(-0) === "-0")

// console.log(signedIntegerToString(4321));
// console.log(signedIntegerToString(-123));
// console.log(signedIntegerToString(0));
// console.log(signedIntegerToString(-0));