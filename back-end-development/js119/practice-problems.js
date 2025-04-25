// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);


// Problem 1
/*
- input: array
- output: array
- rules: if a number occurs multiple times, it should only be counted once

D/A
- iterate over every number in array
  - possibly map method
  - return an array of how many numbers are smaller than the iterated-over number
    - set a counter and make sure no duplicates


  - array of only uniques values
    - let tempArr = []
    - push array if !tempArr.includes(element)
  - map original array
    - filter method
*/
// function smallerNumbersThanCurrent(array) {
//   let tempArr = [];
//   array.forEach(num => {
//     if (!tempArr.includes(num)) {
//       tempArr.push(num);
//     }
//   });

//   return array.map(num => {
//     return tempArr.filter(element => element < num).length;
//   });
// }

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
// p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
// p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
// p(eq(smallerNumbersThanCurrent([1]), [0]));

// let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
// let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
// p(eq(smallerNumbersThanCurrent(myArray), result));





// Problem 2
/*
- input: array of integers
- output: the minimum sum of 5 consecutive numbers in the array
- rules: if array contains fewer than 5 elements, return null

D/A
- if (array.length < 5) return null

- rest of code:
  - let minimum;

  - for loop from 0 until there can no longer be 5 numbers to compare to
    - if array length 10 then formula is:
      - for (let i = 0; i <= array.length - 5; i++)
        - array.slice(i, i + 5) => (0, 5)
        - Math.sum(array)
          - if current minimum is less than minimum, minimum = current minimum
          - if (currentMinimum < minimum || minimum === undefined)
*/
// function minimumSum(array) {
//   let minimum;
//   if (array.length < 5) {
//     return null;
//   }

//   for (let i = 0; i <= array.length - 5; i++) {
//     let tempArr = array.slice(i, i + 5);
//     // p(tempArr);
//     let currentMinimum = tempArr.reduce((acc, current) => acc + current, 0);
//     // (currentMinimum < minimum || minimum === undefined) ? minimum = currentMinimum : minimum;
//     if (currentMinimum < minimum || minimum === undefined) {
//       minimum = currentMinimum;
//     }
//   }
//   return minimum;
// }

// const p = console.log;
// p(minimumSum([1, 2, 3, 4]) === null);
// p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);





// Problem 3
/*
- input: string
- output: string
- rules: every second character in every third word to be converted to uppercase

D/A
  - use split(' ') method

  - for loop
    - start at index 2 and increment at +3 levels
    - length < array.length

      - split method again
        - map method (letter, index)
          - if index % 2 !== 0
            - letter.toUpperCase()
*/
// function toWeirdCase(string) {
//   let array = string.split(' ');
//   let nestedArray = array.map(word => word.split(''));

//   for (let i = 2; i < array.length; i += 3) {
//     nestedArray[i] = nestedArray[i].map((letter, index) => {
//       if ((index % 2) !== 0) {
//         return letter.toUpperCase();
//       } else {
//         return letter;
//       }
//     });
//   }

//   return nestedArray.map(element => element.join('')).join(' ');
// }

// let original = 'Lorem Ipsum is simply dummy text of the printing world';
// let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
// p(toWeirdCase(original) === expected);

// original = 'It is a long established fact that a reader will be distracted';
// expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
// p(toWeirdCase(original) === expected);

// p(toWeirdCase('aaA bB c') === 'aaA bB c');

// original = "Mary Poppins' favorite word is " +
//            "supercalifragilisticexpialidocious";
// expected = "Mary Poppins' fAvOrItE word is " +
//            "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
// p(toWeirdCase(original) === expected);





// Problem 4
/*
- input: array of integers
- output: array of two numbers that are closest together in value
- rules:
  - the two numbers must be compared and be closest together in value
  - if multiple pairs are equally close, return the pair that occurs first in the array

D/A
- let arr = [];
- let difference;
- do subtraction of numbers

- forEach method on input array to iterate over every number (firstNum, firstIndex)
  - forEach method on input array (secondNum, secondIndex)
    - if firstIndex === secondIndex, skip
    - let currentDifference = firstNum - secondNum;
    - if currentDifference < difference || difference = undefined
      - arr = [array[firstIndex], array[secondIndex]]
      - difference = currentDifference

return arr
*/
// function closestNumbers(array) {
//   let arr = [];
//   let difference;

//   array.forEach((firstNum, firstIndex) => {
//     array.forEach((secondNum, secondIndex) => {
//       if (firstIndex !== secondIndex) {
//         let currentDifference = Math.abs(firstNum - secondNum);
//         if ((currentDifference < difference) || (difference === undefined)) {
//           arr = [array[firstIndex], array[secondIndex]];
//           difference = currentDifference;
//         }
//       }
//     });
//   });

//   return arr;

// }

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
// p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
// p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));





// Problem 5
/*
- input: string
- output: character that occurs most often in the string (string)
- rules:
  - if multiple characters with the same greatest frequency occur, return the one that appears first
  - case insensitive

D/A
- convert string to array
- make all strings in the array lowercase

- declare count
- declare and initialize result to empty string ''
- if newCount > count, newCount = count
- use forEach method for iteration
- use filter method and .length
return result
*/
// function mostCommonChar(string) {
//   let count;
//   let result = '';
//   let array = string.toLowerCase().split('');

//   array.forEach(char => {
//     let newCount = array.filter(currentChar => currentChar === char).length;
//     if ((newCount > count) || (count === undefined)) {
//       count = newCount;
//       result = char;
//     }
//   });

//   return result;
// }

// const p = console.log;
// p(mostCommonChar('Hello World') === 'l');
// p(mostCommonChar('Mississippi') === 'i');
// p(mostCommonChar('Happy birthday!') === 'h');
// p(mostCommonChar('aaaaaAAAA') === 'a');

// let myStr = 'Peter Piper picked a peck of pickled peppers.';
// p(mostCommonChar(myStr) === 'p');

// myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
// p(mostCommonChar(myStr) === 'e');





// Problem 6
/*
- input: string
- output: hash in which keys represent the lowercase letters in the string and the values represent how often the corresponding letter occurs in the string
- rules:
  - empty string returns empty object
  - ignore non-lowercase
  - ignore non-alphabetic

D/A
- let obj = {};
- obj[key] = value
  - if undefined, then add and set to one

- let array = string.split('')
- array.forEach
  -if letter1 === letter1.toLowerCase()
    - add to object

- return obj
*/
// function countLetters(string) {
//   let obj = {};
//   let arr = string.split('');

//   arr.forEach(char => {
//     if (char === char.toLowerCase() && (char >= 'a' && char <= 'z')) {

//       // obj[char] ? obj[char] += 1 : (obj[char] = 1);
//       obj[char] = (obj[char] ?? 0)+ 1;
//     }
//   });

//   return obj;
// }

// const p = console.log;
// const objeq = function(obj1, obj2) {
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (! keys2.includes(key)) {
//       return false;
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
// p(objeq(countLetters('woebegone'), expected));

// expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
//             'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
// p(objeq(countLetters('lowercase/uppercase'), expected));

// expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
// p(objeq(countLetters('W. E. B. Du Bois'), expected));

// p(objeq(countLetters('x'), {'x': 1}));
// p(objeq(countLetters(''), {}));
// p(objeq(countLetters('!!!'), {}));





// Problem 7
/*
- input: array of integers
- output: the number of identical pairs
- rules:
  - if array is empty or contains exactly one value, return 0
  - additional pairs of same numbers count towards the total

D/A
- do not modify original array
- create sliced array 'slice'
  - have to splice at the index for 'slice'
- use indexOf and last indexOf


- count = 0;
- if array.length < 2 return count

- create sliced array

- forEach(num) method over original array
  - let firstIndex = slice.indexOf(num)
  - let lastIndex = slice.lastIndexOf(num)
  - if (firstIndex === -1) continue
  - if (firstIndex !== lastIndex) count++
    - slice.splice(lastIndex, 1)
    - slice.splice(firstIndex, 1)

- return count;
*/
// function pairs(array) {
//   let count = 0;
//   let slice = array.slice();

//   if (array.length < 2) {
//     return count;
//   }

//   array.forEach(num => {
//     let firstIndex = slice.indexOf(num);
//     let lastIndex = slice.lastIndexOf(num);
//     if ((firstIndex !== -1) && (firstIndex !== lastIndex)) {
//       count++
//       slice.splice(lastIndex, 1);
//       slice.splice(firstIndex, 1);
//     }
//   });

//   return count;
// }

// const p = console.log;
// p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
// p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
// p(pairs([]) === 0);
// p(pairs([23]) === 0);
// p(pairs([997, 997]) === 1);
// p(pairs([32, 32, 32]) === 1);
// p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);





// Problem 8
/*
- input: non-empty string
- output: length of longest vowel substring (aeiou)
- rules: has to be a, e, i, o, or u

D/A
- turn string to an array that is all lower case using split('')
- string of only vowels
- create an array of substrings
  - empty array at first
- let count = 0

- use push and slice method from 0 to end
  - use push slice method from 1 to end

- take array and make it into nested array using split('')
- filter method where everything in the array:
  - vowels.includes('char')
- forEach on the filtered array
  - if length of that filter array > count
    - count = new Length

- return count
*/
// function longestVowelSubstring(string) {
//   let arr = string.toLowerCase().split('');
//   let vowels = 'aeiou';
//   let count = 0;
//   let substrings = [];

//   for (let startIndex = 0; startIndex < arr.length; startIndex++) {
//     for (let endIndex = startIndex + 1; endIndex <= arr.length; endIndex++) {
//       substrings.push(arr.slice(startIndex, endIndex));
//     }
//   }

//   let filteredArray = substrings.filter(array => {
//     return array.every(char => vowels.includes(char));
//   });


//   filteredArray.forEach(element => {
//     if (element.length > count) {
//       count = element.length;
//     }
//   });

//   return count;

// }

// const p = console.log;
// p(longestVowelSubstring('cwm') === 0);
// p(longestVowelSubstring('many') === 1);
// p(longestVowelSubstring('launchschoolstudents') === 2);
// p(longestVowelSubstring('eau') === 3);
// p(longestVowelSubstring('beauteous') === 3);
// p(longestVowelSubstring('sequoia') === 4);
// p(longestVowelSubstring('miaoued') === 5);





// Problem 9
/*
- input: two string arguments
- output: number of times the second string occurs in the first string
- rules:
  - overlapping strings don't count
    - e.g. 'babab' contains 1 instance of 'bab'
  - second argument is never an empty string

D/A
let arr = str1.split('')
let secondStringLength = str2.length
let count = 0;
let i = 0;

while ((i + secondStringLength) < arr.length)
  - let slice = arr.slice(i, i + secondStringLength)

  - if slice.join('') === str2
    - count++
    - arr.splice(i, i + secondStringLength)
    - i = 0
  - else
    - i++

  - return count
*/
// function countSubstrings(str1, str2) {
//   let arr = str1.split('');
//   let secondStringLength = str2.length;
//   let count = 0;
//   let i = 0;

//   while ((i + secondStringLength) <= arr.length) {
//     let slice = arr.slice(i, i + secondStringLength);
//     // p(slice);
//     if (slice.join('') === str2) {
//       count++;
//       arr.splice(i, i + secondStringLength);
//       p(arr);
//       i = 0;
//     } else {
//       i++;
//     }
//   }

//   return count;
// }

// const p = console.log;
// p(countSubstrings('babab', 'bab') === 1);
// p(countSubstrings('babab', 'ba') === 2);
// p(countSubstrings('babab', 'b') === 3);
// p(countSubstrings('babab', 'x') === 0);
// p(countSubstrings('babab', 'x') === 0);
// p(countSubstrings('', 'x') === 0);
// p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
// p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
// p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);





// Problem 10
/*
- input: string of digits
- output: number of even-numbered substrings that can be formed
- rules:
  - 1432 will form these even numbered substrings:
    - 14, 1432, 4, 432, 32, 2

D/A
let arr = string.split('')
let substrings = []

let result = []
- at the end filter result to those where result.filter(num => Number(num) % 2 === 0).length

pushing substrings

outer for loop (let startIndex = 0; startIndex < array.length; startIndex++)
  - inner for loop (let endIndex = startIndex + 1; endIndex <= array.length; endIndex ++)
    - substrings.push(arr.slice(startIndex, endIndex))

return substrings.filter(num => Number(num) % 2 === 0).length
*/
// function evenSubstrings(string) {
//   let arr = string.split('');
//   let substrings = [];

//   for (let startIndex = 0; startIndex < arr.length; startIndex++) {
//     for (let endIndex = startIndex + 1; endIndex <= arr.length; endIndex++) {
//       substrings.push(arr.slice(startIndex, endIndex));
//     }
//   }

//   return substrings.map(element => Number(element
//     .join('')))
//     .filter(num => num % 2 === 0).length;
// }






// const p = console.log;
// p(evenSubstrings('1432') === 6);
// p(evenSubstrings('3145926') === 16);
// p(evenSubstrings('2718281') === 16);
// p(evenSubstrings('13579') === 0);
// p(evenSubstrings('143232') === 12);





// Problem 11
/*
- input: non-empty string
- output: array consisting of a string and an integer
- rules:
  - s === t * k
    - s is the string
    - t is the returned array
    - k is the integer component of the returned array
  - t and k should be the shortest possible substirng and the largest possible repeat count that satisfies this equation
  - string arguments always consister of lowercase alphabetic letters

D/A
- iterate over a string

- for loop (let i = 1; i < string.length; i++)
  - let multiplier = string.length / i
  - if multiplier % i !== 0, then continue

  - substring = string.slice(0, i)
  - if substring.repeat(multiplier) === string
    - return [substring, multiplier]
*/
// function repeatedSubstring(string) {
//   for (let i = 1; i <= string.length; i++) {
//     let multiplier = string.length / i;

//     if (string.length % multiplier !== 0) {
//       continue;
//     }

//     let substring = string.slice(0, i);
//     if (substring.repeat(multiplier) === string) {
//       return [substring, multiplier];
//     }
//   }
// }

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
// p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
// p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
// p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
// p(eq(repeatedSubstring('superduper'), ['superduper', 1]));





// Problem 12
/*
- input: string
- output: true if string is a pangram, false if not
- rules:
  - pangrams are sentences that contain every letter of the alphabet at least once
  - case insensitive

D/A

let obj = {}

iterate over string
- for loop (i = 0; i < string.length; i++)
  - if char >= 'a' && char <= 'z'
    - obj[char] = true

- let array = Object.keys(obj)
- array.length === 26 ? true : false
*/
// function isPangram(string) {
//   let obj = {};

//   for (let char of string) {
//     if ((char.toLowerCase()) >= 'a' && (char.toLowerCase() <= 'z')) {
//       obj[char.toLowerCase()] = true;
//     }
//   }

//   let arr = Object.keys(obj);

//   return arr.length === 26 ? true : false;

// }

// const p = console.log;
// p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
// p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
// p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

// let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
// p(isPangram(myStr) === true);





// Problem 13
/*
- input: two strings
- output: returns true if some portion of the characters in the first string can be rearranged to match the characters in the second, otherwise return false
- rules:
  - both strings contain only lowercase alphabetic characters
  - neither string will be empty

D/A
- create array of first string using split('')

- iterate over 2nd string
  - if char is in first string (indexOf)
    - remove from array (array.splice(indexOf, 1))
    - continue
  - else
    - return false

  - return true
*/
// function unscramble(str1, str2) {
//   let arr1 = str1.split('');

//   for (let i = 0; i < str2.length; i++) {
//     let indexOfChar = arr1.indexOf(str2[i]);

//     if (indexOfChar === - 1) {
//       return false;
//     } else {
//       arr1.splice(indexOfChar, 1);
//     }
//   }

//   return true;
// }

// const p = console.log;
// p(unscramble('ansucchlohlo', 'launchschool') === true);
// p(unscramble('phyarunstole', 'pythonrules') === true);
// p(unscramble('phyarunstola', 'pythonrules') === false);
// p(unscramble('boldface', 'coal') === true);





// Problem 14
/*
- input: single integer argument
- output: return sum of all multiples of 7 or 11 that are less than the argument
- rules:
  - if a number is a multipl of both 7 and 11 count it just once
  - if argument is negative, return 0

D/A
 - let arr = []

 - push all multiples of 7 that are below the input value into an array as long as that array does not include that item
 - push all multiples of 11 that are below the input value into an array as long as that array does not include that item
 - use reduce method on the array
*/
// function sevenEleven(num) {
//   const SEVEN = 7;
//   const ELEVEN = 11;

//   let newSeven = 7;
//   let newEleven = 11;

//   let resultArr = [];

//   while (newSeven < num) {
//     resultArr.push(newSeven);
//     newSeven += SEVEN;
//   }

//   while (newEleven < num) {
//     if (!resultArr.includes(newEleven)) {
//       resultArr.push(newEleven);
//     }
//     newEleven += ELEVEN;
//   }

//   return resultArr.reduce((acc, elem) => acc + elem, 0);
// }

// const p = console.log;
// p(sevenEleven(10) === 7);
// p(sevenEleven(11) === 7);
// p(sevenEleven(12) === 18);
// p(sevenEleven(25) === 75);
// p(sevenEleven(100) === 1153);
// p(sevenEleven(0) === 0);
// p(sevenEleven(-100) === 0);





// Problem 15
/*
- input: string argument of numeric digits
- output: greatest product of four consecutive digits in the string
- rules:
  - argument will always have more than four digits

D/A
let arr = string.split('')
let subArr = []

  - make substrings of 4 characters each
  - outer loop (i = 0; i <= arr.length - 4; i++)
    - inner loop (j = i + 1 + 4; j <= arr.length; j++)
      - subArr.push(arr.slice(i, j))

  - map()
    - Number(subArr.join(''))

  - forEach.reduce

  - sort b - a
  - return at index [0]
*/
// function greatestProduct(string) {
//   let arr = string.split('');
//   let subArr = [];

//   for (let i = 0; i <= (arr.length - 4); i++) {
//     subArr.push(arr.slice(i, i + 4));
//   }

//   return subArr.map(element => element
//     .reduce((acc, elem) => acc * elem, 1))
//     .sort((a, b) => a - b)[subArr.length - 1]

// }

// const p = console.log;
// p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
// p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
// p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
// p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6





// Problem 16
/*
- input: string
- output: the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string
- rules:
  - input string only contains alphanumeric characters
  - case insensitive

D/A
let uniqueChars = []
let count = 0

create array of unique characters

string.toLowerCase().split('').forEach(char => if uniqueChars doesn't have, then push)

- iterate over uniqueChars
  - if first indexOf and lastIndexOf string is the same
    - count ++

return count
*/
// function distinctMultiples(string) {
//   let uniqueChars = [];
//   let count = 0;
//   let lowerCaseString = string.toLowerCase();
//   lowerCaseString.toLowerCase().split('').forEach(char => {
//     if (!uniqueChars.includes(char)) {
//       uniqueChars.push(char);
//     }
//   });

//   uniqueChars.forEach(char => {
//     let first = lowerCaseString.indexOf(char);
//     let last = lowerCaseString.lastIndexOf(char);
//     if (first !== last) {
//       count++;
//     }
//   });

//   return count;
// }

// const p = console.log;
// p(distinctMultiples('xyz') === 0);              // (none)
// p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
// p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
// p(distinctMultiples('unununium') === 2);        // u, n
// p(distinctMultiples('multiplicity') === 3);     // l, t, i
// p(distinctMultiples('7657') === 1);             // 7
// p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
// p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5





// Problem 17
/*
- input: array of integers
- output: minimum integer value that can be appended to the array so the sum of
    all elements equal the closest prime number that is greater than the current sum of numbers
    - example: [1, 2, 3] sum to 6
      - nearest prime number greater than 6 is 7
      - return nearest prime number - sum of array
- rules:
  - array will always have at least 2 integers
  - all values in the array will be positive
  - there may be miltiple occurrences of the various numbers in the array



D/A
let sum = array.reduce

prime number loop (hardest part)

- if sum % 2 === 0
  - start of i is sum + 1
  - otherwise, start of i is sum + 2


loop for (let i = startOfI; i > 0; i += 2)
  - if (function(i) === true)
    - return num

  function(num) to check if prime

for loop (let i = 1; i < num; i += 2)
  - let count = 0
  - if count is > 2
    - return false
  - if num % i === 0
    - count++

  - return true

return nearest prime number - sum of array
*/
// function nearestPrimeSum(array) {
//   let sum = array.reduce((acc, elem) => acc + elem, 0);

//   let startOfI = 0;
//   sum % 2 === 0 ? (startOfI = sum + 1) : (startOfI = sum + 2);

//   for (let i = startOfI; i > 0; i += 2) {
//     if (checkPrime(i) === true) {
//       return (i - sum);
//     }
//   }

// }

// function checkPrime(num) { // num = 9
//   let count = 0;

//   for (let i = 1; i < num; i++) {
//     if ((num % i) === 0) {
//       count++;
//     }
//     if (count > 1) {
//       return false;
//     }
//   }

//   return true;
// }

// const p = console.log;
// p(nearestPrimeSum([1, 2, 3]) === 1);              // Nearest prime to 6 is 7
// p(nearestPrimeSum([5, 2]) === 4);                 // Nearest prime to 7 is 11
// p(nearestPrimeSum([1, 1, 1]) === 2);              // Nearest prime to 3 is 5
// p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5);       // Nearest prime to 32 is 37
// p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4); // Nearest prime to 163 is 167





// Problem 18
/*
- input: array of integers
- output: index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N
- rules:
  - if no possible combination, return -1
  - sum of numbers to left of index 0 is 0 and similarly for last index

D/A
let leftOfIndex = []
let rightOfIndex = []]
let leftSum = 0
let rightSum = 0

loop
  - let leftOfIndex = array.slice(0, i)
  - let rightOfIndex = array.slice(i, array.length)
  - let leftSum = leftOfIndex.reduce
  - let rightSum = rightOfIndex.reduce
  - if leftSum === rightSum
    - return index

return -1
*/
// function equalSumIndex(array) {

//   let leftOfIndex = [];
//   let rightOfIndex = [];
//   let leftSum = 0;
//   let rightSum = 0;

//   for (let i = 0; i < array.length; i++) {
//     leftOfIndex = array.slice(0, i);
//     rightOfIndex = array.slice(i + 1, array.length);

//     leftSum = leftOfIndex.reduce((acc, elem) => acc + elem, 0);
//     rightSum = rightOfIndex.reduce((acc, elem) => acc + elem, 0);

//     if (leftSum === rightSum) {
//       return i;
//     }
//   }
//   return -1;
// }

// const p = console.log;
// p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
// p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
// p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
// p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// // The following test case could return 0 or 3. Since we're
// // supposed to return the smallest correct index, the correct
// // return value is 0.
// p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);





// Problem 19
/*
- input: array of integers
- output: integer that appears an odd number of times
- rules:
  - there will always be exactly one such integer in the input array

D/A
use filter method and length % 2 !== 0
*/
// function oddFellow(array) {
//   for (let i = 0; i < array.length; i++) {
//     let length = array.filter(num => array[i] === num).length;
//     if (length % 2 === 1) {
//       return array[i];
//     }
//   }
// }

// const p = console.log;
// p(oddFellow([4]) === 4);
// p(oddFellow([7, 99, 7, 51, 99]) === 51);
// p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
// p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
// p(oddFellow([0, 0, 0]) === 0);





// Problem 20
/*
- input: array of numbers
- output: number in the array that differents from all the rest
- rules:
  - array will always contain at least 3 numbers
  - there will always be exactly one number that is different

D/A
- use indexOf and lastIndexOf
  - if indexOf and lastIndexOf is the same, return that number
*/
// function whatIsDifferent(array) {
//   for (let i = 0; i < array.length; i++) {
//     let first = array.indexOf(array[i]);
//     let last = array.lastIndexOf(array[i]);
//     if (first === last) {
//       return array[i];
//     }
//   }
// }

// const p = console.log;
// p(whatIsDifferent([0, 1, 0]) === 1);
// p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
// p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
// p(whatIsDifferent([3, 4, 4, 4]) === 3);
// p(whatIsDifferent([4, 4, 4, 3]) === 3);