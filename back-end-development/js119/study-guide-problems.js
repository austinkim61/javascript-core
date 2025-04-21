// Video 1 - Problem 1
// create a function that takes a positive integer number and returns the next bigger number formed by the same digits

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be compused using those digits, return -1

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

/*
PEDAC
P - understood
E - examples given
A/D:
 - number as argument
 - console.log checks for true so return value must be the next bigger number by the same digits or -1
 - make an array of each of the numbers by converting to string first
  - will have to convert to number after for comparison
  - sort method could be used
 - return -1 if array length = 1 or the number is at the end
 - for loop
 - comparison
*/

// function nextBiggerNum(num) {
//   // make a new array that has every combination of the numbers
//   let str = num.toString();
//   let arr = str.split('');
//   let newArr = arr.map(num => num);

//   if (arr.length === 1) {
//     return -1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= (arr[i + 1])) {
//       continue;
//     } else if (arr[i] < (arr[i + 1])) {
//       break;
//     }
//     return -1;
//   }

//   for (let i = 1; i < newArr.length; i++) {

//     for (let j = newArr.length - 1; j > 0; j--) { // starts at index 4
//       [newArr[j - 1], newArr[j]] = [newArr[j], newArr[j - 1]];
//       // console.log(newArr);
//       if (num < Number(newArr.join(''))) {
//         return Number(newArr.join(''));
//       }
//     }

//   }

// }

// console.log(nextBiggerNum(9) === -1); // true
// console.log(nextBiggerNum(12) === 21); // true
// console.log(nextBiggerNum(513) === 531); // true
// console.log(nextBiggerNum(2017) === 2071); // true
// console.log(nextBiggerNum(111) === -1); // true
// console.log(nextBiggerNum(531) === -1); // true
// console.log(nextBiggerNum(123456789) === 123456798); // true





// Alternative
// create a function that takes a positive integer number and returns the next bigger number formed by the same digits

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be compused using those digits, return -1

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
/*


/*
Problem
  - Above
Examples
  - Given
Data/Algorithm
  - Input: number
  - Output: number (next highest)
  - Rules:
    - single digit returns -1
    - no next highest number returns -1

  - split number into an array
  - if single digit (array length = 1), return -1
  - if leftmost number > rightmost for each case, return - 1
    - if number === number.sort((a,b) => b - a) for highest to lowest
  - all other cases, rotate rightmost digit to the left and compare
    - then rotate second rightmost digit

abcde
24443

  - outer for loop (i = array.length; i > 1; i--) // (5, )
    - inner for loop (j = array.length; j >= array.length - 2; j--)
      - switch d and e => abced
      - switch c and e => abecd
      - switch b and e => abecd
      - switch a and e => abecd
      - 4 iterations, array length 5
      - at index:
        - [3, 4] = [4, 3]
        - [j - 2, j - 1] = [j - 1, j - 2] // j = 5
        - [2, 3] = [3, 2]
        - [j - 2, j - 1] = [j - 1, j - 2] // j = 4
        - [1, 2] = [2, 1] // j = 3
        - [0, 1] = [1, 0] // j = 2

Code
*/

// function nextBiggerNum(num) {
//   let arr = num.toString().split('');
//   let arrSortedHighToLow = arr.map(num => num);
//   arrSortedHighToLow = arrSortedHighToLow.sort((a, b) => {
//     a = Number(a);
//     b = Number(b);
//     return b - a;
//   });
//   let arr2 = arr.splice(0);

//   let sortedNumber = Number(arrSortedHighToLow.join(''));

//   if (arr.length === 1) {
//     return -1;
//   } else if (sortedNumber === num) {
//     return -1;
//   }

//   for (let i = arr2.length; i > 1; i --) {
//     for (let j = arr2.length; j >= (arr2.length - 2); j--) {
//       [arr2[j - 2], arr2[j - 1]] = [arr2[j - 1], arr2[j - 2]];
//       if (Number(arr2.join('')) > num) {
//         return Number(arr2.join(''));
//       }
//     }
//   }

// }

// console.log(nextBiggerNum(9) === -1); // true
// console.log(nextBiggerNum(12) === 21); // true
// console.log(nextBiggerNum(513) === 531); // true
// console.log(nextBiggerNum(2017) === 2071); // true
// console.log(nextBiggerNum(111) === -1); // true
// console.log(nextBiggerNum(531) === -1); // true
// console.log(nextBiggerNum(123456789) === 123456798); // true





// Video 1 - Problem 2
/*
Write function scramble (str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise return false.

For Example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true
str1 is 'cedewarasossoqqyt' and str2 is 'codewars' the output should return true
str1 is 'katas' and str2 is 'steak' the output should return false
 */

/*
Problem
  - str1 characters must be able to be rearranged to form str2 to return true
  - if it cannot be rearranged, return false
  - questions:
    - what about for empty strings or missing arguments?
Examples below
Data/Algorithm
  - input is 2 strings
  - output is true or false
    - explicit rules:
      - character can only match once
    - implicit rules:
      - if empty str2, return false
  - turn str1 into array with split('') method
  - for loop to iterate on str2
    - if character is in str1, remove character from the array
      - how to remove the character in array if not iterating over it?
        - indexOf and then splice(index, 1)
    - if character is not in array, automatically return false


Code
*/
// function scramble(str1, str2) {
//   let arr = str1.split('');
//   // console.log(arr);

//   if (str2 === '') {
//     return false;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     if (arr.some(char => char === str2[i])) { // if true remove that
//       // console.log(arr.indexOf(str2[i]));
//       arr.splice(arr.indexOf(str2[i]), 1);
//       // console.log(arr);
//     } else { // if the array doesn't have the character
//       return false;
//     }
//   }

//   return true;

// }

// console.log(scramble('javaass', 'jjss') === false); // true
// console.log(scramble('rkqodlw', 'world') === true); // true
// console.log(scramble('cedewaraaossoqqyt', 'codewars') === true); // true
// console.log(scramble('katas', 'steak') === false); // true
// console.log(scramble('scriptjava', 'javascript') === true); // true
// console.log(scramble('scriptingjava', 'javascript') === true); // true





// Video 2 - Problem 1
/*
Given a non-empty string, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercaes English letters only.

Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:
Input: "aba"
Output: False
*/

/*
Problem
  - can substring of a string be copied and pasted multiple times to make the original string
Examples
  - given
Data/Algorithm
  - multiple copies, slice(0, x)
    - repeat multiple times but length equal to original string length
  - check for strict equality
Code
*/

// function repeatedSubstringPattern(string) {

//   for (let i = 0; i < string.length; i++) {
//     let subString = string.slice(0, i);
//     // console.log(subString);
//     let multiplier = string.length / subString.length;

//     if ((string.length % subString.length) !== 0) { // 5%1=0, 5%5=0
//       continue;
//     } else {
//       let newString = subString.repeat(multiplier);
//       if (newString === string) {
//         return true;
//       }
//     }

//   }

//   return false;

// }

// console.log(repeatedSubstringPattern("abab") === true);
// console.log(repeatedSubstringPattern("aba") === false);
// console.log(repeatedSubstringPattern("aabaaba") === false);
// console.log(repeatedSubstringPattern("abaababaab") === true);
// console.log(repeatedSubstringPattern("abcabcabcabc") === true);





// Video 2 - Problem 2
// function commonChars(array) {
//   let resultArray = [];
//   let firstWord = array[0].split('');

//   let newWord = [];

//   firstWord.forEach(letter => {
//     if (!newWord.includes(letter)) {
//       newWord.push(letter);
//     }
//   });



//   newWord.forEach(character => {
//     let char = character;
//     let charCount = undefined;
//     let newString = '';

//     for (let i = 0; i < array.length; i++) {
//       let word = array[i].split('');

//       let currentCharCount = word.filter(element => element === char).length;

//       if ((charCount === undefined) || (currentCharCount < charCount)) {
//         charCount = currentCharCount;
//       }

//     }

//     if (charCount !== 0) {
//       newString = char.repeat(charCount);
//       resultArray.push(newString.split(''));
//     }

//   });

//   return resultArray.flat();
// }

// console.log(commonChars(['a', 'b'])); // []
// console.log(commonChars(['ab', 'bc'])); // ['b']
// console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
// console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
// console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []



// Alternate
// function commonChars(array) {
//   let nestedArray = array.map(string => string.split(''));
//   let flatArray = nestedArray.flat();
//   let uniqueLetters = [];
//   let resultArray = [];

//   flatArray.forEach(letter => {
//     if (!uniqueLetters.includes(letter)) {
//       uniqueLetters.push(letter);
//     }
//   });

//   for (let i = 0; i < uniqueLetters.length; i++) {
//     let count = flatArray.length;

//     nestedArray.forEach(element => {
//       let currentCount = element.filter(char => char === uniqueLetters[i]).length;
//       if (currentCount < count) {
//         count = currentCount;
//       }
//     });

//     while (count > 0) {
//       resultArray.push(uniqueLetters[i]);
//       count--;
//     }
//   }
//   return resultArray;
// }

// console.log(commonChars(['a', 'b'])); // []
// console.log(commonChars(['ab', 'bc'])); // ['b']
// console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
// console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
// console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []





// Video 3 - Problem 1
/*
Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false, if you do not.
We only care about substrings that are longer than one letter.
*/

/*
Problem
- find substring that appears in both strings that are longer than 1 letter
Examples
- below
- notes:
  - empty returns false
  - case does not matter
Data/Algorithm
- input is two strings
- output is true or false

Notes
- string.slice(0, 2) // => string.slice(i, i + 2)
- string.includes method

for loop for string1 length
  - for length of 4 need to iterate 3 times
  - i = 0; i < string.length - 1; i++

  newString = string.slice(i, i + 2)

  if string2.includes(newString)
    -return true


return false;
Code
*/

// function substringTest(str1, str2) {
//   for (let i = 0; i < str1.length - 1; i++) {
//     let subString = str1.slice(i, i + 2).toLowerCase();

//     if (str2.toLowerCase().includes(subString)) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(substringTest('Something', 'Fun') === false); // true
// console.log(substringTest('Something', 'Home') === true); // true
// console.log(substringTest('Something', 'Fun') === false); // true
// console.log(substringTest('Something', '') === false); // true
// console.log(substringTest('', 'Something') === false); // true
// console.log(substringTest('BANANA', 'banana') === true); // true
// console.log(substringTest('test', '111t') === false); // true
// console.log(substringTest('', '') === false); // true
// console.log(substringTest('1234567', '541265') === true); // true
// console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true); // true





// Video 4 - Problem 1
/*
Write a function to find the longest common prefix string amongst an array of strings

If there is no common prefix, return an empty string ''

Example 1:
Input: ['flower', 'flow', 'flight']
Output: 'fl'

Example 2:
Input: ['dog', 'racecar', 'car']
Output: ''
Explanation There is no common prefix among the input strings

Note:
ALL given inputs are in lowercase letters a-z
*/

/*
Problem
  - find longest common prefix amonst all strings in an array

Examples
  - below
Data/Algorithm
  - Input: array
  - Output string

  - Notes
    - sort first from shortest to longest
    - slice(0, i) method


let resultString = ''

sortedArray = array.sort((a,b) => {
  a = a.length
  b = b.length
  return a - b
})

for loop using sortedArray[0] as the start
  - let currentString = slice(0, i) until the end
  - check if each word in the array has this prefix as the start
    - if it does, resultString = currentString

return resultString;

Code
*/


// function commonPrefix(array) {
//   let resultString = '';
//   let sortedArray = array.sort((a, b) => {
//     a = a.length;
//     b = b.length;
//     return a - b;
//   });

//   for (let i = 0; i < sortedArray[0].length; i++) {
//     let currentString = sortedArray[0].slice(0, i + 1);
//     if (array.every(word => word.slice(0, i + 1).includes(currentString))) {
//       resultString = currentString;
//     }
//   }
//   return resultString;
// }

// console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
// console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
// console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'); // true
// console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
// console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true

// console.log(commonPrefix(['flower', 'flow', 'flifloght']) === 'flo'); // true



// Video 4 - Problem 2
/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1

For example:

Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
Your function will return the index 3 because at the 3rd position of the array, the sum of left side of index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6

Another one:
You are given the array [-20, 10, -80, 10, 10, 15, 35]
At index 0 the left side is []
The right side is is [10, -80, 10, 10, 15, 35]
They are both equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index - is the place where the left side and right side are equal
*/

/*
Problem
  - Find index where sum of integers to the left of N is equal to the sum to the right of N
  - At index 0, the sum on the left is 0
Examples

Data/Algorithm
  - Input: array
  - Output: number

  - Notes:
    - At index 0, the left sum is 0


let leftSum = 0;
let rightSum = 0


first check if reduce method on array.slice(1) === 0
  - if yes, return 0


[1, 2, 3, 2, 1]
for loop (let i = 1; i < array.length; i++)
  - let leftArray = array.slice(0, i) // [1]
  - let rightArray = array.slice(i + 1) // [3, 2, 1]

  - leftSum = leftArray.reduce((acc, elem) => acc + elem, 0);
  - rightSum = rightArray.reduce((acc, elem) => acc + elem, 0);

  - if leftSum === rightSum
    - return i;



return -1


Code
*/
// function findEvenIndex(array) {
//   let leftSum;
//   let rightSum;

//   if (array.slice(1).reduce((acc, elem) => acc + elem, 0) === 0) {
//     return 0;
//   }

//   for (let i = 1; i < array.length; i++) {
//     let leftArray = array.slice(0, i);
//     let rightArray = array.slice(i + 1);
//     let leftSum = leftArray.reduce((acc, elem) => acc + elem, 0);
//     let rightSum = rightArray.reduce((acc, elem) => acc + elem, 0);
//     // console.log(leftSum);
//     // console.log(rightSum);
//     if (leftSum === rightSum) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
// console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
// console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true