// let advice = "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.replaceAll('important', 'urgent'));





// let numbers = [1, 2, 3, 4, 5];

// let numbersReversed = numbers.slice();
// numbersReversed.reverse();

// let numbersReversed = [...numbers].sort((num1, num2) => num2 - num1);

// function compareNumbers(a, b) {
//   console.log(a);
//   console.log(b);
//   return b - a; 
// }
// let numbersReversed = [...numbers];
// numbersReversed.sort(compareNumbers);

// let numbersReversed = [];
// numbers.forEach((num) => numbersReversed.unshift(num));

// console.log(numbers);
// console.log(numbersReversed);





// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;
// let number2 = 95;

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));





// let famousWords = "seven years ago...";
// let prefix = "Four score and ";

// console.log(prefix.concat(famousWords));
// console.log(prefix + famousWords);





// let array = [1, 2, 3, 4, 5];
// array.splice(2, 1);
// console.log(array);





// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// console.log(flintstones);

// let newArray = [];
// newArray = newArray.concat(...flintstones);
// console.log(newArray);

// let combined = flintstones.reduce((accumulator, currentValue) => {
//   return accumulator.concat(currentValue);
// }, []);
// console.log(combined);

// let newArray = [];
// flintstones.forEach(function(element) {
//   newArray = newArray.concat(element);
// });
// console.log(newArray);

// let newArray = [];
// flintstones.forEach(element => {
//   newArray = newArray.concat(element);
// });
// console.log(newArray);

// let newArray = flintstones.flat();
// console.log(newArray);





// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let array = Object.entries(flintstones)[2];
// console.log(array);

// let array = Object.entries(flintstones);
// let newArray = array.filter((word) => word[0] === "Barney").shift();
// console.log(newArray);





// let numbers = [1, 2, 3, 4];
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));





// let title = "Flintstone Family Members";

// let padding = Math.floor((40 - title.length) / 2);
// console.log(title.padStart(padding + title.length));





// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('').reduce((acc, elem) => acc + (elem === 't'), 0));
// console.log(statement2.split('').reduce((acc, elem) => acc + (elem === 't'), 0));
// console.log(statement1.split('').filter((letter) => letter === 't').length);
// console.log(statement2.split('').filter((letter) => letter === 't').length);

