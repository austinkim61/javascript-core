/*
// Exercise

## Sort Strings by Most Adjacent Consonants
Given an array of strings, return a newString where the strings are sorted to the highest number of adjacent consonants a particular string contains.
If two strings contain the same highest number of adjacent consonants, they should retain their original order in relation to each other.
Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

The letters 'y' and 'w' should be treated as consonants.





# Step 1
## P: Understand the Problem

Input: array of strings
Output: array of sorted strings according to the highest number of adjacent consonants.

Explicit rules:
  - Strings must be sorted from highest number of adjacent consonants
  - Retain original order in relation to each other if number of adjacent consonants is the same between two or more strings
  - 'y' and 'w' are treated as consonants
  - Adjacent consonants are next to each other
  - Spaces should be ignored (consonants with a space in between count as being adjacent)

Implicit rules: 
  - Strings can contain multiple words
  - Each element in an array should be a string from the original array
  - The original string from the original array should be in the newString
  - Single consonants in a string do not affect sort order in comparison to strings with no consonants
  - Only adjacent consonants affect sort order

Questions
  - Do strings always contain multiple words?
  - Is lower case or upper case important?
  - Should it be sorted from highest to lowest or lowest to highest?
  - Can the string be empty?
  - Can there be no adjacent consonants?
  - How should non-letters be treated? Should they be counted or ignored?
  - Can an element in the array is undefined?
  - Can there be more than one space in between consonants?
  - Can there be an empty array?
  - Can the input be something other than an array? Such as just a string?
  - Can there be nested arrays? Should the contents of the entire nested array be counted or the strings within taken out?



# Step 2
## E: Examples and Test Cases
let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']



# Step 3
## D: Data Structures
  - Array
    - [ 'xxx', 'xx', 'xx']
  - Highest adjacent consonants first
  - unshift() method to add elements to beginning of an array
    - Have to work backwards from the given array
  - Possibly put the strings into an object first with the key being the string and value being the number of adjacent consonants
  - {
      'aa': 0,
      'baa': 0,
      'ccaa': 1,
      'qqaa': 1,
      'cccaa': 3,
      'ddaa': 2
    }



# Step 4
## A: Algorithms

- For each string in the input array, determine the highest number of adjacent consonants within that string
- Sort the input array based on the calculated highest number of consonants from step 1
- Return the sorted array


1. Declare and initialize an object "obj"
2. Start a loop

   For loop starting from index 0 until the last index position to iterate through given array of strings
     push into "obj":
       the string as the key and the highest number of adjacent consonants as the value [countMaxAdjacentConsonants]
     increment index by 1
   return the "obj"

3. Declare and initialize an array "array"
4. Start a loop
   
   For loop to push each key value pair as a nested array in an array
   function to sort the "array"
   return the "array"


5.  Sub-algorithm - countMaxAdjacentConsonants
    ## P: Understand the Problem
    Input: string
    Output: integer representing the highest number of adjacent consonants

    ## E: Examples and Test Cases
    console.log(countMaxAdjacentConsonants('dddaa')); // 3
    console.log(countMaxAdjacentConsonants('ccaa'));  // 2
    console.log(countMaxAdjacentConsonants('baa'));   // 0
    console.log(countMaxAdjacentConsonants('aa'));    // 0

    ## D: Data Structures
    string

    ## Sub-Algorithm
      - Remove spaces from the input string
      - Initialize a count to 0
      - Initialize a temporary string to an empty string
      - Iterate through the input string - For each letter:

        - If the letter is a consonant:
          - Concatenate it to the temporary string
        - If the letter is a vowel:
          - If the temporary string has a length greater than 1
            AND the temporary string length is greater than the current count:
              - Set the count to the length of the temporary string
          - Reset the temporary string to an empty string

      - Return the count


# Step 5
## C: Implementing a Solution in Code 
*/






// function countMaxAdjacentConsonants(string) {
//   let newString = string.replaceAll(" ", "");
//   let count = 0;
//   let tempString = "";
//   let regex = /[aeiou]/i;

//   for (let i = 0; i < newString.length; i++) {
//     if (!newString[i].match(regex)) {
//       tempString = tempString.concat(newString[i]);
//       count = tempString.length;
//     } else if (newString[i].match(regex)) {
//       if ((tempString.length > 1) && (tempString.length > count)) {
//         count = tempString.length;
//       }
//       tempString = "";
//     }
//   }
//   return count;
// }

// function sortStringsByConsonants(list) {
//   let array = [];
//   let sorted = [];

//   for (let i = 0; i < list.length; i++) {
//     array.push([list[i], countMaxAdjacentConsonants(list[i])])
//   }
//   array.sort((a, b) => b[1] - a[1]);

//   array.forEach((element) => sorted.push(element[0]));
  
//   return sorted;
// }

// let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
// console.log(sortStringsByConsonants(list1));
// // ['dddaa', 'ccaa', 'aa', 'baa']

// let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
// console.log(sortStringsByConsonants(list2));
// // ['salt pan', 'can can', 'batman', 'toucan']

// let list3 = ['bar', 'car', 'far', 'jar'];
// console.log(sortStringsByConsonants(list3));
// // ['bar', 'car', 'far', 'jar']

// let list4 = ['day', 'week', 'month', 'year'];
// console.log(sortStringsByConsonants(list4));
// // ['month', 'day', 'week', 'year']









// Launchschool solution




function sortStringsByConsonants(strings) {
  let stringsCopy = strings.slice();

  let sortedStrings = stringsCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) -
           countMaxAdjacentConsonants(a);
  });

  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');

  let count = 0;
  let tempStr = '';

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempStr += letter;
      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
    } else {
      tempStr = '';
    }
  }
  
  return count;
}


let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']








