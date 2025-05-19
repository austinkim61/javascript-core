// let myObject = { };

// myObject[false] = "one"
// myObject[7] = "two"
// myObject[[1, 2, 3]] = "three"
// myObject[{a: 'b'}] = "four"

// console.log(Object.keys(myObject));


// myObject["false"]
// myObject["7"]
// myObject["1,2,3"]
// console.log(myObject['[object Object]']);


// let myObject = { };
// myObject["akey"] = 'four';
// console.log(myObject.akey);
// console.log(myObject["akey"]);


let arr = [1, 2, 3];
console.log(arr.propertyIsEnumerable('length'));                     // false
console.log(arr.propertyIsEnumerable('2'));                          // true
console.log(arr.propertyIsEnumerable('forEach'));                    // false
console.log(Array.prototype.propertyIsEnumerable('forEach'));        // false

function Foo() {
  this.bar = "qux"
}

Foo.prototype.baz = function() {};
let foo = new Foo();
console.log(foo.propertyIsEnumerable('bar'));                        // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable('baz')); // true
console.log(foo.propertyIsEnumerable('baz')); // false











