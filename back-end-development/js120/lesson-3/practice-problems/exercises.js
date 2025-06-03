




// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = new Lizard();
// lizzy.scamper(); // ?









// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }
// let dog1 = new Dog('name1', 'breed1', 1)
// let dog2 = new Dog('name2', 'breed2', 2)
// let dog3 = new dog1.constructor('name3', 'breed3', 3)

// console.log(dog1);
// console.log(dog2);
// console.log(dog3);









// let DogPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, DogPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype = DogPrototype;

// let maxi = new Dog('Maxi', 'German Shepherd', 32);


// // console.log(maxi.bark());
// console.log(Dog.prototype.bark());








// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

// }

// Dog.allDogs = [];
// Dog.species = 'Canis lupus';
// Dog.kingdom = 'animal';








let arrayFrom = obj => {
  let len = obj.length;
  let returnArr = [];

  for (let idx = 0; idx < len; idx += 1) {
    returnArr.push(obj[idx]);
  }

  return returnArr;
};

console.log(arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 3}));
// => [ 'a', 'b', 'c' ]










































































































