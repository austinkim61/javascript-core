// 1 - Lettercase Percentage Ratio
// function letterPercentages(string) {
//   let obj = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0
//   };
//   let total = 0;
//   string.split('').forEach(char => {
//     if (!(char.toLowerCase() >= 'a' && char.toLowerCase <= 'z')) {
//       obj.neither++;
//       total++;
//     } else if (char === char.toLowerCase()) {
//       obj.lowercase++;
//       total++;
//     } else {
//       obj.uppercase++;
//       total++;
//     }
//   });
//   Object.entries(obj).forEach(([key, value]) => obj[key] = ((value / total) * 100).toFixed(2));
//   return obj;
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



// function letterPercentages(string) {
//   let total = string.length;

//   return {
//     lowercase: ((string.match(/[a-z]/g)|| []).length / total * 100).toFixed(2),
//     uppercase: ((string.match(/[A-Z]/g) || []).length / total * 100).toFixed(2),
//     neither: ((string.match(/[^a-z]/gi) || []).length / total * 100).toFixed(2)
//   };

// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



// Launch School Solution
// function letterPercentages(string) {
//   let count = string.length;

//   function percentage(regex) {
//     let matchingChars = string.match(regex) || [];
//     return ((matchingChars.length / count) * 100).toFixed(2);
//   }

//   return {
//     lowercase: percentage(/[a-z]/g),
//     uppercase: percentage(/[A-Z]/g),
//     neither:   percentage(/[^a-z]/gi),
//   };
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }





// 2 - Triangle Sides
// function triangle(...args) {
//   let array = args.toSorted((a, b) => a - b);
//   if (array.length > 3) {
//     return 'invalid';
//   }

//   let a = array[0];
//   let b = array[1];
//   let c = array[2];

//   if ((a === 0) || ((a + b) < c)) {
//     return 'invalid'
//   } else if ((a === b) && (a === c)) {
//     return 'equilateral';
//   } else if ((b === a) || (b === c)) {
//     return 'isosceles';
//   } else { // if ((a !== b) && (a !== c)) 
//     return 'scalene';
//   }
// }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"



// Launch School Solution
// function triangle(side1, side2, side3) {
//   let perimeter = side1 + side2 + side3;
//   let longest = Math.max(side1, side2, side3);
//   let shortest = Math.min(side1, side2, side3);
//   let middle = perimeter - longest - shortest;

//   if (isValid(shortest, middle, longest)) {
//     return getTriangleType(side1, side2, side3);
//   } else {
//     return "invalid";
//   }
// }

// function isValid(shortest, middle, longest) {
//   return shortest > 0 && shortest + middle > longest;
// }

// function getTriangleType(side1, side2, side3) {
//   if (side1 === side2 && side2 === side3) {
//     return "equilateral";
//   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//     return "isosceles";
//   } else {
//     return "scalene";
//   }
// }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"





// 3 - Tri-Angles
// function triangle(num1, num2, num3) {
//   let [a, b, c] = [num1, num2, num3].toSorted((a, b) => a - b);

//   if ((a <= 0) || ((a + b + c) !== 180)) {
//     return 'invalid'
//   } else if (b === 90 || c === 90) {
//     return 'right';
//   } else if (c < 90) {
//     return 'acute';
//   } else { // if (c > 90) 
//     return 'obtuse';
//   }
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"



// Launch School Solution
// function triangle(angle1, angle2, angle3) {
//   const angles = [angle1, angle2, angle3];
//   if (isValid(angles)) {
//     return getTriangleType(angles);
//   } else {
//     return "invalid";
//   }
// }

// function isValid(angles) {
//   const totalAngle = angles.reduce((total, angle) => total + angle);

//   const allNonZero = angles.every(angle => angle > 0);

//   return totalAngle === 180 && allNonZero;
// }

// function getTriangleType(angles) {
//   if (angles.some(testRightTriangle)) {
//     return "right";
//   } else if (angles.every(testAcuteTriangle)) {
//     return "acute";
//   } else {
//     return "obtuse";
//   }
// }

// function testRightTriangle(angle) {
//   return angle === 90;
// }

// function testAcuteTriangle(angle) {
//   return angle < 90;
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"





// 4 - Unlucky Days
// function fridayThe13ths(year) {
//   let total = 0;

//   for (let month = 0; month <= 11; month++) {
//     let date = new Date(year, month, 13);
//     if (date.getDay() === 5) {
//       total++;
//     }
//   }

//   return total;
// }

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2



// Launch School Solution
// function fridayThe13ths(year) {
//   let thirteenths = [];

//   for (let month = 0; month < 12; month += 1) {
//     thirteenths.push(new Date(year, month, 13));
//   }

//   return thirteenths.reduce((count, day) => {
//     return day.getDay() === 5 ? (count + 1) : count;
//   }, 0);
// }


// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2

// Futher Exploration
// function fridayThe13ths(year) {

//   return [...Array(12)].filter((_, index) => new Date(year, index, 13).getDay() === 5).length

// }

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2





// 5 - Next Featured Number Higher than a Given Value
// function featured(startingNum) {
//   if (startingNum >= 9876543201) {
//     return 'There is no possible number that fulfills those requirements.';
//   }

//   for (let i = startingNum + 1; i <= 9876543201; i++) {
//     if (i % 7 === 0 && i % 2 === 1) {
//       if (uniqueDigits(i)) {
//         return i;
//       }
//     }
//   }
// }

// function uniqueDigits(num) {
//   let string = num.toString();
//   let array = string.split('');
//   return array.every(char => string.indexOf(char) === string.lastIndexOf(char));
// }

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."



// Launch School Solution
// function featured(number) {
//   const MAX_FEATURED = 9876543201;
//   let featuredNum = toOddMultipleOf7(number);

//   do {
//     if (allUnique(featuredNum)) {
//       return featuredNum;
//     }

//     featuredNum += 14;
//   } while (featuredNum <= MAX_FEATURED);

//   return 'There is no possible number that fulfills those requirements.';
// }

// function toOddMultipleOf7(number) {
//   do {
//     number += 1;
//   } while (number % 2 === 0 || number % 7 !== 0);

//   return number;
// }

// function allUnique(number) {
//   let digits = String(number).split('');
//   let seen = {};

//   for (let idx = 0; idx < digits.length; idx += 1) {
//     if (seen[digits[idx]]) {
//       return false;
//     }

//     seen[digits[idx]] = true;
//   }

//   return true;
// }

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."





// 6 - Sum Square - Square Sum
// function sumSquareDifference(number) {
//   let numbersArray = [...Array(number)].map((_, index) => index + 1);
//   let squaredSum = numbersArray.reduce((acc, currentValue) => acc + currentValue, 0) ** 2;
//   let sumOfSquares = numbersArray.reduce((acc, currentValue) => acc + (currentValue ** 2), 0);

//   return squaredSum - sumOfSquares;
// }

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150



// Launch School Solution
// function sumSquareDifference(count) {
//   let sum = 0;
//   let sumOfSquares = 0;
//   for (let number = 1; number <= count; number++) {
//     sum += number;
//     sumOfSquares += Math.pow(number, 2);
//   }
//   return Math.pow(sum, 2) - sumOfSquares;
// }

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150





// 7 - Bubble Sort
// function bubbleSort(array) {
//   let count = 0;
//   do {
//     numberSwap(array);
//     count++;  
//   } while (count < array.length);
// }

// function numberSwap(array) {  
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] > array[i + 1]) {
//       [array[i], array[i + 1]] = [array[i + 1], array[i]];      
//     }
//   }
// }

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]



// Launch School Solution
// function bubbleSort(array) {
//   while (true) {
//     let swapped = false;
//     for (let idx = 1; idx < array.length; idx++) {
//       if (array[idx - 1] <= array[idx]) continue;
//       [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
//       swapped = true;
//     }
//     if (!swapped) break;
//   }
// }

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]





// 8 - Is It Prime?
// function isPrime(num) {
//   let count = 0;

//   if (num === 1) {
//     return false;
//   } else {
//     for (let i = 1; i <= num; i++) {
//       num % i === 0 ? count++ : count = count;
//       if (count > 2) {
//         return false;
//       }
//     }

//     return true;
//   }
// }

// console.log(isPrime(1) === false)            // true
// console.log(isPrime(2) === true)             // true
// console.log(isPrime(3) === true)             // true
// console.log(isPrime(4) === false)            // true
// console.log(isPrime(5) === true)             // true
// console.log(isPrime(6) === false)            // true
// console.log(isPrime(7) === true)             // true
// console.log(isPrime(8) === false)            // true
// console.log(isPrime(9) === false)            // true
// console.log(isPrime(10) === false)           // true
// console.log(isPrime(23) === true)            // true
// console.log(isPrime(24) === false)           // true
// console.log(isPrime(997) === true)           // true
// console.log(isPrime(998) === false)          // true
// console.log(isPrime(3_297_061) === true)     // true
// console.log(isPrime(23_297_061) === false)   // true



// Launch School Solution
function isPrime(number) {
  if (number === 1) return false;

  maxDivisor = Math.sqrt(number);
  for (let divisor = 2; divisor <= maxDivisor; ++divisor) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1) === false)            // true
console.log(isPrime(2) === true)             // true
console.log(isPrime(3) === true)             // true
console.log(isPrime(4) === false)            // true
console.log(isPrime(5) === true)             // true
console.log(isPrime(6) === false)            // true
console.log(isPrime(7) === true)             // true
console.log(isPrime(8) === false)            // true
console.log(isPrime(9) === false)            // true
console.log(isPrime(10) === false)           // true
console.log(isPrime(23) === true)            // true
console.log(isPrime(24) === false)           // true
console.log(isPrime(997) === true)           // true
console.log(isPrime(998) === false)          // true
console.log(isPrime(3_297_061) === true)     // true
console.log(isPrime(23_297_061) === false)   // true



