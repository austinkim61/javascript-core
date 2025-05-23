const p = console.log;
// Problem 1
// function func() {
//   return this;
// }

// let context = func();

// console.log(context);

// // answer => Object [global] {...}





// Problem 2
// let obj = {
//   func: function() {
//     return this;
//   },
// };

// let context = obj.func();

// console.log(context);

// // answer => { func: [Function: func] }





// Problem 3
// message = 'Hello from the global scope!';

// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage();

// let foo = {
//   message: 'Hello from the function scope!',
// };

// foo.deliverMessage = deliverMessage;

// foo.deliverMessage();

// /* answer =>
// 'Hello from the global scope!'
// 'Hello from the function scope!'
// */





// Problem 4
// answer => call and apply





// Problem 5
// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add: function() {
//      return this.a + this.b;
//    },
// };

// console.log(bar.add.call(foo)); // answer => 3

























