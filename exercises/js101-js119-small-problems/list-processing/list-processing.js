// 1 - Sum Of Digits
// function sum(integer) {
//   return integer.toString().split('').reduce((acc, currentValue) => acc + Number(currentValue), 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45





// 2 - Alphabetical Numbers
// const numbers = {
//   0: 'zero',
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
//   5: 'five',
//   6: 'six',
//   7: 'seven',
//   8: 'eight',
//   9: 'nine',
//   10: 'ten',
//   11: 'eleven',
//   12: 'twelve',
//   13: 'thirteen',
//   14: 'fourteen',
//   15: 'fifteen',
//   16: 'sixteen',
//   17: 'seventeen',
//   18: 'eighteen',
//   19: 'nineteen'
// };

// function alphabeticNumberSort(array) {

//   return array.map(x => numbers[x]).sort().map(x => Number(Object.entries(numbers).find(([key, value]) => value === x )[0]));

// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]



// Launch School Solution
// const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
//   'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//   'twelve', 'thirteen', 'fourteen', 'fifteen',
//   'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function wordSort(num1, num2) {
//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//     return 1;
//   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function alphabeticNumberSort(array) {
//   return [...array].sort(wordSort);
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])); 
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Further Exploration

// const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
//   'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//   'twelve', 'thirteen', 'fourteen', 'fifteen',
//   'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function alphabeticNumberSort(array) {
//   return [...array].sort(function(a, b) {
//     if (NUMBER_WORDS[a] > NUMBER_WORDS[b]) {
//       return 1;
//     } else if (NUMBER_WORDS[a] < NUMBER_WORDS[b]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])); 
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]





// 3 - Multiply All Pairs
// function multiplyAllPairs(arr1, arr2) {
//   let newArray = [];

//   arr1.forEach(num1 => arr2.forEach(num2 => newArray.push(num1 * num2)));

//   return newArray.sort((a, b) => a - b);
  
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]





// 4 - Leading Substrings
// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let i = 1; i <= string.length; i++) {
//     substrings.push(string.substring(0, i));
//   }
//   return substrings;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// Further Exploration
// function leadingSubstrings(string) {
//   return string.split('').reduce((acc, elem, index) => [...acc, string.slice(0, index + 1)], []);
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// function leadingSubstrings(string) {
//   return string.split('').map((elem, index) => string.slice(0, index + 1));

// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// function leadingSubstrings(string) { // ['a', 'b', 'c']
//   let array = [];
//   string.split('').filter((_, index) => {
//     array.push(string.slice(0, index + 1));
//   });

//   return array;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]





// 5 - All Substrings
// function substrings(string) { // 'abcde'
//   let substrings = [];
//   for (let index = 0; index < string.length; index++) {
//     for (let j = index + 1; j <= string.length; j++) {
//       substrings.push(string.slice(index, j));
//     }
//   }

//   return substrings;  
// }

// console.log(substrings('abcde'));

// returns
/* [ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/



// Launch School Solution
// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }

//   return substrings;
// }

// console.log(substrings('abcde'));

// returns
/* [ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/

// Further Exploration
// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   return substrings;
// }

// function leadingSubstrings(string) {
//   return string.split('').reduce((acc, elem, index) => [...acc, string.slice(0, index + 1)], []);
// }

// console.log(substrings('abcde'));


// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   return substrings;
// }

// function leadingSubstrings(string) {
//   return string.split('').map((elem, index) => string.slice(0, index + 1));
// }

// console.log(substrings('abcde'));


// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   return substrings;
// }

// function leadingSubstrings(string) {
//   let array = [];
//   string.split('').filter((_, index) => {
//     array.push(string.slice(0, index + 1));
//   });
//   return array;
// }

// console.log(substrings('abcde'));





// 6 - Palindromic Substrings
// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }
//   return substrings;
// }

// function isPalindrome(string) {
//   if (string.length === 1) {
//     return false;
//   } else if (string === string.split('').reverse().join('')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]
// console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]





// 7 - Sum of Sums
// function sumOfSums(array) {
//   return array.reduce((acc, _, index) => Number(acc) + Number(array.slice(0, index + 1).reduce((acc, elem) => Number(acc) + Number(elem), 0)), []);  
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35



// Launch School Solution
// function sumOfSums(numbers) {
//   return numbers
//     .map((_, idx) =>
//       numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
//     )
//     .reduce((sum, value) => sum + value);
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35





// 8 - Grocery List
// function buyFruit(array) {
//   return array.map(([fruit, num]) => [...Array(num)].fill(fruit)).flat();  
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]



// Launch School Solution
// function buyFruit(fruitsList) {
//   return fruitsList
//     .map(fruit => repeat(fruit))
//     .reduce((groceryList, fruit) => groceryList.concat(fruit));
// }

// function repeat(fruitAndQuantity) {
//   let result = [];
//   let fruit = fruitAndQuantity[0];
//   let quantity = fruitAndQuantity[1];

//   for (let num = 0; num < quantity; num += 1) {
//     result.push(fruit);
//   }
//   // console.log(result);

//   return result;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]




// 9 - Inventory Item Transactions
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//   { id: 105, movement: 'in',  quantity: 10 },
//   { id: 102, movement: 'out', quantity: 17 },
//   { id: 101, movement: 'in',  quantity: 12 },
//   { id: 103, movement: 'out', quantity: 20 },
//   { id: 102, movement: 'out', quantity: 15 },
//   { id: 105, movement: 'in',  quantity: 25 },
//   { id: 101, movement: 'out', quantity: 18 },
//   { id: 102, movement: 'in',  quantity: 22 },
//   { id: 103, movement: 'out', quantity: 15 }, ];

// function transactionsFor(itemID, transactions) {
//   return transactions.filter(item => item['id'] === itemID);
// }

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]





// 10 - Inventory Item Availability
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//   { id: 105, movement: 'in',  quantity: 10 },
//   { id: 102, movement: 'out', quantity: 17 },
//   { id: 101, movement: 'in',  quantity: 12 },
//   { id: 103, movement: 'out', quantity: 20 },
//   { id: 102, movement: 'out', quantity: 15 },
//   { id: 105, movement: 'in',  quantity: 25 },
//   { id: 101, movement: 'out', quantity: 18 },
//   { id: 102, movement: 'in',  quantity: 22 },
//   { id: 103, movement: 'out', quantity: 15 }, ];

// function isItemAvailable(itemID, transactions) {
//   let array = transactionsFor(itemID, transactions);
//   let total = 0;

//   array.forEach(item => item.movement === 'in' ? total += item.quantity : total -= item.quantity);

//   return total > 0;
// }

// function transactionsFor(itemID, transactions) {
//   return transactions.filter(item => item.id === itemID);
// }

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(103, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true



// Launch School Solution
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//   { id: 105, movement: 'in',  quantity: 10 },
//   { id: 102, movement: 'out', quantity: 17 },
//   { id: 101, movement: 'in',  quantity: 12 },
//   { id: 103, movement: 'out', quantity: 20 },
//   { id: 102, movement: 'out', quantity: 15 },
//   { id: 105, movement: 'in',  quantity: 25 },
//   { id: 101, movement: 'out', quantity: 18 },
//   { id: 102, movement: 'in',  quantity: 22 },
//   { id: 103, movement: 'out', quantity: 15 }, ];

// function isItemAvailable(item, transactions) {
//   let quantity = transactionsFor(item, transactions).reduce((sum, transaction) => {
//     if (transaction.movement === "in") {
//       return sum + transaction.quantity;
//     } else {
//       return sum - transaction.quantity;
//     }
//   }, 0);
//   return quantity > 0;
// }

// function transactionsFor(inventoryItem, transactions) {
//   return transactions.filter(inventory => inventory.id === inventoryItem);
// }

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(103, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true