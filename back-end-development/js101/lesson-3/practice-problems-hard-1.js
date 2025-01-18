// Question 1
// {prop1: "hi there"};
// undefined





// Question 2
// let object = { first: [1] };
// let numArray = object["first"]; // makes an array [1]. since it is an array/object, this is pass by reference
// numArray.push(2); // pushes 2 to array to make it [1, 2]. this mutates the array

// console.log(numArray); //  => "[1, 2]"
// console.log(object); // { first: [1, 2] };





// // Question 3
// function messWithVars(one, two, three) { // shadows and are reassignments
//   one = two;
//   two = three;
//   three = one;
// }
// let one = ["one"];
// let two = ["two"];
// let three = ["three"];
// messWithVars(one, two, three);
// console.log(`one is: ${one}`); // ["one"]
// console.log(`two is: ${two}`); // ["two"]
// console.log(`three is: ${three}`); // ["three"]



// function messWithVars(one, two, three) { // shadows and are reassignments
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }
// let one = ["one"];
// let two = ["two"];
// let three = ["three"];
// messWithVars(one, two, three);
// console.log(`one is: ${one}`); // ["one"]
// console.log(`two is: ${two}`); // ["two"]
// console.log(`three is: ${three}`); // ["three"]



// function messWithVars(one, two, three) { // shadows and are NOT reassignments. these will mutate the array
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }
// let one = ["one"];
// let two = ["two"];
// let three = ["three"];
// messWithVars(one, two, three);
// console.log(`one is: ${one}`); // ["two"]
// console.log(`two is: ${two}`); // ["three"]
// console.log(`three is: ${three}`); // ["one"]



// Question 4
// function boo(scare) {
//   let myBoo = scare.toUpperCase() + "!!!";
//   console.log(myBoo);
// }
// const halloweenCollection = {
//   greet: "Happy Halloween",
//   scare: "Boo",
//   wish: "May all your pumpkins be glowing",
// };
// let myBoo = boo(halloweenCollection["greet"]);

/* Variables
1 - function boo
1 - scare
2 - myBoo
6 - halloweenCollection
12 - myBoo
*/

/* Primitives
2 - HAPPY HALLOWEEN!!!
2 - !!!
2 - HAPPY HALLOWEEN!!!
3 - HAPPY HALLOWEEN!!!
7 - greet
7 - Happy Halloween
8 - scare
8 - Boo
9 - wish
9 - may all your pumpkins be glowing
12 - Happy Halloween
12 - greet
12 - undefined
*/

/* Objects
1 - function boo
6 - object of halloweenCollection
*/





// Question 5
function isDotSeparatedIpAddress(inputString) { // receives a string argument expected to be an IP address
  let dotSeparatedWords = inputString.split("."); // returns an array splitting numbers between the dots
  if (dotSeparatedWords.length !== 4) {
    return false;
  } else {
    while (dotSeparatedWords.length > 0) {
      // minimum length of the array has to be 1
      let word = dotSeparatedWords.pop(); // the last element of the array is removed and returned as an assignment to word
      if ((word.startsWith("0")) && (word.length > 1)) {
        return false;
      }
      if (!isAnIpNumber(word)) { // runs a function where if the word provided as the argument is not a valid IP number, breaks // breaks if isAnIpNumber is false
        return false;
      } // keeps running the code
    }    
    return true;
  }
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

console.log(isDotSeparatedIpAddress('123.123.0.255'));
console.log(isDotSeparatedIpAddress('0.0.0.0'));
console.log(isDotSeparatedIpAddress('0.0.0.0.0'));
console.log(isDotSeparatedIpAddress('0.0.0.-3'));
console.log(isDotSeparatedIpAddress('0.0.0.01'));
console.log(isDotSeparatedIpAddress('0.0.0.001'));
console.log(isDotSeparatedIpAddress('0.0.0.0001'));
console.log(isDotSeparatedIpAddress('sdfdf'));