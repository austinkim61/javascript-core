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
function messWithVars(one, two, three) { // shadows and are reassignments
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ["one"]
console.log(`two is: ${two}`); // ["two"]
console.log(`three is: ${three}`); // ["three"]





function messWithVars(one, two, three) { // shadows and are reassignments
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ["one"]
console.log(`two is: ${two}`); // ["two"]
console.log(`three is: ${three}`); // ["three"]





function messWithVars(one, two, three) { // shadows and are NOT reassignments. these will mutate the array
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ["two"]
console.log(`two is: ${two}`); // ["three"]
console.log(`three is: ${three}`); // ["one"]



// Question 4









// Question 5









// Question 6









// Question 7









// Question 8









// Question 9









// Question 10









