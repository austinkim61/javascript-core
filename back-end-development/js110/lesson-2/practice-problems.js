// Question 1
// let arr = ['10', '11', '9', '7', '8'];

// console.log(arr.map(string => Number(string)).sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }));

// console.log(arr.map(string => Number(string)).sort((a, b) => b - a));

// Launch School Solution
// console.log(arr.sort((a, b) => Number(b) - Number(a)));





// Question 2
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// console.log(books.sort((a, b) => Number(a.published) - Number(b.published)));





// Question 3
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);
// console.log(arr2[1]['third'][0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);
// console.log(arr3[2]['third'][0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);
// console.log(obj1['b'][1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]);
// console.log(Object.keys(obj2['third'])[0]);




// Question 4
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// // obj1.first[2][0] = 4;
// obj1['first'][2][0] = 4;
// console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// // obj2.a.a[2] = 4;
// obj2['a']['a'][2] = 4;
// console.log(obj2);





// Question 5
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let totalMaleAge = 0;

// for (let [_, value] of Object.entries(munsters)) {
//   if (value['gender'] === 'male') {
//     totalMaleAge += value['age'];
//   }
// }

// console.log(totalMaleAge);



// Launch School Solution
// let totalMaleAge = 0;

// for (let member in munsters) {
//   if (munsters[member]['gender'] === 'male') {
//     totalMaleAge += munsters[member].age;
//   }
// }

// console.log(totalMaleAge); // => 444





// Question 6
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// for (let member in munsters) {
//   console.log(`${member} is a ${munsters[member]['age']}-year-old ${munsters[member]['gender']}.`)
// }



// Launch School Solution
// Object.entries(munsters).forEach(entry => {
//   let name = entry[0];
//   let age = entry[1]['age'];
//   let gender = entry[1].gender;

//   console.log(`${name} is a ${age}-year-old ${gender}.`);
// });





// Question 7
// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // [2, [5, 8]] => [4, [3, 8]]

// arr[0] += 2; 
// arr[1][0] -= a;

// console.log(a); // => 2
// console.log(b); // => [3, 8]
// console.log(arr); // => [4, [3, 8]]





// Question 8
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(entry => {
//   entry.forEach(word => {
//     word.split('').forEach(letter => {
//       if (letter.match(/[aeiou]/gi)) {
//         console.log(letter);
//       }
//     });
//   });  
// });





// Question 9
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// let serializedArr = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(serializedArr);

// deepCopiedArr.forEach(entry => {
//   entry.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// });

// console.log(arr);
// console.log(deepCopiedArr);



// Launch School Solution
// console.log(arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     return subArr.slice().sort();
//   } else {
//     return subArr.slice().sort((a, b) => a - b);
//   }
// }));





// Question 10
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// console.log(arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     return subArr.slice().sort().reverse();
//   } else {
//     return subArr.slice().sort((a, b) => a - b).reverse();
//   }
// }));

// console.log(arr.map(entry => {
//   return entry.slice().sort((a, b) => {
//     if (a > b) {
//       return -1;
//     } else if (a < b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }));





// Question 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(elem => {
//   let newArr = Object.entries(elem);
//   newArr.map(elem => {
//     return elem[1] = elem[1] + 1;
//   });
//   return Object.fromEntries(newArr);
// }));



// Launch School Solution
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(obj => {
//   let incrementedObj = {};

//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }

//   return incrementedObj;
// })); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

// console.log(arr); // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]





// Question 12
// const arr = [
//   ['b', 'c', 'a'],
//   ['blue', 'black', 'green'],
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let serializedArr = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(serializedArr);

// deepCopiedArr[0].push('d');
// deepCopiedArr[1].push('red');
// deepCopiedArr[2]['b'].push(8);
// deepCopiedArr[2]['c'].push(9);
// deepCopiedArr[2]['d'].push(5);
// deepCopiedArr[3]['e'].push(9);
// deepCopiedArr[3]['f'].push(14);

// console.log(arr);
// console.log(deepCopiedArr);



// Launch School Solution
// const deepCopy = JSON.parse(JSON.stringify(arr));





// Question 13
// const truthiness = {
//   falsy: [ null, undefined, '', false, NaN, 0 ],
//   truthy: ['everything else...']
// };

// function deepClone(object) {
//   if (object === null || typeof object !== 'object') {
//     return object;
//   } else if (Array.isArray(object) === true) {
//     return object.map(deepClone);
//   } else if (typeof object === 'object') {
//     let obj = {};
//     for (let key in object) {
//       obj[key] = deepClone(object[key]);
//     }
//     return obj;
//   }
// }

// let cloned = deepClone(truthiness);

// cloned['falsy'].push(-0);
// cloned['truthy'].push('hello');

// console.log(truthiness);
// console.log(cloned);



// Launch School Solution
// const deepCopy = {};

// for (let prop in truthiness) {
//   deepCopy[prop] = [...truthiness[prop]];
// }

// deepCopy['falsy'].push(-0);
// deepCopy['truthy'].push('hello');

// console.log(truthiness);
// console.log(deepCopy);





// Question 14
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// console.log(arr.map(elem => elem.filter(num => num % 3 === 0)));
// console.log(arr);


// Recursion
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18, [3, 4, 5, 6, 9]]];

// function recursion(array) {
//   return array.map(elem => {
//       if (Array.isArray(elem)) {
//         return recursion(elem);
//       } else {
//         return elem;
//       }
//     }).filter(num => {
//       if (Array.isArray(num)) {
//         return true;
//       } else {
//         return num % 3 === 0;
//       }
//     });
// }

// console.log(recursion(arr));
// console.log(arr);





// Question 15
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(arr.sort((a, b) => {
//   let sumOfOddA = a.filter(num => num % 2 === 1)
//                    .reduce((acc, elem) => acc + elem);
//   let sumOfOddB = b.filter(num => num % 2 === 1)
//                    .reduce((acc, elem) => acc + elem);
                   
//   if (sumOfOddA < sumOfOddB) {
//     return -1;
//   } else if (sumOfOddA > sumOfOddB) {
//     return 1;
//   } else {
//     return 0;
//   }
  
//   // Alternatively:
//   //   return sumOfOddA - sumOfOddB;

// }));





// Question 16
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let arr = [];

// for (let item in obj) {
//   if (obj[item]['type'] === 'fruit') {
//     arr.push(obj[item]['colors'].map(string => string[0].toUpperCase() + string.slice(1)));
//   } else if (obj[item]['type'] === 'vegetable') {
//     arr.push(obj[item]['size'].toUpperCase());
//   }    
// }

// console.log(arr);



// Launch School Solution
// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// console.log(Object.values(obj).map(attributes => {
//   if (attributes['type'] === 'fruit') {
//     return attributes['colors'].map(char => capitalize(char));
//   } else {
//     return attributes['size'].toUpperCase();
//   }
// }));





// Question 17
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let newArr = []

// arr.forEach(obj => {
//   let tempArr = [];

//   for (let letter in obj) {
//     obj[letter].forEach(num => tempArr.push(num));
//   }
//   if (tempArr.every(num => num % 2 === 0)) {
//     newArr.push(obj);
//   }

// });

// console.log(newArr);



// Launch School Solution
// console.log(arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// }));





// Question 18
// let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

// console.log(Object.fromEntries(arr));

// Alternatively:
// let keys = arr.map(elem => elem[0]);
// let values = arr.map(elem => elem[1]);
// let obj = {};

// for (let i = 0; i < keys.length; i++) {
//   obj[keys[i]] = values[i];
// }

// console.log(obj);



// Launch School Solution
// let obj = {};
// arr.forEach(subarray => {
//   let key = subarray[0];
//   let value = subarray[1];

//   obj[key] = value;
// });

// console.log(obj); // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }





// Question 19
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// const deepCopy = JSON.parse(JSON.stringify(munsters));
// deepCopy['herman']['age'] = 999999;

// console.log(munsters);
// console.log(deepCopy);

// Alternatively
// function deepClone(object) {
//   if (object === null || typeof object !== 'object') {
//     return object;
//   } else if (Array.isArray(object) === true) {
//     return object.map(deepClone);
//   } else if (typeof object === 'object') {
//     let obj = {};
//     for (let key in object) {
//       obj[key] = deepClone(object[key]);
//     }
//     return obj;
//   }
// }

// console.log(deepClone(munsters));


// Launch School Solution
// const munstersIndestructible = JSON.parse(JSON.stringify(munsters), (munster, info) => Object.freeze(info));
// console.log(munstersIndestructible);





// Question 20






// Question 21





















































































