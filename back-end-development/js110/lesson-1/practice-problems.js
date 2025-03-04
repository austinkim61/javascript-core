// Question 8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let obj = {};

// flintstones.forEach((name, index) => {
//   obj[name] = index;
// });

// console.log(obj);





// Question 9
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };
// let agesKeyValues = Object.entries(ages);
// let sumOfAges = 0;

// agesKeyValues.forEach(keyValue => {
//   let [ key, value ] = keyValue;
//   sumOfAges += value;
// });

// console.log(sumOfAges);



// Launch School Solution
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let sumOfAges = 0;

// Object.values(ages).forEach(age => sumOfAges += age);
// console.log(sumOfAges);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// console.log(Object.values(ages).reduce((sumOfAges, currentAge) => sumOfAges + currentAge, 0));





// Question 10
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// console.log(Object.values(ages).sort((a, b) => a - b)[0]);



// Launch School Solution
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let agesArray = Object.values(ages);
// console.log(Math.min(...agesArray));





// Question 11
// let statement = "The Flintstones Rock";
// let obj = {};

// let letters = statement.replaceAll(' ', '').split('');

// letters.forEach(letter => {
//   obj[letter] = 0;
// });

// letters.forEach(letter => {
//   obj[letter] += 1;
// })

// console.log(obj);



// let statement = "The Flintstones Rock";
// let obj = {};

// let letters = statement.replaceAll(' ', '').split('');

// letters.forEach(letter => {
//   obj[letter] = obj[letter] || 0;
//   obj[letter]++;
// });


// console.log(obj);





// Launch School Solution
// let statement = "The Flintstones Rock";
// let charsInStatement = statement.split('').filter(char => char !== ' ');
// let result = {};

// charsInStatement.forEach(char => {
//   result[char] = result[char] || 0;
//   result[char] += 1;
// });

// console.log(result);

// OR

// let statement = "The Flintstones Rock";
// let charsInStatement = statement.split('').filter(char => char !== ' ');
// let result = {};

// charsInStatement.forEach(char => {
//   if (Object.keys(result).includes(char)) {
//     result[char] += 1;
//   } else {
//     result[char] = 1;
//   }
// });

// console.log(result);

// OR

// let statement = "The Flintstones Rock";
// let result = {};

// for (let counter = 0; counter < statement.length; counter += 1) {
//   let char = statement[counter];
//   if (char === ' ') continue;

//   result[char] = result[char] || 0;
//   result[char] += 1;
// }

// console.log(result);