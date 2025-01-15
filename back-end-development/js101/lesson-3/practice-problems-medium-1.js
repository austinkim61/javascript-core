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
let split = munstersDescription.split(' ');
// let nested = [...split[0]];
// [t, h, e]
// // this code below works
// nested.forEach((element, index) => {
  // if (element === element.toUpperCase()) {
  //   nested[index] = element.toLowerCase();
  // } else {
  //   nested[index] = element.toUpperCase();
//   }
// });
// console.log(nested);






console.log(split);


// split = [ 'The', 'Munsters', 'are', 'creepy', 'and', 'spooky.' ]


split.forEach((word, index) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      split[index][i] = word[i].toLowerCase();
    } else {
      split[index][i] = word[i].toUpperCase();
    }
  }
}
)


console.log(split);



// for (let i = 0; i < split.length; i++) {
//   for (let j = 0; j < split[i].length; j++) {
//     if (split[i][j] === split[i][j].toUpperCase()) {
//       split[i][j] = split[i][j].toLowerCase();
//     } else {
//       split[i][j] = split[i][j].toUpperCase();
//     }
//   }
// }













// split[0][0] = split[0][0].toLowerCase();

// console.log(split);

// for (let i = 0; i < split.length; i++) {
//   for (let j = 0; j < split[i].length; j++) {
//     if (split[i][j] === split[i][j].toUpperCase()) {
//       split[i][j] = split[i][j].toLowerCase();
//     } else {
//       split[i][j] = split[i][j].toUpperCase();
//     }
//   }
// }

// console.log(split[0][1].toUpperCase());


// console.log(munstersDescription.split(' '));
// console.log(munstersDescription.split(' ').join(' '));


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


