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




































// Video 3 - Problem 1










// Video 3 - Problem 2













// Video 4 - Problem 1










// Video 4 - Problem 2





























































































































