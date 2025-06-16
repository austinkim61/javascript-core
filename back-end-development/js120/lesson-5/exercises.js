


// class Board {
//   display() {
//     p(``);
//     p(`     |     |`);
//     p(`  O  |     |  O`);
//     p(`     |     |`);
//     p(`-----+-----+-----`);
//     p(`     |     |`);
//     p(`     |  X  |`);
//     p(`     |     |`);
//     p(`-----+-----+-----`);
//     p(`     |     |`);
//     p(`  X  |     |`);
//     p(`     |     |`);
//     p(``);
//   }
//   constructor() {
//     // STUB
//     // way to model the 3x3 grid.
//       // perhaps `squares`
//     // data structure to use
//       // array, object, something else
//     // what should the data structure store
//       // strings, numbers, square objects
//   }
// }




// function joinOr(arr, delimiter = ', ', word = 'or') {

//   let allButLast = arr.join(delimiter).slice(0, -1);
//   let last = arr.slice(-1);




//   switch (arr.length) {
//     case 1:
//       return arr.join('');
//     case 2:
//       return `${arr[0]} ${word} ${last}`;
//     default:
//       return `${allButLast}${word} ${last}`;
//   }

// }




// let a = [1];
// let b = [1, 2];
// let c = [1, 2, 3]

// // console.log(`pick one (${joinOr(a, '; ', 'and')})`);
// // console.log(`pick one (${joinOr(b, '; ', 'and')})`);
// // console.log(`pick one (${joinOr(c, '; ', 'and')})`);

// // console.log(c.join(', '));
// console.log(c.join(', ').slice(0, -1));



const readline = require('readline-sync');

let choice;

while (true) {
  const prompt = 'Play again? (y/n): ';
  choice = readline.question(prompt)[0].toLowerCase();
  console.log(choice);

  if (choice === 'y' || 'n') break;
  console.log("Sorry, that's not a valid choice.");
}

console.log(choice === 'y' ? true : false);



