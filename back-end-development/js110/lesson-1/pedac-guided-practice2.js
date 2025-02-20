/*
// Exercise

## Sort Strings by Most Adjacent Consonants
Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains.
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
  - The original string from the original array should be in the new array
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
  - Layers of blocks
  - Order of layers is important
  - Each layer, starting from the top starts from one and increases by one going down (e.g. 1, 2, 3, etc.)
  - Each layer requires a number of blocks equal to the layer number squared
  - Use nested arrays with each nested array representing one layer
    - [
        ['x'],
        ['x', 'x', 'x', 'x'],
        ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
        ...
      ]

  - Array
























*/




































































































































