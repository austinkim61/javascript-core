// Types and Objects Exercises
// Exercise 1
// let cessna152 = {
//   fuelCapacityInGallons: 24.5, // state
//   cruisingSpeedInKnots: 111, // state

//   takeOff() {
//     console.log('Taking off!'); // behavior
//   },

//   land() {
//     console.log('Landing!'); // behavior
//   },
// };

// Alternate
// let cessna152 = {
//   fuelCapacityInGallons: 24.5, // state
//   cruisingSpeedInKnots: 111, // state

//   takeOff: function() {
//     console.log('Taking off!'); // behavior
//   },

//   land: function() {
//     console.log('Landing!'); // behavior
//   },
// };

// cessna152.takeOff();
// cessna152.land();



// Exercise 2
// function Book(title, author, published) {
//   this.title = title;
//   this.author = author;
//   this.published = published;
// }

// let neuromancer = new Book('Neuromancer', 'William Gibson', 1984);
// let doomsdayBook = new Book('Doomsday Book', 'Connie Willis', 1992);

// console.log(neuromancer);
// console.log(doomsdayBook);
// object type is Book
// constructor is the Book function
// instances objects are the objects assigned to neuromancer and doomsdayBook



// Exercise 3
// function Album(title, artist, year) {
//   this.title = title;
//   this.artist = artist;
//   this.year = year;
// }

// let thriller = new Album('Thriller', 'Michael Jackson', 1982);
// let theDarkSideOfTheMoon = new Album('The Dark Side of the Moon', 'Pink Floyd', 1973);

// console.log(thriller);
// console.log(theDarkSideOfTheMoon);
// object type is Album
// constructor is the Album function
// instance objects are the objects assigned to thriller and darkSideOfTheMoon



// Exercise 4
// function Smartphone(brand, model, releaseYear) {
//   this.brand = brand;
//   this.model = model;
//   this.releaseYear = releaseYear;

//   this.battery = function() {
//     return `${this.brand} ${this.model} has 69% battery remaining.`;
//   };

//   this.displayInfo = function() {
//     return `${this.releaseYear} ${this.brand} ${this.model}`;
//   };
// }

// let apple = new Smartphone('Apple', 'iPhone 12', 2020);
// let samsung = new Smartphone('Samsung', 'Galaxy S21', 2021);

// console.log(apple.battery());
// console.log(apple.displayInfo());
// console.log(samsung.battery());
// console.log(samsung.displayInfo());





// The Object Model Exercises
// Exercise 1
/*
Application that manages different types of animals such as dogs, cats, and birds
Each animal can eat, sleep, make sounds, etc., but they do so in different ways

Which concepts discussed in this chapter most closely describes the features of the scenario described above?

=> Polymorphism: each animal is a different species but each has behaviors that are specific to that animal
*/



// Exercise 2
/*
Application that uses and manipulates objects that represent automobiles
Each automobile has a make, model, year, and methods that provide the ability to start, drive, and park the vehicle
All automobiles share the same set of methods, but the make, model, and year will vary between automobiles

Which of the concepts discussed in this chapter most closely describes the features of the scenario described above?

=> Encapsulation: each automobile has different state but they all share the same behaviors
*/



// Exercise 3
/*
Given the application desribed in the previous exercise, which items are part of an automobile's state? Which items provide its behavior?

=> State: make, model, and year
=> Behavior: start, drive, and park
*/



// Exercise 4
/*
Application that manages a collection of living things, including plants and animals
Plants include trees and flowers, while animals include mammals and birds

Which of the concepts discussed in this chapter most closely describes the feature of the scenario described above?

=> Inheritance:
  - plants and animals would inherit from a type that includes living things
  - trees and flowers would inherit from a plants type
  - mammals and birds would inherit from the animals

*/





// Object Factories Exercises
// Exercise 1
// function createFruit(name, color) {
//   return {
//     name,
//     color,

//     isRipe() {
//       return `This ${this.name} is ripe.`;
//     },

//     describe() {
//       return `This ${this.name} is ${this.color}.`
//     },
//   };
// }

// let apple = createFruit('Apple', 'Red');
// let banana = createFruit('Banana', 'Yellow');
// let blackberry = createFruit('Blackberry', 'Black');

// console.log(apple.isRipe());
// console.log(apple.describe());

// console.log(banana.isRipe());
// console.log(banana.describe());

// console.log(blackberry.isRipe());
// console.log(blackberry.describe());



// Exercise 2
// function smartphone(brand, model, releaseYear) {
//   return {
//     brand,
//     model,
//     releaseYear,

//     checkBatteryLevel() {
//       return `${this.brand} ${this.model} has 69% battery remaining.`
//     },

//     displayInfo() {
//       return `${this.releaseYear} ${this.brand} ${this.model}`
//     },
//   };
// }

// let iphone12 = smartphone('Apple', 'iPhone 12', 2020);
// let galaxyS21 = smartphone('Samsung', 'Galaxy S21', 2021);

// console.log(iphone12.checkBatteryLevel());
// console.log(iphone12.displayInfo());

// console.log(galaxyS21.checkBatteryLevel());
// console.log(galaxyS21.displayInfo());



// Exercise 3
// function createInstrument(name, type) {
//   return {
//     name,
//     type,

//     play() {
//       console.log(`We are playing a tune on this ${this.name}`);
//     },

//     showType() {
//       console.log(`This ${this.name} is a ${this.type} instrument`);
//     },
//   };
// }

// let violin = createInstrument('violin', 'string');
// violin.play();
// violin.showType();

// let flute = createInstrument('flute', 'wind');
// flute.play();
// flute.showType();

// let drum = createInstrument('drum', 'percussion');
// drum.play();
// drum.showType();





// Classes Exercises
// Exercise 1
// class Smartphone {
//   constructor(brand, model, releaseYear) {
//     this.brand = brand;
//     this.model = model;
//     this.releaseYear = releaseYear;
//   }

//   checkBatteryLevel() {
//     return `${this.brand} ${this.model} has 69% battery remaining.`;
//   }

//   displayInfo() {
//     return `${this.releaseYear} ${this.brand} ${this.model}`;
//   }
// }

// const iphone12 = new Smartphone('Apple', 'iPhone 12', 2020);
// const galaxyS21 = new Smartphone('Samsung', 'Galaxy S21', 2021);

// console.log(iphone12.checkBatteryLevel());
// console.log(iphone12.displayInfo());

// console.log(galaxyS21.checkBatteryLevel());
// console.log(galaxyS21.displayInfo());

// console.log(iphone12);
// console.log(galaxyS21);



// Exercise 2
// If you have a Dog class and an object assigned to a variable named boo, how can you tell whether the object is an instance of the Dog class?

// => console.log(boo instanceof Dog); // true if 'boo' is a Dog, false if it is not
// => console.log(boo); // Dog { name: 'Boo', color: 'chocolate', age: 3 }



// Exercise 3
// class Vehicle {
//   constructor(color, weight, model) {
//     this.color = color;
//     this.weight = weight;
//     this.model = model
//   }

//   accelerate() {
//     return `${this.model} is accelerating.`;
//   }

//   decelerate() {
//     return `${this.model} is decelerating.`;
//   }
// }

// class Car extends Vehicle {
//   constructor(color, weight, model, licenseNumber) {
//     super(color, weight, model);
//     this.model = model;
//     this.licenseNumber = licenseNumber;
//   }

//   honk() {
//     return `Honk honk.`;
//   }
// }

// class Boat extends Vehicle {
//   constructor(color, weight, model, homePort) {
//     super(color, weight, model);
//     this.model = model;
//     this.homePort = homePort;
//   }

//   dropAnchor() {
//     return 'Dropping anchor.';
//   }
// }

// class Plane extends Vehicle {
//   constructor(color, weight, model, airlineName) {
//     super(color, weight, model);
//     this.model = model;
//     this.airlineName = airlineName;
//   }

//   takeOff() {
//     return 'Taking off.';
//   }

//   land() {
//     return 'Landing.';
//   }
// }

// const honda = new Car('Black', 5000, 'Honda', 'ASS-6969');
// const boatyMcBoatFace = new Boat('Darker Black', 50000, 'Speedboat', 'Antarctica');
// const boeing = new Plane('Slightly Darker Black', 500000, '757', 'American Airlines');

// console.log(honda);
// console.log(boatyMcBoatFace);
// console.log(boeing);
// console.log(honda.honk());
// console.log(boatyMcBoatFace.dropAnchor());
// console.log(boeing.takeOff());
// console.log(boeing.land());
// console.log(honda.accelerate());
// console.log(honda.decelerate());
// console.log(boatyMcBoatFace.accelerate());
// console.log(boatyMcBoatFace.decelerate());
// console.log(boeing.accelerate());
// console.log(boeing.decelerate());



// Exercise 4
// console.log(honda instanceof Vehicle);
// console.log(boatyMcBoatFace instanceof Vehicle);
// console.log(honda instanceof Car);
// console.log(boatyMcBoatFace instanceof Car);





// More About Classes Exercises
// Exercise 1
// class Person {
//   #name;
//   #age;

//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }

//   get name() {
//     return this.#name;
//   }

//   get age() {
//     return this.#age;
//   }

//   showName() {
//     console.log(this.#name);
//   }

//   showAge() {
//     console.log(this.#age);
//   }

//   set age(age) {
//     if (typeof(age) === 'number' && age > 0) {
//       this.#age = age;
//     } else {
//       throw new RangeError('Age must be positive');
//     }
//   }
// }

// let person = new Person('John', 30);
// person.showAge(); // 30
// person.age = 31;
// person.showAge(); // 31

// try {
//   // This line should raise a RangeError,
//   // but does not.
//   person.age = -5;
//   person.showAge(); // -5
// } catch (e) {
//   // The following line should run, but won't
//   console.log('RangeError: Age must be positive');
// }



// Exercise 2
// class Book {
//   #title;
//   #author;
//   #year;

//   constructor(title, author, year) {
//     this.#title = title;
//     this.#author = author;
//     this.year = year;
//   }

//   get title() {
//     return this.#title;
//   }

//   get author() {
//     return this.#author;
//   }

//   get year() {
//     return this.#year;
//   }

//   set year(year) {
//     if (typeof(year) === 'number' && year >= 1900) {
//       this.#year = year;
//     } else {
//       throw new RangeError('Invalid year');
//     }
//   }
// }


// let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
// console.log(book.title);  // The Great Gatsby
// console.log(book.author); // F. Scott Fitzgerald
// console.log(book.year);   // 1925

// book.year = 1932;         // Changing year
// console.log(book.year);   // 1932


// try {
//   book.year = 1825;
// } catch (e) {
//   console.log(e);   // RangeError: Invalid year
// }

// try {
//   let book2 = new Book('A Tale of Two Cities', 'Charles Dickents', 1859);
// } catch (e) {
//   console.log(e);   // RangeError: Invalid year
// }



// Exercise 3
// class BankAccount{
//   #balance = 0;

//   #checkBalance() {
//     console.log(`Current balance: $${this.#balance}`);
//   }

//   deposit(amount) {
//     this.#balance += amount;
//     this.#checkBalance();
//   }

//   withdraw(amount) {
//     if (this.#balance >= amount) {
//       this.#balance -= amount;
//       this.#checkBalance();
//     } else {
//       throw new RangeError('Insufficient funds');
//     }
//   }
// }

// let account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);
// account.withdraw(100); // RangeError: Insufficient funds



// Exercise 4
// class Rectangle {
//   #width;
//   #height;

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get width() {
//     return this.#width;
//   }

//   get height() {
//     return this.#height;
//   }

//   get area() {
//     return this.width * this.height;
//   }

//   set width(width) {
//     if (typeof (width) === 'number' && width > 0) {
//       this.#width = width;
//     } else {
//       throw new RangeError('width must be positive');
//     }
//   }

//   set height(height) {
//     if (typeof (height) === 'number' && height > 0) {
//       this.#height = height;
//     } else {
//       throw new RangeError('height must be positive');
//     }
//   }
// }

// let rect = new Rectangle(10, 5);
// console.log(rect.area);

// rect.width = 20;
// console.log(rect.area);

// rect.height = 12;
// console.log(rect.area);

// try {
//   rect.width = 0;
// } catch (e) {
//   console.log(e);
// }

// try {
//   rect.height = -10;
// } catch (e) {
//   console.log(e);
// }



// Exercise 5
class MathUtils {

  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1, num2) {
    return num1 - num2;
  }

  static multiply(num1, num2) {
    return num1 * num2;
  }

  static divide(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      throw new RangeError('Division by zero');
    }
  }
}


console.log(MathUtils.add(5, 3));
console.log(MathUtils.subtract(10, 4));
console.log(MathUtils.multiply(6, 7));
console.log(MathUtils.divide(20, 5));
console.log(MathUtils.divide(10, 0));





// Protptypal Inheritance Exercises
// Exercise 1








// Exercise 2













