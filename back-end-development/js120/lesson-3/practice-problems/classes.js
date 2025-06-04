// Problem 1
// they can be used any place that you can use an expression or declaration
// they can be passed around to functions, returned from functions, assigned to variables, and used anywhere a value is expected









// Problem 2
class Television {
  static manufacturer() {
    // omitted code
    return 'this can be returned by class';

  }

  model() {
    // method logic
    return 'this can be returned by instance';

  }
}

let samsung = new Television;

console.log(Television.manufacturer());
console.log(samsung.model());
// console.log(Television.model());
// console.log(samsung.manufacturer());

// answer
// the static modifier when used with a method declaration, makes the property or methods belong to the class itself rather than to class instances
// it is defined directly on the class and not on the objects the class creates
// to call the manufacturer method, call it via Television.manufacturer()






