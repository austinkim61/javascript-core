// let obj = { fruit: 'apple', vegetable: 'carrot' };
// console.log(obj.fruit);
// console.log(obj.fruit[3]);
// console.log(obj['vegetable']);
// console.log(obj['vegetable'][0]);

// console.log(obj[0]);



// let arr = ['foo', 'bar', 'qux'];
// arr[3] = 5;
// arr[10] = 52;
// arr['boo'] = 'hoo';
// arr[-1] = 374;

// console.log(arr);
// console.log(arr.length);
// arr.forEach(element => console.log(element));
// console.log(Object.keys(arr));



// let arr = ['foo', 'bar', 'qux'];
// arr[0] = 374;
// console.log(arr);


// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.join(''));
// console.log(arr.join(' '));


// let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1;
// numbers[1] = numbers[1] + 1;
// numbers[2] = numbers[2] + 1;
// numbers[3] = numbers[3] + 1;
// numbers[4] = numbers[4] + 1;


// console.log(numbers);




// let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };
// obj['apple'] = 'Fruit';
// obj.carrot = 'Vegetable';
// obj.pear = 'Fruit';

// let key = 'broccoli';
// obj[key] = 'Vegetable';

// console.log(obj);


// let str1 = 'Hello ';
// let str2 = 'world!';

// console.log(str1.concat(str2));

// console.log(str1);
// console.log(str2);



// while (true) {
//   let number = Math.floor(10 * Math.random());
//   console.log(number);

//   if (number === 5) {
//     console.log('Exiting...');
//     break;
//   }
// }

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let counter = 0;

// while (counter <alphabet.length) {
//   console.log(alphabet[counter]);
//   counter += 1;
// }



// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// for (let counter = 0; counter < alphabet.length; counter++) {
//   console.log(alphabet[counter]);
// }



// let colors = ['green', 'blue', 'purple', 'orange'];

// for (let counter = 0; counter < colors.length; counter += 1) {
//   console.log(`I'm the color ${colors[counter]}!`);
// }





// let mixed = ['hello' , 10, undefined];

// for (let counter = 0; counter < mixed.length; counter += 1) {
//   console.log(typeof mixed[counter]);
// }


// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// let pets = Object.keys(numberOfPets);
// console.log(pets);
// let counter = 0;

// while (counter < pets.length) {
//   let currentPet = pets[counter];
//   console.log(currentPet);
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
//   counter += 1;
// }

// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// for (let currentPet in numberOfPets) {
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
// }







// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// let numberOfAnimals = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };


// Object.prototype.birds = 3;



// for (let currentPet in numberOfPets) {
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
// }



// for (let currentPet in numberOfAnimals) {
//   let currentPetNumber = numberOfAnimals[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
// }





// let str = '';

// while (str.length < 10) {
//   str += '*';
//   console.log(str);
// }

// let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 1) {
//     let square = numbers[index] * numbers[index];
//     console.log(square);
//   }
// }



// let string = 'hello';

// function greeting(str) {
//   return str + str + str;
// }

// let newString = (str) => str + str + str + str;



// console.log(greeting(string));
// console.log(newString(string));



// let numbers = [1, 2, 3, 4, 5, 6];

// console.log(...numbers);


// function myFunction(...arguments) {
//   console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       console.log(arguments[i][j]);
//     }    
//   }
//   // arguments.forEach((element) => console.log(element));
// }

// myFunction('hello', 'goodbye');





// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(obj) {
//   let keys = Object.keys(obj); // ['apple', 'carrot', 'pear', 'broccoli']
//   let fruits = {};

//   for (let i = 0; i < keys.length; i++) {
//     let currentElement = keys[i]; // ['apple', 'carrot', 'pear', 'broccoli']

//     if (obj[currentElement] === 'Fruit') {
//       fruits[currentElement] = 'Fruit';
//     }
//   }
//   console.log(fruits);
// }

// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }





// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleNumbers(numbers) {
//   let multiplied = [];
//   let counter = 0;

//   while (counter < numbers.length) {
//     let currentNum = numbers[counter];
//     multiplied.push(currentNum * 2);

//     counter += 1;
//   }

//   return multiplied;
// }

// console.log(doubleNumbers(myNumbers));
// console.log(myNumbers);



// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     // numbers[counter] = numbers[counter] * 2;
//     numbers[counter] *= 2;
//     counter += 1;
//   }

//   return numbers;
// }

// console.log(doubleNumbers(myNumbers));
// console.log(myNumbers);





// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleOddNumbers(numbers) {
//   let multiplied = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];

//     if (currentNumber % 2 === 1) {
//       multiplied.push(currentNumber * 2);
//     } else {
//       multiplied.push(currentNumber);
//     }
//   }

//   return multiplied;
// }

// console.log(doubleOddNumbers(myNumbers));
// console.log(myNumbers);





// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleOddNumbers(numbers) {
//   let multiplied = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];

//     if (counter % 2 === 1) {
//       multiplied.push(currentNumber * 2);
//     } else {
//       multiplied.push(currentNumber);
//     }
//   }

//   return multiplied;
// }

// console.log(doubleOddNumbers(myNumbers));
// console.log(myNumbers);





// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectType(produceList, selectionCriterion) {
//   let produceKeys = Object.keys(produceList);
//   let selectedItems = {};

//   for (let counter = 0; counter < produceKeys.length; counter++) {
//     let currentKey = produceKeys[counter];
//     let currentValue = produceList[currentKey];

//     if (currentValue === selectionCriterion) {
//       selectedItems[currentKey] = currentValue;
//     }
//   }

//   return selectedItems;
// }

// console.log(selectType(produce, 'Fruit'));
// console.log(selectType(produce, 'Vegetable'));
// console.log(selectType(produce, 'Meat'));





// let myNumbers = [1, 4, 3, 7, 2, 6];

// function multiply(numbers, multiplier) {
//   let multiplied = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNum = numbers[counter];
//     multiplied.push(currentNum * multiplier);    
//   }

//   return multiplied;
// }

// console.log(multiply(myNumbers, 3));
// console.log(myNumbers);





// [1, 2, 3].forEach((number, index) => {
//   console.log(`${index}: ${number}`);
// });





// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceValues = Object.values(produce);

// produceValues.forEach(value => {
//   console.log(value);
// });

// let produceKeys = Object.keys(produce);

// produceKeys.forEach(key => {
//   console.log(key);
// });

// let produceKeyValues = Object.entries(produce);

// produceKeyValues.forEach(keyValue => {
//   // let [ key, value ] = keyValue;  
//   let key = keyValue[0];
//   let value = keyValue[1];

//   console.log(`${key} is a ${value}`);
// });





// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceKeyValues = Object.entries(produce);
// let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
//   let [ key, value ] = keyValue;
//   return value === 'Vegetable';
// });

// let onlyVegetables = {};

// onlyVegetablesArr.forEach(keyValue => {
//   let [ key, value ] = keyValue;
//   onlyVegetables[key] = value;
// });

// console.log(onlyVegetables);



// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceKeyValues = Object.entries(produce);
// let onlyVegetables = {};

// produceKeyValues.forEach(keyValue => {
//   let [ key, value ] = keyValue;
//   if (value === 'Vegetable') {
//     onlyVegetables[key] = value;    
//   }
// });

// console.log(onlyVegetables);





// console.log([1, 2, 3].map(num => num % 2 === 1));





// let str = "What's up, Doc?";
// console.log(
//   str.split('')
//      .filter(char => 'aeiou'.includes(char.toLowerCase()))
//     .join(''));

// let str2 = "What's up, Doc?";
// console.log(
//   str2.split('')
//      .map(char => char + char)
//      .join(''));












// let array = [1, 2, 3].forEach(num => {
//   let num2 = num * 3;
//   // console.log(num2);
// });
// console.log(array);

// console.log([1, 2, 3].forEach(num => {
//   num = 3;
// }));

// console.log([1, 2, 3].filter(num => {
//   num + 1;
// }));

// console.log([1, 2, 3].map(num => {
//   num * 2;
// }));