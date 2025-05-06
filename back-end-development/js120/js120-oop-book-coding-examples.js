// Types and Objects
// function Cat(name) {
//   this.name = name;
// }

// let butterscotch = new Cat("Butterscotch");
// let pudding = new Cat("Pudding");



// function Cat(name) {
//   this.name = name;

//   this.purr = function() {
//     console.log('purr');
//   }

//   this.speak = function() {
//     console.log('meow!');
//   }
// }

// let butterscotch = new Cat("Butterscotch");
// butterscotch.purr();          // purr
// butterscotch.speak();         // meow!

// let pudding = new Cat("Pudding");
// pudding.purr();               // purr
// pudding.speak();              // meow!



// let student = {
//   name: 'Joanna',
//   age: 27,
// };



// let student = {
//   name: 'Joanna',
//   age: 27,

//   study: function() {
//     console.log(`${student.name} is studying`);
//   },

//   pass: function() {
//     console.log(`${student.name} has passed this course`)
//   },
// };

// student.study();  // Joanna is studying
// student.pass();   // Joanna has passed this course



// let student = {
//   name: 'Joanna',
//   age: 27,

//   study() {
//     console.log(`${student.name} is studying`);
//   },

//   pass() {
//     console.log(`${student.name} has passed this course`)
//   },
// };

// student.study();  // Joanna is studying
// student.pass();   // Joanna has passed this course



// let student = {
//   name: 'Joanna',
//   age: 27,

//   study() {
//     console.log(`${this.name} is studying`);
//   },

//   pass() {
//     console.log(`${this.name} has passed this course`)
//   },
// };

// student.study();  // Joanna is studying
// student.pass();   // Joanna has passed this course



// let anotherStudent = {
//   name: 'Kim',
//   age: 30,

//   study() {
//     console.log(`${this.name} is studying`);
//   },

//   pass() {
//     console.log(`${this.name} has passed this course`)
//   },
// };

// anotherStudent.study();  // Kim is studying
// anotherStudent.pass();   // Kim has passed this course



// let Cat = {
//   purr() {
//     console.log("Purr...");
//   },

//   eat() {
//     console.log("I am eating...");
//   },
// };

// let cheddar = Object.assign({}, Cat);
// let cocoa = Object.assign({}, Cat);

// cheddar.name = 'Cheddar';
// cheddar.color = 'orange';
// cheddar.gender = 'male';

// cocoa.name = 'Cocoa';
// cocoa.color = 'black';
// cocoa.gender = 'female';




// The Object Model
// let cocoa = {
//   animalType: 'cat',
//   name: 'Cocoa',

//   purr: function() {
//     console.log('Purr');
//   },

//   info: function() {
//     console.log(`My name is ${this.name}. I am a ${this.animalType}.`)
//   }
// }

// cocoa.purr();       // Purr
// cocoa.info();       // My name is Cocoa. I am a cat.



// let bankAccount = {
//   accountNumber: '1234567890',
//   balance: 10234.56,
//   accountType: 'checking',
//   name: 'Jane Doe',
//   address: '2246 NW 12th Ave, Portland, Oregon',
//   phone: '456-334-1221',

//   withdraw: function(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       return amount;
//     } else {
//       return 0;
//     }
//   },

//   deposit: function(amount) {
//     this.balance += amount;
//   },
// }



// let cat = {
//   move() {
//     console.log("The cat is walking");
//   },
// };

// let planet = {
//   move() {
//     console.log("The planet is revolving around the Sun");
//   },
// }

// for (let item of [cat, planet]) {
//   item.move();
// }

// // The cat is walking
// // The planet is revolving around the Sun



// class Plant {
//   photosynthesize() {
//     console.log(`This ${this.constructor.name} is photosynthesizing`);
//   }
// }

// class Tree extends Plant {
// }

// class Flower extends Plant {
// }

// class Grass extends Plant {
// }

// let tree = new Tree();
// tree.photosynthesize(); // This Tree is photosynthesizing

// let flower = new Flower();
// flower.photosynthesize(); // This Flower is photosynthesizing

// let grass = new Grass();
// grass.photosynthesize(); // This Grass is photosynthesizing





// Object Factories
// let cocoa = {
//   name: 'Cocoa',
//   color: 'black',
//   age: 5,

//   speak() {
//     console.log(
//       `Meow. I am ${this.name}. ` +
//       `I am a ${this.age}-year-old ${this.color} cat.`
//     );
//   },
// }

// let leo = {
//   name: 'Leo',
//   color: 'orange',
//   age: 3,

//   speak() {
//     console.log(
//       `Meow. I am ${this.name}. ` +
//       `I am a ${this.age}-year-old ${this.color} cat.`
//     );
//   },
// }



// function createCat(name, color, age) {
//   return {
//     name: name,
//     color: color,
//     age: age,

//     speak() {
//       console.log(
//         `Meow. I am ${this.name}. ` +
//         `I am a ${this.age}-year-old ${this.color} cat.`
//       );
//     }
//   };
// }

// let cocoa = createCat("Cocoa", "black", 5);
// let leo = createCat("Leo", "orange", 3);

// cocoa.speak();
// // Meow. I am Cocoa. I am a 5-year-old black cat.

// leo.speak();
// // Meow. I am Leo. I am a 3-year-old orange cat.



// function createCat(name, color, age) {
//   return {
//     name,
//     color,
//     age,

//     speak() {
//       console.log(
//         `Meow. I am ${this.name}. ` +
//         `I am a ${this.age}-year-old ${this.color} cat.`
//       );
//     }
//   };
// }



// function Foo() {
//   this.foo = 42;
// }

// let obj = new Foo();
// console.log(obj instanceof Foo); // true
// console.log(obj.constructor);    // [Function: Foo]



// function Foo() {
//   return {
//     foo: 42,
//   };
// }

// let obj = Foo();
// console.log(obj instanceof Foo); // false
// console.log(obj.constructor);    // [Function: Object]





// Classes
// function createCat(name, color, age) {
//   return {
//     name,
//     color,
//     age,
//     speak() {
//       console.log(
//         `Meow. I am ${name}. ` +
//         `I am a ${age}-year-old ${color} cat.`
//       );
//     }
//   };
// }

// let cocoa = createCat("Cocoa", "black", 5);
// let leo = createCat("Leo", "orange", 3);

// cocoa.speak();
// // Meow. I am Cocoa. I am a 5-year-old black cat.

// leo.speak();
// // Meow. I am Leo. I am a 3-year-old orange cat.



// console.log(cocoa);
// // { name: 'Cocoa', color: 'black', age: 5,
// //   speak: [Function: speak] }

// console.log(typeof cocoa);
// // object

// console.log(cocoa instanceof createCat);
// // false

// console.log(cocoa instanceof Cat);
// // ReferenceError: Cat is not defined



// class Cat {
//   constructor(name, color, age) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//   }

//   speak() {
//     console.log(
//       `Meow. I am ${this.name}. ` +
//       `I am a ${this.age}-year-old ${this.color} cat.`
//     );
//   }
// }

// let cocoa = new Cat("Cocoa", "black", 5);
// let leo = new Cat("Leo", "orange", 3);

// cocoa.speak();
// // Meow. I am Cocoa. I am a 5-year-old black cat.

// leo.speak();
// // Meow. I am Leo. I am a 3-year-old orange cat.

// console.log(cocoa);
// // Cat { name: 'Cocoa', color: 'black', age: 5 }

// console.log(cocoa instanceof Cat);
// // true



// let cocoa = new Cat("Cocoa", "black", 5);



// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }
// }

// const myRectangle = new Rectangle(10, 5);
// console.log(myRectangle.area());        // 50



// class Square {
//   constructor(side) {
//     this.side = side;
//   }

//   area() {
//     return this.side * this.side;
//   }
// }

// const mySquare = new Square(6);
// console.log(mySquare.area());           // 36



// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }
// }

// const myRectangle = new Rectangle(10, 5);
// console.log(myRectangle.area());        // 50

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//     this.side = side;
//   }
// }

// const mySquare = new Square(6);
// console.log(mySquare.area());           // 36
// console.log(mySquare.side);             // 6



// class Parent {
//   whatMethod() {
//     console.log('In the parent method');
//   }
// }

// class Child extends Parent {
//   whatMethod() {
//     console.log('In the child method');
//     super.whatMethod(); // <-- calling `whatMethod` in `Parent` class.
//     console.log('Back in the child method');
//   }
// }

// let child = new Child();
// child.whatMethod();
// // In the child method
// // In the parent method
// // Back in the child method



// console.log(myRectangle); // Rectangle { height: 10, width: 5 }
// console.log(mySquare);    // Square { height: 6, width: 6, side: 6 }

// console.log(mySquare instanceof Square);          // true
// console.log(mySquare instanceof Rectangle);       // true

// console.log(myRectangle instanceof Square);       // false
// console.log(myRectangle instanceof Rectangle);    // true



// +---------+
// | Class A |
// +----+----+
//      |
// +-------------+-------------+
// |                           |
// +----+----+                 +----+----+
// | Class B |                 | Class C |
// +----+----+                 +----+----+
// |                           |
// +------+------+             +------+------+
// |             |             |             |
// +----+----+   +----+----+   +----+----+   +----+----+
// | Class D |   | Class E |   | Class F |   | Class G |
// +---------+   +---------+   +---------+   +---------+





// More About Classes



































// Prototypal Inheritance






















































































































































































































































































































