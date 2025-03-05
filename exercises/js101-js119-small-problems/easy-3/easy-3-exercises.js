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

// function for fibonacci to keep running, returning a number to append to an array
// once BigInt(number.length) === numberOfDigits, return the index 

function findFibonacciIndexByLength(numberOfDigits) {
  let number1 = 1n;
  let number2 = 1n;
  let array = [0n, 1n, 1n];
  let newNumber1;
  let newNumber2;

  while (true) {
    newNumber1 = number2;
    newNumber2 = number1 + number2;

    array.push(BigInt(newNumber2));

    if (numberOfDigits === BigInt(String(newNumber2).length)) {
      // return array[array.length - 1];
      return BigInt(array.length - 1);
    }
    number1 = newNumber1;
    number2 = newNumber2;
  }
}


console.log(findFibonacciIndexByLength(2n)) // 7n;
console.log(findFibonacciIndexByLength(3n)) // 12n;
console.log(findFibonacciIndexByLength(10n)) // 45n;
console.log(findFibonacciIndexByLength(16n)) // 74n;
console.log(findFibonacciIndexByLength(100n)) // 476n;
console.log(findFibonacciIndexByLength(1000n)) // 4782n;
console.log(findFibonacciIndexByLength(10000n)) // 47847n;





// 5 - Right Triangles













// 6 - Madlibs













// 7 - Double Doubles













// 8 - Grade Book













// 9 - Clean up the words













// 10 -	What Century is That?


































