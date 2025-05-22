// bar();
// function bar() {
//   console.log("this is bar");
// }

// foo();
// const foo = function() {
//   console.log("this is foo");
// };



// let a = (x) => x * x;
// let a = () => console.log('hello');
// a();




// let car = {
//   brand: 'Toyota',
//   getBrand() {
//     console.log(this);
//   }
// };

// console.log(car.getBrand());




function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42



