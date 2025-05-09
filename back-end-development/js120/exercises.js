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