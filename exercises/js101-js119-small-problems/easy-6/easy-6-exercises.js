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
function sequence(num1, num2) {
  
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []





// 7 - Reverse It (Part 1)
// function reverseSentence(string) {
  
// }

// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"





// 8 - Reverse It (Part 2)
// function reverseWords(string) {
  
// }

// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"





// 9 - Reversed Arrays
// function reverse(array) {
  
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
  
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);