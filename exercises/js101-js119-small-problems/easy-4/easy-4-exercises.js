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



















// 7 - Letter Counter (Part 2)



















// 8 - Letter Swap



















// 9 - Convert a String to a Number



















// 10 - Convert a String to a Signed Number



















// 11 - Convert a Number to a String



















// 12 - Convert a Signed Number to a String






















