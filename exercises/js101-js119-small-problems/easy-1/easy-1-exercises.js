// 1 - Isn't it Odd?
// function isOdd(integer) {
//   if ((integer % 2 === 1) || (integer % 2 === -1)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// OR

// function isOdd(integer) {
//   return Math.abs(integer) % 2 === 1;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true





// 2  - Odd Numbers
// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// OR

// let counter = 1;

// while (counter < 100) {
//   console.log(counter);
//   counter += 2;
// }

// let rlSync = require('readline-sync');
// let number = rlSync.question('Provide a number: ');
// let counter = 1;

// while (counter <= number) {
//   console.log(counter);
//   counter += 2;
// }





// 3 - Even Numbers
// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }





// 4 - How big is the room?
// let rlSync = require('readline-sync');
// let length = rlSync.question('Enter the length of the room in meters:\n');
// let width = rlSync.question('Enter the width of the room in meters:\n');
// let area = length * width;

// console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * 10.7639).toFixed(2)} square feet).`);

// OR

// let readlineSync = require('readline-sync');

// const SQUAREMETERS_TO_SQUAREFEET = 10.7639;

// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaInMeters = (length * width);
// let areaInFeet = (areaInMeters * SQUAREMETERS_TO_SQUAREFEET);

// console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);

// OR

// let rlSync = require('readline-sync');
// let input = rlSync.question('Enter the input type (meters or feet):\n');
// const SQUAREMETERS_TO_SQUAREFEET = 10.7639;

// if (input[0].toLowerCase() === 'm') {
//   console.log('Enter all numbers in meters.\n')
//   let length = rlSync.question('Enter the length of the room in meters:\n');
//   let width = rlSync.question('Enter the width of the room in meters:\n');
//   let area = length * width;
//   console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * SQUAREMETERS_TO_SQUAREFEET).toFixed(2)} square feet).`);

// } else if (input[0].toLowerCase() === 'f') {
//   console.log('Enter all numbers in feet.\n')
//   let length = rlSync.question('Enter the length of the room:\n');
//   let width = rlSync.question('Enter the width of the room:\n');
//   let area = length * width;
//   console.log(`The area of the room is ${area.toFixed(2)} square feet (${(area / SQUAREMETERS_TO_SQUAREFEET).toFixed(2)} square meters).`);
// } else {
//   console.log('Input type invalid.')
// }





// 5 - Tip Calculator
// let readlineSync = require('readline-sync');

// let bill = parseFloat(readlineSync.question("What is the bill?\n"));
// let tipPercentage = parseFloat(readlineSync.question("What is the tip percentage?\n"));
// let tip = bill * tipPercentage / 100;
// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${total.toFixed(2)}`);





// 6 - Sum or Product of Consecutive Integers
// let readlineSync = require('readline-sync');


// let integer = parseInt(readlineSync.question("Please enter an integer greater than 0: "));
// while (!Number.isInteger(integer) || (integer < 1)) {
//   integer = parseInt(readlineSync.question("Please enter an integer greater than 0: "));
// }

// let sumOrProduct = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
// while (!['s', 'p'].includes(sumOrProduct.trimStart()[0].toLowerCase())) {
//   sumOrProduct = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
// }

// let array = [];
// for (i = 1; i <= integer; i++) {
//   array.push(i);
// }

// if (sumOrProduct === 's') {
//   console.log(`The sum of the integers between 1 and ${integer} is ${array.reduce((acc, num) => acc + num, 0)}.`);
// } else {
//   console.log(`The product of the integers between 1 and ${integer} is ${array.reduce((acc, num) => acc * num, 1)}.`);
// }


// let sum = array.reduce((acc, num) => acc + num, 0);
// let product = array.reduce((acc, num) => acc * num, 1);
// if (sumOrProduct === 's') {
//   console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
// } else {
//   console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
// }





// 7 - Short Long Short
// function shortLongShort(str1, str2) {
//   if (str1.length < str2.length) {
//     return str1 + str2 + str1;
//   } else {
//     return str2 + str1 + str2;
//   }
// }

// console.log(shortLongShort('abc', 'defgh'));
// console.log(shortLongShort('abcde', 'fgh'));
// console.log(shortLongShort('', 'xyz'));





// 8 - Leap Years (Part 1)
// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isLeapYear(year) {
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true





// 9 - Leap Years (Part 2)
// function isLeapYear(year) {
//   if (year <= 1752 && year % 4 === 0) {
//     return true;
//   }
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isLeapYear(year) {
//   if (year <= 1752 && year % 4 === 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 ===0;
//   }
// }

// function isLeapYear(year) {
//   return (((year <= 1752 && year % 4 === 0) || year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // true
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // true
// console.log(isLeapYear(400));       // true





// 10 - Multiples of 3 and 5
// function multisum(number) {
//   let array = [];
//   for (i = 1; i <= number; i++) {
//     array.push(i);
//   }
//   return array.filter(num => num % 3 === 0 || num % 5 === 0).reduce((acc, num) => acc + num, 0);
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168





// 11 - UTF-16 String Value
// function utf16Value(string) {
//   return string.split('').reduce((acc, letter) => acc + letter.charCodeAt(0), 0);
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// console.log(utf16Value(OMEGA));                  // 937
// console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811