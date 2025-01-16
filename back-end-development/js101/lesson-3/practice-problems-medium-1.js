// Question 1


// let string = "The Flintstones Rock!";

// console.log(string.length);
// for (let i = 0; i < 10; i++) {
//   console.log(string.padStart(i + string.length));
// }

// for (let padding = 0; padding <= 9; padding++) {
//   console.log(" ".repeat(padding) + "The Flintstones Rock!");
// }





// Question 2


// let munstersDescription = "The Munsters are creepy and spooky.";
// let split = munstersDescription.split('');
// split.forEach((element, index) => {
//   if (element === element.toUpperCase()) {
//     split[index] = element.toLowerCase();
//   } else {
//     split[index] = element.toUpperCase();
//   }
// });
// console.log(split.join(''));

// console.log(munstersDescription
//   .split("")
//   .map(function (char) {
//     if (char === char.toUpperCase()) {
//       return char.toLowerCase();
//     } else {
//       return char.toUpperCase();
//     }
//   })
//   .join("")
// );





// Question 3



// function factors(number) {
//   let divisor = number;
//   let factors = [];

//   if (isNaN(number)) {
//     return "Not a number.";
//   } else if (number === 0) {
//     return "Number is zero.";
//   } else if (!Number.isFinite(number)) {
//     return "Number is infinite.";
//   } else if (!Number.isInteger(number)) {
//     return "Number is not an integer.";
//   } else if (number < 0) {
//     return "Number is negative.";
//   } else {
//     while (divisor !== 0) {
//       if (number % divisor === 0) {
//         factors.push(number / divisor);
//       }
//       divisor--;
//     }
//     return factors;
//   }
// }
// console.log(factors(720));



// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }





/* Question 4
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {     // buffer is an array // newElement is a primitive // maxbuffersize is the max array length
  buffer.push(newElement);     // pushes the new primitive everytime the function is called. this mutates the array
  if (buffer.length > maxBufferSize) {     // after pushing, checks to see if the new array length is greater than the max buffer size
    buffer.shift();     // if the new array length is greater than the max buffer size, removes the first element of the array. shift method is mutating
  }
  return buffer; // returns the array
}



function addToRollingBuffer2(buffer, maxBufferSize, newElement) {     // buffer is an array // newElement is a primitive // maxbuffersize is the max array length
  buffer = buffer.concat(newElement);     // merges the original array with the new primitive at the end but treats it as an array. assigns this value to buffer
  if (buffer.length > maxBufferSize) {     // after reassigning buffer, checks to see if the new array length is greater than the max buffer size
    buffer.shift();     // if the new array length is greater than the max buffer size, removes the first element of the array. shift method is mutating
  }
  return buffer; // returns the array // any additional invocation of this function will call the original array as that was not mutated
}
*/





// Question 5



console.log(0.3 + 0.6); // 0.9
console.log(0.3 + 0.6 === 0.9); // true





/* Question 6








*/


/* Question 7








*/


/* Question 8








*/


/* Question 9








*/


/* Question 10








*/


