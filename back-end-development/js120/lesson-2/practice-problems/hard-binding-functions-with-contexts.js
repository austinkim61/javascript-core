// Problem 1
// answer => bind





// Problem 2
// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }

// foo.bind(obj);

// // answer => nothing. returns a new function but does not invoke it





// Problem 3
// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(foo());
// console.log(bar());

// // answer => NaN
// //        => 5





// Problem 4
// let positivity = {
//   message: 'JavaScript makes sense!',
// };

// let negativity = {
//   message: 'JavaScript makes no sense!',
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positivity);

// negativity.logMessage = bar;
// negativity.logMessage();

// // answer => 'JavaScript makes sense!'





// Problem 5
// let obj = {
//   a: 'Amazebulous!',
// };
// let otherObj = {
//   a: "That's not a real word!",
// };

// function foo() {
//   console.log(this.a);
// }

// let bar = foo.bind(obj);

// bar.call(otherObj);

// // answer => 'Amazebulous!'



















