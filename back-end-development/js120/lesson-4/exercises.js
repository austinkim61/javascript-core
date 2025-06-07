// class Human {
//   myName() { return this.name; }
//   myAge() { return this.age; }
// }

// class Person extends Human {
//   toString() {
//     return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
//   }
// }

// let will = new Person();
// will.name = 'William';
// will.age = 28;
// console.log(will.toString()); // => My name is William and I'm 28 years old.





// function Greeting() {}

// Greeting.prototype.greet = function(message) {
//   console.log(message);
// };

// function Hello() {}

// Hello.prototype = Object.create(Greeting.prototype);

// Hello.prototype.hi = function() {
//   this.greet('Hello!');
// };

// function Goodbye() {}

// Goodbye.prototype = Object.create(Greeting.prototype);

// Goodbye.prototype.bye = function() {
//   this.greet("Goodbye");
// };



// Case 1
// let hello = new Hello();
// hello.hi(); // 'Hello!'

// Case 2
// let hello = new Hello();
// hello.bye(); // TypeError: hello.bye is not a function

// Case 3
// let hello = new Hello();
// hello.greet(); // undefined

// Case 4
// let hello = new Hello();
// hello.greet('Goodbye'); // 'Goodbye'

// Case 5
// Hello.hi(); // Hello.hi is not a function






// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// };

// function Square(size) {
//   Rectangle.call(this, size, size);
// }

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// };

// let sqr = new Square(5);

// console.log(sqr);
// console.log(sqr.constructor);






// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }

//   toString() {
//     return `[Rectangle ${this.width * this.length}]`;
//   }
// }

// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }

//   toString() {
//     return `[Square] ${this.width * this.length}`;
//   }
// }

// let sqr = new Square(5);

// console.log(sqr);
// console.log(sqr.constructor);







// let me = {
//   name: 'boobs',
// };

// console.log(me.constructor);
























































































