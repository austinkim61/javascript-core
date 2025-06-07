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





// 7. Code Reuse with Mixins
// Problem 1
// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   }
// };

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }

// Object.assign(Car.prototype, Speed);
// Object.assign(Truck.prototype, Speed);

// let car1 = new Car();
// let truck1 = new Truck();

// car1.goFast();
// truck1.goFast();

// console.log('goFast' in car1);
// console.log('goFast' in truck1);



// Problem 2
/*
Object.assign is used to add Speed's properties to class Car's prototye.
the code this.constructor.name is how it knows the name of the class.
this would be the Car.prototype object so the code would be Car.prototype.constructor.name
the name of the car's prototype's constructor is the name of the class itself, so it would be Car
constructor has a name property that contains the name of the class as a string
*/



// Problem 3
const Moveable = {
  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Moveable);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Moveable);



































