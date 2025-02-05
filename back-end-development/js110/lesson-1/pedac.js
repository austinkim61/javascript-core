// PROBLEM:

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// Test Cases:

// changeMe("We will meet at noon") === "We will meet at NOON"
// changeMe("No palindromes here") === "No palindromes here"
// changeMe("") === ""
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"

// QUESTIONS
// How to return? Side effect in the function via console.log or return the value?
// Can just string inputs be assumed or can it take strings from arrays?
// Can it take keys from objects?
// Any guard clause? (e.g. typeof is not a string) continue iterating over an array?
// Are palindromes case sensitive?
// Lowercase non-palindromes? (probably not because of 4th test case)

// INFORMAL PSEUDOCODE
// input: string
// output: string (not the same object)
// rules:
//      Explicit requirements:
//        - every palindrome in the string must be converted to
//          uppercase. (Reminder: a palindrome is a word that reads
//          the same forwards and backward).
//        - Palindromes are case sensitive ("Dad" is not a palindrome, but
//          "dad" is.)

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty string













// EXERCISE




// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes and 2 or more characters long.
// Consider palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]

// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]

// console.log(palindromeSubstrings("palindrome"))
// should log: []

// console.log(palindromeSubstrings(""))
// should log: []


// QUESTIONS 
// does the function take only string arguments?
// does the function take multiple arguments via the spread syntax?
// can the function take array or number arguments?
// are there any guard clauses required?
// if there is a sentence, how should the substrings be separated? with the spaces or remove the spaces?
// should the array be declared in the global scope?

// INFORMAL PSEUDOCODE
// input: string
// output: array of substrings
// rules:
//      Explicit requirements:
//        - return only substrings which are palindromes and 2 or more characters
//        - function return must be an array
//        - palindromes are case sensitive ("Aa" is not a palindrome but "aa" is)
//        - iterate starting from the beginning
//        - function takes only one argument
//        - function returns a value and no side effect (declare the variable for the array within the function)
//        - array must be mutated as there is iteration

//      Implicit requirements:
//        - if the string is empty, return an empty array
//        - if there is no palindrome, return an empty array


// PALINDROMESUBSTRINGS
// ====================

// Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array


// function palindromeSubstrings(str) {
//   let result = [];
//   let substringsArr = substrings(str);

//   substringsArr.forEach(substring => {
//     if (isPalindrome(substring)) {
//       result.push(substring);
//     }
//   });

//   return result;
// }











// SUBSTRINGS
// ==========

// HIGH-LEVEL ALGORITHM - SUBSTRINGS
//  for each starting index from 0 through the next to last index position
//    for each substring length from 2 until there are no substrings of that length
//      extract the substring of the indicated length starting at the indicated index position
//    end of inner loop
//  end of outer loop

// COMPLETE ALGORITHM - SUBSTRINGS
// - create an empty array called `result` that will contain all required substrings
// - create a `startingIndex` variable (value `0`) for the starting index of a substring
// - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array


// Formal Pseudocode - substrings
// START

//   /* Given a string named `string` */

//   SET result = []
//   SET startingIndex = 0

//   WHILE startingIndex <= length of string - 2
//     SET numChars = 2
//     WHILE numChars <= length of string - startingIndex
//       SET substring = numChars characters from string starting at index startingIndex
//       append substring to result array
//       SET numChars = numChars + 1

//     SET startingIndex = startingIndex + 1
//   RETURN result

// END


// function substrings(str) {
//   let result = [];
//   let startingIndex = 0;

//   while (startingIndex <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       // let substring = str.substring(startingIndex, startingIndex + numChars);
//       let substring = str.slice(startingIndex, startingIndex + numChars)
//       result.push(substring);
//       numChars++;
//     }
//     startingIndex++;
//   }
//   return result;
// }








// ISPALINDROME
// ============

// - Inside the `isPalindrome` function, check whether the string
//   value is equal to its reversed value


// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }








// COMPLETE INFORMAL PSEUDOCODE 
// input: string
// output: array of substrings
// rules: palindrome words should be case sensitive, meaning "abBA"
//        is not a palindrome

// ALGORITHM
// substrings function
// ===================
// - create an empty array called `result` that will contain all required substrings
// - create a `startingIndex` variable (value `0`) for the starting index of a substring
// - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array

// isPalindrome function
// =====================
// - Inside the `isPalindrome` function, check whether the string
//   value is equal to its reversed value

// palindromeSubstrings function
// =============================
// - declare a `result` variable and initialize it to an empty array
// - create an array named `substrArray` that contains all of the
//   substrings of the input string that are at least 2 characters long.
// - loop through the words in the `substrArray` array.
//    - if the word is a palindrome, append it to the `result` array
// - return the `result` array





















function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      // let substring = str.substring(startingIndex, startingIndex + numChars);
      let substring = str.slice(startingIndex, startingIndex + numChars)
      result.push(substring);
      numChars++;
    }
    startingIndex++;
  }
  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));    