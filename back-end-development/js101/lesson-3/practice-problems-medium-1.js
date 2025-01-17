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



// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);





// Question 6



// let nanArray = [NaN];
// console.log(Number.isNaN(nanArray[0]));





// Question 7


// let answer = 42;
// function messWithIt(someNumber) { // passes 42
//   return (someNumber += 8); // returns someNumber = someNumber + 8 = 50
// }
// let newAnswer = messWithIt(answer); // newAnswer is 50
// console.log(answer - 8); // 34






// Question 8



// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };
// function messWithDemographics(demoObject) { // object reference passed
//   Object.values(demoObject).forEach(familyMember => { // uses static method for object to return an array of values containing the objects from the original object
//     // [{ age: 32, gender: "male" }, { age: 30, gender: "female" }, { age: 402, gender: "male" }, { age: 10, gender: "male" }, { age: 23, gender: "female" }]
//     // [all pointers]
//     // then on the array, run a forEach function
//     // changes the age and gender for each and returns the value
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }
// messWithDemographics(munsters); // passes object to function





// Question 9



// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));





/* Question 10




*/


// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }

// console.log(bar(foo()));


// function bar is called and foo is passed to it as the argument
// determine what the function is
// bar passes foo as argument

// result of foo is
// passing no argument where one is required
// argument is not used
// yes is returned

// yes is passed as the argument to bar
// bar(yes = "no")





// function abc(abc = "a") {
//   return "y";
// }


// // n
// function def(def = "d") {
//   return "n";
// }

// console.log(def(abc()));