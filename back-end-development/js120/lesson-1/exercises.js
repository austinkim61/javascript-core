// class Student {
//   constructor(firstName, lastName, track) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._track = track;
//   }

//   get name() {
//     return [this.firstName, this.lastName];
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get track() {
//     return this._track;
//   }
// }

// let student = new Student('Kay', 'Oakley', 'JavaScript');
// console.log(`${student.name.join(' ')} ${student.track}`);
// // Kay Oakley JavaScript
// console.log(`${student.firstName} ${student.lastName}`);
// // Kay Oakley

// student.firstName = 'hello';

// console.log(student);






// class MyClass {
//   static staticMethod() {
//     console.log('This is a static method.');
//   }

//   instanceMethod() {
//     console.log('This is an instance method.');
//   }
// }

// // Calling the static method
// MyClass.staticMethod();    // This is a static method.
// MyClass.instanceMethod();

// // const instance = new MyClass();

// // instance.instanceMethod(); // This is an instance method.
// // instance.staticMethod();   // Raises error





// class Animal {
//   constructor(type) {
//     this.type = type;
//   }

//   eat() {
//     console.log("I am eating.");
//   }
// }

// class Cat extends Animal {
//   constructor(name, color) {
//     super();
//     this.name = name;
//     this.color = color;
//   }

//   whoAmI() {
//     console.log(`My name is ${this.name}.`,
//                 `\nI am a ${this.color} cat.`);
//   }
// }

// let cheddar = new Cat('Cheddar', 'ginger');
// let cheddarProto = Object.getPrototypeOf(cheddar);
// let cheddarProto2 = Object.getPrototypeOf(cheddarProto);

// // console.log(Object.getOwnPropertyNames(cheddarProto));
// // // ['constructor', 'whoAmI'];

// // console.log(Object.getOwnPropertyNames(cheddarProto2));
// // // ['constructor', 'eat'];



// console.log(cheddarProto2 === Animal.prototype); // true
// // cheddar.whoAmI();  // My name is Cheddar.
// //                    // I am a ginger cat.
// // cheddar.eat();     // I am eating.







// class Animal {}
// class Cat extends Animal {}

// let cat = new Cat();
// let catProto = Object.getPrototypeOf(cat);
// console.log(catProto);



// class Foo {
//   static identity() {
//     console.log('This is Foo.identity()');
//   }
// }

// class Bar {
//   static whoAmI() {
//     console.log('This is Bar.whoAmI()');
//   }
// }

// let foo = new Foo();
// let bar = new Bar();

// let fooProto = Object.getPrototypeOf(foo);
// let barProto = Object.getPrototypeOf(bar);


// console.log(fooProto);
// console.log(barProto);


// // Foo and Bar initially have Function.prototype as their
// // object prototypes.

// // The names `FooProto` and `BarProto` are not consistent
// // with JS conventions. We've done this intentionally for
// // clarity.

// let FooProto = Object.getPrototypeOf(Foo);
// console.log(FooProto === Function.prototype); // true

// let BarProto = Object.getPrototypeOf(Bar);
// console.log(BarProto === Function.prototype); // true

// // Let's change Bar's object prototype to Foo, which lets
// // Bar inherit Foo's static methods. However, Bar does
// // *not* inherit Foo's instance methods.
// Object.setPrototypeOf(Bar, Foo);

// // Bar can access both Bar.whoAmI and Foo.identity
// Bar.whoAmI();       // This is Bar.whoAmI()
// Bar.identity();     // This is Foo.identity()







// class Foo {
//   static identity() {
//     console.log('This is Foo.identity()');
//   }
// }

// class Bar {
//   static whoAmI() {
//     console.log('This is Bar.whoAmI()');
//   }
// }


// let FooProto = Object.getPrototypeOf(Foo);
// // console.log(FooProto === Function.prototype); // true

// let BarProto = Object.getPrototypeOf(Bar);
// // console.log(BarProto === Function.prototype); // true

// let third = new Bar();




// Object.setPrototypeOf(Bar, Foo);
// Object.setPrototypeOf(third, Bar);

// console.log(Foo.prototype);
// console.log(Bar.prototype);
// console.log(third.prototype);





// class Animal {
//   foo() {
//     console.log('this is foo');
//   }
// }

// Animal.prototype.foo = function() {
//   console.log('this is foo');
// };



// let cat = {
//   name: 'Fluffy',

//   makeNoise() {
//     console.log('Meow! Meow!');
//   },

//   eat() {
//     // implementation
//   },
// };

// let dog = {
//   name: 'Maxi',

//   makeNoise() {
//     console.log('Woof! Woof!');
//   },

//   eat() {
//     // implementation
//   },
// };

// let pete = {
//   name: 'Pete',
//   pets: [],
// };

// pete.pets.push(cat);
// pete.pets.push(dog);

// pete.pets[0].makeNoise();
// pete.pets[1].makeNoise();



// function createCar(make, fuelLevel, engineOn) {
//   return {
//     make,
//     fuelLevel,
//     engineOn,

//     startEngine() {
//       this.engineOn = true;
//     },

//     drive() {
//       this.fuelLevel -= 0.1;
//     },

//     stopEngine() {
//       this.engineOn = false;
//     },

//     refuel(percent) {
//       if ((this.fuelLevel + (percent / 100)) <= 1) {
//         this.fuelLevel += (percent / 100);
//       } else {
//         this.fuelLevel = 1;
//       }
//     },
//   };
// }

// let raceCar1 = createCar('BMW', 0.5, false);
// console.log(raceCar1.fuelLevel);
// raceCar1.drive();
// console.log(raceCar1.fuelLevel);

// let raceCar2 = createCar('Ferrari', 0.7, true);
// console.log(raceCar2.fuelLevel);
// raceCar2.drive();
// console.log(raceCar2.fuelLevel);

// let raceCar3 = createCar('Jaguar', 0.4, false);
// console.log(raceCar3.fuelLevel);
// raceCar3.drive();
// console.log(raceCar3.fuelLevel);







// const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// const LOSING_COMBOS = {
//   rock: ['paper', 'spock'],
//   paper: ['scissors', 'lizard'],
//   scissors: ['rock', 'spock'],
//   lizard: ['rock', 'scissors'],
//   spock: ['paper', 'lizard'],
// };

// let humanChoices = {
//   rock: 1,
//   paper: 2,
//   scissors: 2,
//   lizard: 0,
//   spock: 5,
// };

// let humanWeight = {};
// let computerWeight = {};
// let totalMoves = Object.values(humanChoices).reduce((acc, num) => acc + num, 0);


// let randomIndex = Math.random();
// console.log(randomIndex);

// for (let key in humanChoices) {
//   humanWeight[key] = humanChoices[key] / totalMoves;
// }

// choices.forEach(elem => {
//   LOSING_COMBOS[elem].forEach(item => {
//     computerWeight[item] = Math.round(((computerWeight[item] ?? 0) + ((humanWeight[elem] ?? 0) / 2)) * 100) / 100;
//   });
// });

// let array = Object.entries(computerWeight);
// let newArray = [];
// let sum = 0;

// array.forEach(elem => {
//   newArray.push([elem[0], (Math.round((elem[1] + sum) * 100) / 100)]);
//   sum += elem[1];
// });
// // console.log(newArray);

// let element = (newArray.find(elem => elem[1] > randomIndex))[0];

// console.log(element);















// let obj = {
//   a: 3.14,
//   b: null,
//   c: 'Sue',
//   d: function() { console.log('Hello'); },
//   e: { a: 3, b: 'xyz', c: [2, 5, 8] },
// };

// console.log(obj);









let book = {
  title: "Snow Crash",
  author: "Neal Stephenson",
  getDescription() {
    return title + ' by ' + author;
  },
};

// desired return value: 'Snow Crash by Neal Stephenson'
console.log(book.getDescription()); // => ReferenceError: title is not defined












































