// 1 - Welcome Stranger
// function greetings(array, object) {
//   return `Hello, ${array[0]} ${array[1]} ${array[2]}! Nice to have a ${object['title']} ${object['occupation']} around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// ); // logs Hello, John Q Doe! Nice to have a Master Plumber around.



// Launch School Solution
// function greetings(array, object) {
//   return `Hello, ${array.join(' ')}! Nice to have a ${object['title']} ${object['occupation']} around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// ); // logs Hello, John Q Doe! Nice to have a Master Plumber around.





// 2 - Greeting a user
// let rlSync = require('readline-sync');
// let name = rlSync.question('What is your name? ');

// if (name.includes("!")) {
//   console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }



// Launch School Solution
// let rlSync = require('readline-sync');
// let name = rlSync.question('What is your name? ');

// if (name[name.length - 1] === "!") {
//   name = name.slice (0, -1);
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }





// 3 - Multiplying Two Numbers
// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(5, 3) === 15); // logs true



// Launch School Solution
// const multiply = (num1, num2) => num1 * num2;

// console.log(multiply(5, 3) === 15); // logs true





// 4 - Squaring an Argument
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function square(num) {
//   return multiply(num, num);
// }

// function powerToTheN(num, power) {
//   return Math.pow(multiply(num, num), power / 2);
// }

// console.log(square(5) === 25);
// console.log(square(8) === 64);
// console.log(powerToTheN(3, 8));
// console.log(powerToTheN(3, 9));
// console.log(powerToTheN(1, 1));
// console.log(powerToTheN(1, 2));
// console.log(powerToTheN(1, 3));
// console.log(powerToTheN(2, 1));
// console.log(powerToTheN(2, 2));
// console.log(powerToTheN(2, 3));
// console.log(powerToTheN(1, 0));
// console.log(powerToTheN(2, 0));





// 5 - Arithmetic Integer
// let rlSync = require('readline-sync');

// let num1 = parseInt(rlSync.question('==> Enter the first number:\n'));
// let num2 = parseInt(rlSync.question('==> Enter the second number:\n'));

// console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
// console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
// console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
// console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
// console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
// console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);
// console.log(`==> ${num1} ** ${num2} = ${Math.pow(num1, num2)}`);





// 6 - The End Is Near But Not Here
// function penultimate(string) {
//   let array = string.split(' ');
//   return array[array.length - 2];
// }

// console.log(penultimate("last word") === "last");
// console.log(penultimate("Launch School is great!") === "is");



// Further Exploration - middle word
// Edge cases
// 1 word
// even number of words (do two middle)
// no words

// function middle(string) {
//   if (typeof string !== 'string') {
//     return "Not a string";
//   }

//   let array = string.split(' ');
//   if (string === '') {
//     return "Empty String";
//   } else if (array.length % 2 === 1) {
//     return array.at((array.length / 2) - 0.5);
//   } else if (array.length % 2 === 0) {
//     return `${array.at((array.length / 2) - 1)} ${array.at(array.length / 2)}`;
//   }
// }
// console.log(middle(1)); // "Not a string"
// console.log(middle([1, 2])); // "Not a string"
// console.log(middle({a: 2})); // "Not a string"
// console.log(middle("")); // "Empty String"
// console.log(middle("one")); // "one"
// console.log(middle("one two")); // "one two"
// console.log(middle("one two three")); // "two"
// console.log(middle("one two three four")); // "two three"
// console.log(middle("one two three four five")); // "three"
// console.log(middle("one two three four five six")); // "three four"





// 7 - Exclusive Or
// function xor(arg1, arg2) {
//   if ((Boolean((arg1 || arg2)) === true) && (Boolean((arg1 && arg2)) === false)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true
// console.log(xor(0, false) === false);     // true
// console.log(xor(0, 0) === false);         // true



// Launch School Solution
// function xor(arg1, arg2) {
//   if ((arg1 && !arg2) || (arg2 && !arg1)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function xor(arg1, arg2) {
//   return Boolean((arg1 && !arg2) || (arg2 && !arg1));
// }

// console.log(xor(5, 0) === true);          // true // true and true OR false and false === true
// console.log(xor(false, true) === true);   // true // false and false OR true and true === true
// console.log(xor(1, 1) === false);         // true // true and false OR true and false === false
// console.log(xor(true, true) === false);   // true // true and false OR true and false === false
// console.log(xor(0, false) === false);     // true // false and true OR false and true === false
// console.log(xor(0, 0) === false);         // true // false and true OR false and true === false

// console.log(xor(5, 0));
// console.log(xor(false, true));
// console.log(xor(1, 1));
// console.log(xor(true, true));
// console.log(xor(0, false));
// console.log(xor(0, 0));



// Uses of xor:
// traffic lights
// restaurant - meal ready or not ready - cannot be both





// 8 - Odd Lists
// function oddities(array) {
//   let returnedArray = [];
//   array.forEach((element, index) => {
//     if (index % 2 === 0) {
//       returnedArray.push(element);
//     }
//   });
//   return returnedArray;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []





// 9 - How Old is Teddy?
function randomAge(min, max) {
  let age = Math.floor(((Math.random() * (max - min + 1)) + min));
  console.log(`Teddy is ${age} years old!`);
}
console.log(randomAge(20, 80));
console.log(randomAge(20, 120));





// 10 - When Will I Retire?












// 11 - Get Middle Character












// 12 - Always Return Negative
















