// 1 - ddaaiillyy ddoouubbllee
// function crunch(string) {
//   let newString = '';

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== newString[newString.length - 1]) {
//       newString = newString + string[i];      
//     }
//   }
//   return newString;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""



// Launch School Solution
// function crunch(string) {
//   let i = 0;
//   let newString = '';

//   while (i < string.length) {
//     if (string[i] !== string[i + 1]) {
//       newString += string[i]
//     }
//     i++;
//   }
//   return newString;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""



// function crunch(string) {
//   let newString = string.replace(/(.)\1+/g, "$1")
//   return newString;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""





// 2 - Bannerizer
// function logInBox(string) {
//   console.log(`+-${'-'.repeat(string.length)}-+`);
//   console.log(`| ${' '.repeat(string.length)} |`);
//   console.log(`| ${string} |`);
//   console.log(`| ${' '.repeat(string.length)} |`);
//   console.log(`+-${'-'.repeat(string.length)}-+`);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');



// Launch School Solution
// function logInBox(string) {
//   let horizontalRule = `+${"-".repeat(string.length + 2)}+`;
//   let emptyLine = `|${" ".repeat(string.length + 2)}|`;

//   console.log(horizontalRule);
//   console.log(emptyLine);
//   console.log(`| ${string} |`);
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');


// Further Exploration
// function logInBox(string, width) {
//   let stringLength = string.length;
//   let horizontalRule = `+${"-".repeat(string.length + 2)}+`;
//   let emptyLine = `|${" ".repeat(string.length + 2)}|`;

//   if (stringLength + 4 <= width) {
//     console.log(horizontalRule);
//     console.log(emptyLine);
//     console.log(`| ${string} |`);
//     console.log(emptyLine);
//     console.log(horizontalRule);
//   } else {
//     horizontalRule = `+${"-".repeat(width - 2)}+`;
//     emptyLine = `|${" ".repeat(width - 2)}|`;


//     let array = string.split(' '); // changed this to space

//     console.log(horizontalRule);
//     console.log(emptyLine);
//     let line = '';

//     for (let i = 0; i < array.length; i++) {
//       if ((line + array[i]).length <= (width - 4)) {
//         line = line + array[i] + ' ';
//       } else {
//         let spaces = width - 2 - line.trimEnd().length;
//         let leftSpace;
//         let rightSpace;
//         if (spaces % 2 === 1) {
//           leftSpace = Math.ceil(spaces / 2);
//           rightSpace = Math.floor(spaces / 2);
//         } else {
//           leftSpace = spaces / 2;
//           rightSpace = spaces / 2;
//         }
//         console.log(`|${" ".repeat(leftSpace)}${line.trimEnd()}${" ".repeat(rightSpace)}|`);
//         line = array[i] + ' ';
//       }      
//     }
//     let spaces = width - 2 - line.trimEnd().length;
//     let leftSpace;
//     let rightSpace;
//     if (spaces % 2 === 1) {
//       leftSpace = Math.ceil(spaces / 2);
//       rightSpace = Math.floor(spaces / 2);
//     } else {
//       leftSpace = spaces / 2;
//       rightSpace = spaces / 2;
//     }
//     console.log(`|${" ".repeat(leftSpace)}${line.trimEnd()}${" ".repeat(rightSpace)}|`);


//     console.log(emptyLine);
//     console.log(horizontalRule);
//   }
// }
// logInBox('To boldly go where no one has gone before.', 20);





// 3 - Stringy Strings
// function stringy(positiveInteger) {
//   let string = '';
//   for (i = 0; i < positiveInteger; i++) {
//     if (i % 2 === 0) {
//       string += '1';
//     } else {
//       string += '0';
//     }
//   }
//   return string;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"



// Launch School Solution
// function stringy(positiveInteger) {
//   let string = '';
//   for (let i = 0; i < positiveInteger; i++) {
//     i % 2 === 0 ? string += '1' : string += '0';
//   }  
//   return string;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"





// 4 - Fibonacci Number Location By Length [OBSOLETE]
// function findFibonacciIndexByLength(numberOfDigits) {
//   let number1 = 1n;
//   let number2 = 1n;
//   let array = [0n, 1n, 1n];
//   let newNumber1;
//   let newNumber2;

//   while (true) {
//     newNumber1 = number2;
//     newNumber2 = number1 + number2;

//     array.push(BigInt(newNumber2));

//     if (numberOfDigits === BigInt(String(newNumber2).length)) {
//       // return array[array.length - 1];
//       return BigInt(array.length - 1);
//     }
//     number1 = newNumber1;
//     number2 = newNumber2;
//   }
// }

// console.log(findFibonacciIndexByLength(2n)) // 7n;
// console.log(findFibonacciIndexByLength(3n)) // 12n;
// console.log(findFibonacciIndexByLength(10n)) // 45n;
// console.log(findFibonacciIndexByLength(16n)) // 74n;
// console.log(findFibonacciIndexByLength(100n)) // 476n;
// console.log(findFibonacciIndexByLength(1000n)) // 4782n;
// console.log(findFibonacciIndexByLength(10000n)) // 47847n;



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


// console.log(findFibonacciIndexByLength(2n)) // 7n;
// console.log(findFibonacciIndexByLength(3n)) // 12n;
// console.log(findFibonacciIndexByLength(10n)) // 45n;
// console.log(findFibonacciIndexByLength(16n)) // 74n;
// console.log(findFibonacciIndexByLength(100n)) // 476n;
// console.log(findFibonacciIndexByLength(1000n)) // 4782n;





// 5 - Right Triangles
// function triangle(integer) {
//   for (let i = 1; i <= integer; i++) {
//     console.log(`${' '.repeat(integer - i)}${'*'.repeat(i)}`);
//   }
// }

// triangle(5);
// triangle(9);





// 6 - Madlibs
// let rlSync = require('readline-sync');
// let noun = rlSync.question('Enter a noun: ');
// let verb = rlSync.question('Enter a verb: ');
// let adjective = rlSync.question('Enter an adjective: ');
// let adverb = rlSync.question('Enter an adverb: ');

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
// console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
// console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);





// 7 - Double Doubles
// function twice(number) {
//   if (String(number).length % 2 === 0) { // 44
//     let string = String(number);
//     let startString = string.slice(0, string.length / 2);
//     let endString = string.slice(string.length / 2);

//     return startString === endString ? number : number * 2;
//   }

//   return number * 2;
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676



// Launch School Solution
// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

// function isDoubleNumber(number) {
//   let stringNumber = String(number);
//   let center = Math.floor(stringNumber.length / 2);
//   let leftNumber = stringNumber.substring(0, center);
//   let rightNumber = stringNumber.substring(center);

//   return leftNumber === rightNumber;
// }





// 8 - Grade Book
// function getGrade(a, b, c) {
//   let average = (a + b + c) / 3;
//   switch (true) {
//     case average >= 90:
//       return 'A';
//     case average < 90 && average >= 80:
//       return 'B';
//     case average < 80 && average >= 70:
//       return 'C';
//     case average < 70 && average >= 60:
//       return 'D';
//     default:
//       return 'F';
//   }
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D" 



// Launch School Solution
// function getGrade(grade1, grade2, grade3) {
//   let average = (grade1 + grade2 + grade3) / 3;

//   if (average >= 90 && average <= 100) {
//     return 'A';
//   } else if (average >= 80 && average < 90) {
//     return 'B';
//   } else if (average >= 70 && average < 80) {
//     return 'C';
//   } else if (average >= 60 && average < 70) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D" 





// 9 - Clean up the words
function cleanUp(string) {
  return string.replace(/[^a-zA-Z]+/g, " ");
}

// function cleanUp(string) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let newString = '';

//   for (let i = 0; i < string.length; i++) {
//     if (!alphabet.includes(string[i]) && (newString[newString.length - 1] !== ' ')) {
//       newString = newString + ' ';
//     } else {
//       !alphabet.includes(string[i]) ? newString = newString : newString = newString + string[i];
//     }
//   }
//   return newString;
// }

console.log(cleanUp("---what's my +*& liNe?"));    // " what s my line "





// 10 -	What Century is That?


































