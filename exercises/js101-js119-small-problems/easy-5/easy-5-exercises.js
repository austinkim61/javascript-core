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




















// 4 - Find the Duplicate




















// 5 - Combine Two Lists




















// 6 - Multiplicative Average




















// 7 - Multiply Lists




















// 8 - List of Digits




















// 9 - How Many?




















// 10 - Array Average




















// 11 - After Midnight (Part 1)




















// 12 - After Midnight (Part 2)























