const p = console.log;
// Problem 1
// let qux = { foo: 1 };
// let baz = Object.create(qux);
// console.log(baz.foo + qux.foo);

// // answer => logs 2 because baz doesn't have its own copy of foo but JavaScript will search the prototype chain for the foo property, which exists in qux





// Problem 2
// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;

// console.log(baz.foo + qux.foo);

// // answer => logs 3 because baz.foo is added as a property with a value of 2 so it has its own value of foo.





// Problem 3
// let qux = { foo: 1 };
// let baz = Object.create(qux);
// qux.foo = 2;

// console.log(baz.foo + qux.foo);

// // answer => logs 4 because baz does not have the foo property itself and JavaScript searches the prototype chain and qux's foo property has a value of 2





// Problem 4
// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// function assignProperty(object, property, value) {
//   if (property in object) {
//     while (object !== null) {
//       if (object.hasOwnProperty(property)) {
//         object[property] = value;
//         break;
//       }
//       object = Object.getPrototypeOf(object);
//     }
//   }
// }

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false



// Alternate
// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// function assignProperty(obj, property, value) {
//   if (obj === null) { // property not found
//     return;
//   } else if (obj.hasOwnProperty(property)) {
//     obj[property] = value;
//   } else {
//     assignProperty(Object.getPrototypeOf(obj), property, value);
//   }
// }

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false





// Problem 5
// let bar = { a: 1, b: 2 };
// let foo = Object.create(bar);
// foo.a = 3;
// foo.c = 4;

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`);
// });

// answer => Object.keys(foo) will not return log anything if foo does not have the property as its own property
//           but for/in iterates over properties from objects in its prototype chain





// Problem 6
// answer => create an object without a prototype by the below code
//           determine whether an object has a prototype with Object.getPrototypeOf()
// let a = Object.create(null);

// p(a);
// p(Object.getPrototypeOf(a));

// if (Object.getPrototypeOf(a)) {
//   p('has a prototype');
// } else {
//   p('does not have a prototype');
// }