// 1 - Cute Angles
// function dms(floatingPointNumber) {
//   let num = parseFloat(floatingPointNumber);
//   let degrees = Math.floor(num);
//   let floatingMinutes = parseFloat((num - degrees) * 60);
//   let minutes = Math.floor(floatingMinutes);
//   let seconds = Math.floor((floatingMinutes - minutes) * 60);

//   return `${degrees}°${minutes.toString().padStart(2, '0')}'${seconds.toString().padStart(2, '0')}"`;
// }



// Launch School Solution
// const DEGREE = '\xB0';
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

// function dms(degreesFloat) {
//   let degreesInt = Math.floor(degreesFloat);
//   let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
//   let seconds = Math.floor(
//     (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
//     SECONDS_PER_DEGREE
//   );

//   return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
//                                        padZeroes(seconds) + '"';
// }

// function padZeroes(number) {
//   let numString = String(number);
//   return numString.length < 2 ? ('0' + numString) : numString;
// }

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"



// Further Exploration
// const DEGREE = '\xB0';
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

// function dms(integer) {
//   let degreesFloat = (integer >= 0) ? parseFloat(integer % 360) : parseFloat(360 - (Math.abs(integer) % 360));
//   let degreesInt = Math.floor(degreesFloat);
//   let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
//   let seconds = Math.floor(
//     (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
//     SECONDS_PER_DEGREE
//   );

//   return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
//                                        padZeroes(seconds) + '"';
// }

// function padZeroes(number) {
//   let numString = String(number);
//   return numString.length < 2 ? ('0' + numString) : numString;
// }

// console.log(dms(-1));   // 359°00'00"
// console.log(dms(400));  // 40°00'00"
// console.log(dms(-40));  // 320°00'00"
// console.log(dms(-420)); // 300°00'00"





// 2 - Combining Arrays
// function union(arr1, arr2) {
//   let arr3 = arr1.concat(arr2);
//   let arr4 = [];
//   arr3.map((x) => {
//     if (!arr4.includes(x)) {
//       arr4.push(x);
//     }
//     return arr4;
//   });
//   return arr4;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]



// Launch School Solution
// function copyUnique(resultArray, array) {
//   array.forEach(num => {
//     if (!resultArray.includes(num)) {
//       resultArray.push(num);
//     }
//   });
// }

// function union(...args) {
//   const newArray = [];
//   console.log(args);

//   args.forEach(arr => copyUnique(newArray, arr)); // for each argument (array)

//   return newArray;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]





// 3 - Halvsies
// function halvsies(array) {
//   let arr1 = [];
//   let length = array.length;
//   if (length % 2 === 1) {
//     for (let i = 0; i < Math.ceil(length / 2); i++) {
//       arr1.push(array.shift());
//     }
//   } else {
//     for (let i = 0; i < (length / 2); i++) {
//       arr1.push(array.shift());
//     }
//   }
//   return [arr1, array];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]



// Launch School Solution
// function halvsies(array) {
//   let half = Math.ceil(array.length / 2);
//   let firstHalf = array.slice(0, half);
//   let secondHalf = array.slice(half);
//   return [firstHalf, secondHalf];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]





// 4 - Find the Duplicate
// function findDup(array) {
//   let newArray = [];
//   array.forEach(x => {
//     if (newArray.includes(x)) {
//       console.log(x);
//     }
//     newArray.push(x);
//   });
// }

// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73





// 5 - Combine Two Lists
// function interleave(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i], arr2[i]);
//   }
//   return newArr;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// Further Exploration 1
// function interleave(arr1, arr2) {
//   let newArr = [];
//   arr1.forEach((x, index) => newArr.push(x, arr2[index]));
//   return newArr;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// Further Exploration 2
// function interleave(arr1, arr2) {
//   return arr1.map((x, index) => [x, arr2[index]]).flat();
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// Further Exploration 3
// function interleave(arr1, arr2) {
//   return arr1.reduce((acc, currentValue, index) => {
//     acc.push(currentValue, arr2[index]);
//     return acc;
//   }, []);  
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]





// 6 - Multiplicative Average
// function multiplicativeAverage(array) {
//   return ((array.reduce((acc, currentValue) => acc * currentValue, 1)) / (array.length)).toFixed(3);
// }

// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"





// 7 - Multiply Lists
// function multiplyList(arr1, arr2) {
//   return arr1.map((x, index) => x * arr2[index]);
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]





// 8 - List of Digits
// function digitList(num) {
//   return num.toString().split('').map((x) => Number.parseInt(x));
// }

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]





// 9 - How Many?
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//   'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

// function countOccurrences(array) {
//   let obj = {};

//   array.forEach(x => (obj[x] += 1) || (obj[x] = 1));

//   let keys = Object.keys(obj);
//   let values = Object.values(obj);

//   for (let i = 0; i < keys.length; i++) {
//     console.log(`${keys[i]} => ${values[i]}`);
//   }
// }

// countOccurrences(vehicles);

// Further Exploration
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//   'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

// function countOccurrences(array) {
//   let obj = {};

//   array.map(x => x.toLowerCase()).forEach(x => (obj[x] += 1) || (obj[x] = 1));

//   let keys = Object.keys(obj);
//   let values = Object.values(obj);

//   for (let i = 0; i < keys.length; i++) {
//     console.log(`${keys[i]} => ${values[i]}`);
//   }
// }

// countOccurrences(vehicles);





// 10 - Array Average
// function average(array) {
//   return Math.floor(array.reduce((acc, currentValue) => acc + currentValue, 0) / array.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

// Further Exploration
// function average(array) {
//   let sum = 0;
//   array.forEach(x => sum += x);
//   return Math.floor(sum / array.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40





// 11 - After Midnight (Part 1)
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const SECONDS_PER_MINUTE = 60;

// function timeOfDay(num) {
//   let hoursFloat = (num >= 0) ? parseFloat((num / MINUTES_PER_HOUR) % HOURS_PER_DAY) : parseFloat(HOURS_PER_DAY - (Math.abs(num / MINUTES_PER_HOUR) % HOURS_PER_DAY));
//   let hoursInt = Math.floor(hoursFloat);
//   let minutes = Math.round((hoursFloat - hoursInt) * MINUTES_PER_HOUR);

//   return `${hoursInt.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
// }

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// console.log(timeOfDay(0));
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231));



// Launch School Solution
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function leadingZero(number) {
//   return number < 10 ? `0${number}` : String(number);
// }

// function formatTime(hours, minutes) {
//   return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function timeOfDay(deltaMinutes) {
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return formatTime(hours, minutes);
// }

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// console.log(timeOfDay(0));
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231));

// Further Exploration
// function timeOfDay(deltaMinutes) {  
//   let date = new Date();

//   date.setUTCHours(0, 0, 0, 0);
//   date.setUTCMinutes(date.getUTCMinutes() + deltaMinutes);

//   return `${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}` 
// }

// console.log(timeOfDay(0));
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231));





// 12 - After Midnight (Part 2)
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(string) {
//   let array = string.split(':');
//   let hours = parseInt(array[0]);
//   let minutes = parseInt(array[1]);
//   let result = ((hours % HOURS_PER_DAY) * MINUTES_PER_HOUR) + minutes;

//   return result;
// }

// function beforeMidnight(string) {
//   let array = string.split(':');  
//   let hours = parseInt(array[0]);
//   let minutes = parseInt(array[1]);
//   let result = ((hours % HOURS_PER_DAY) * MINUTES_PER_HOUR) + minutes;

//   return Math.abs((result - MINUTES_PER_DAY) % MINUTES_PER_DAY);
// }

// function beforeMidnight(string) {
//   let array = string.split(':');  
//   let hours = parseInt(array[0]);
//   let minutes = parseInt(array[1]);
//   let result = ((hours % 24) * 60) - 60 + (60 - minutes);
//   return result;

// }

// console.log(afterMidnight("00:00"));
// console.log(beforeMidnight("00:00"));
// console.log(afterMidnight("12:34"));
// console.log(beforeMidnight("12:34"));
// console.log(afterMidnight("24:00"));
// console.log(beforeMidnight("24:00"));

// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);



// Launch School Solution
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   let [hours, minutes] = timeStr.split(":").map(num => Number(num));
//   return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//   return deltaMinutes;
// }

// console.log(afterMidnight("00:00"));
// console.log(beforeMidnight("00:00"));
// console.log(afterMidnight("12:34"));
// console.log(beforeMidnight("12:34"));
// console.log(afterMidnight("24:00"));
// console.log(beforeMidnight("24:00"));



// Further Exploration
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const SECONDS_PER_MINUTE = 60;
// const MILLISECONDS_PER_SECOND = 1000;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   let [hours, minutes] = timeStr.split(":").map(num => Number(num));
//   let date = new Date();
//   let midnight = new Date();

//   date.setUTCHours(hours, minutes, 0, 0);
//   midnight.setUTCHours(0, 0, 0, 0);

//   let results = ((date.getTime() - midnight.getTime()) / (SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND)) % MINUTES_PER_DAY;  
//   return results;

// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//   return deltaMinutes;
// }

// console.log(afterMidnight("00:00"));
// console.log(beforeMidnight("00:00"));
// console.log(afterMidnight("12:34"));
// console.log(beforeMidnight("12:34"));
// console.log(afterMidnight("24:00"));
// console.log(beforeMidnight("24:00"));