/* Question 1
*/

// let string = "The Flintstones Rock!";

// console.log(string.length);
// for (let i = 0; i < 10; i++) {
//   console.log(string.padStart(i + string.length));
// }

// for (let padding = 0; padding <= 9; padding++) {
//   console.log(" ".repeat(padding) + "The Flintstones Rock!");
// }








/* Question 2

split to array
loop foreach if letter.toUpperCase === letter, turn to lowercase and opposite for lowercase



*/

let munstersDescription = "The Munsters are creepy and spooky.";
// let split = munstersDescription.split('');
// split.forEach((element, index) => {
//   if (element === element.toUpperCase()) {
//     split[index] = element.toLowerCase();
//   } else {
//     split[index] = element.toUpperCase();
//   }
// });
// console.log(split.join(''));


console.log(munstersDescription
  .split("")
  .map(function (char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  })
  .join("")
);







/* Question 3








*/


/* Question 4








*/


/* Question 5








*/


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


