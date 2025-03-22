// 1 - Double Char (Part 1)
// function repeater(string) {
//   return string.split('').map(x => x + x).join('');
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""





// 2 - Double Char (Part 2)
// function doubleConsonants(string) {
//   return string.split('').map(char => {
//     if (char.match(/[bcdfghjklmnpqrstvwxyz]/gi)) {
//       return char + char;
//     } else {
//       return char;
//     }
//   }).join('');  
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""



// Launch School Solution
// function doubleConsonants(string) {
//   const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
//                   'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
//   let stringArray = [];

//   for (let idx = 0; idx < string.length; idx += 1) {
//     stringArray.push(string[idx]);
//     if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
//       stringArray.push(string[idx]);
//     }
//   }

//   return stringArray.join("");
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""





// 3 - Reverse Number
// function reverseNumber(num) {
//   return parseInt(num.toString().split('').reverse().join(''), 10);
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1





// 4 - Counting Up
// function sequence(num) {
//   let array = [];
//   for (let i = 1; i <= num; i++) {
//     array.push(i);
//   }

//   return array;  
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// Further Exploration
// function sequence(num) {
//   let array = [...Array(num)];
//   array.forEach((_, index) => array[index] = index + 1);

//   return array;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// function sequence(num) {
//   return [...Array(num)].map((_, index) => index + 1);
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]





// 5 - Name Swapping
// function swapName(string) {
//   return string.split(' ').reverse().join(', ');
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration
// function swapName(string) {
//   let array = string.split(' ');
//   if (array.length > 2) {
//     array.unshift(`${array.pop()},`);
//     return array.join(' ');
//   } else {
//     return array.reverse().join(', ');
//   }
// }

// console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"





// 6 - Sequence Count
// function sequence(num1, num2) {
//   let array = [...Array(num1)];
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i - 1] + num2 || num2;
//   }
//   return array;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

// Launch School Solution
// function sequence(count, startNum) {
//   let result = [];
//   for (let num = 1; num <= count; num++) {
//     result.push(num * startNum);
//   }
//   return result;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []





// 7 - Reverse It (Part 1)
// function reverseSentence(string) {
//   return string.split(' ').reverse().join(' ');
  
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"





// 8 - Reverse It (Part 2)
// function reverseWords(string) {
//   return string.split(' ').map(word => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     } else {
//       return word;
//     }
//   }).join(' ');
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"





// 9 - Reversed Arrays
// function reverse(array) {
//   let arr = [];

//   array.forEach(elem => arr.unshift(elem));

//   for (let i = 0; i < arr.length; i++) {
//     array[i] = arr[i];
//   }

//   return array;
// }

// function reverse(array) {
//   for (let i = 0; i < array.length; i++) {
//     array.splice(i, 0, array.pop())
//   }

//   return array;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true



// Launch School Solution
// function reverse(array) {
//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex < array.length / 2) {
//     [array[leftIndex], array[rightIndex]] =
//       [array[rightIndex], array[leftIndex]];
//     leftIndex += 1;
//     rightIndex -= 1;
//   }
//   return array;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true





// 10 - Matching Parentheses?
// function isBalanced(string) {
//   let regex = /[^()]/gi;
//   let newString = string.replaceAll(regex, '');

//   for (let i = 0; i < newString.length; i++) {
//     newString = newString.replaceAll('()', '');

//     if (!newString.includes('(')) {
//       break;
//     }
//   }
//   if (newString.length === 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// console.log(isBalanced("What (is) this?"));
// console.log(isBalanced("What is) this?"));
// console.log(isBalanced("What (is this?"));
// console.log(isBalanced("((What) (is this))?"));
// console.log(isBalanced("((What)) (is this))?"));
// console.log(isBalanced("Hey!"));
// console.log(isBalanced(")Hey!("));
// console.log(isBalanced("What ((is))) up("));



// Launch School Solution
// function isBalanced(string) {
//   let parens = 0;
//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === "(") {
//       parens += 1;
//     } else if (string[idx] === ")") {
//       parens -= 1;
//     }
//     if (parens < 0) return false;
//   }
//   return parens === 0;
// };

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);


// console.log(isBalanced("(()()()()()))("));
// console.log(isBalanced("What (is) this?"));
// console.log(isBalanced("What is) this?"));
// console.log(isBalanced("What (is this?"));
// console.log(isBalanced("((What) (is this))?"));
// console.log(isBalanced("((What)) (is this))?"));
// console.log(isBalanced("Hey!"));
// console.log(isBalanced(")Hey!("));
// console.log(isBalanced("What ((is))) up("));


// Further Exploration

// let string = "()[]{}''";
let string = '""()][{}';

function parenthesis(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};

function squareBrackets(string) {
  let squareBrackets = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "[") {
      squareBrackets += 1;
    } else if (string[idx] === "]") {
      squareBrackets -= 1;
    }
    if (squareBrackets < 0) return false;
  }
  return squareBrackets === 0;
};

function curlyBrackets(string) {
  let curlyBrackets = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "{") {
      curlyBrackets += 1;
    } else if (string[idx] === "}") {
      curlyBrackets -= 1;
    }
    if (curlyBrackets < 0) return false;
  }
  return curlyBrackets === 0;
};

function singleQuotes(string) {
  let regex = /[^']/gi;
  let newString = string.replaceAll(regex, '');

  return newString.length % 2 === 0;
};

function doubleQuotes(string) {
  let regex = /[^"]/gi;
  let newString = string.replaceAll(regex, '');
  
  return newString.length % 2 === 0;
};







let parenthesis2 = parenthesis(string);
let squareBrackets2 = squareBrackets(string);
let curlyBrackets2 = curlyBrackets(string);
let singleQuotes2 = singleQuotes(string);
let doubleQuotes2 = doubleQuotes(string);

console.log(parenthesis2);
console.log(squareBrackets2);
console.log(curlyBrackets2);
console.log(singleQuotes2);
console.log(doubleQuotes2);