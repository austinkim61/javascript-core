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


let myObject = { };
myObject["akey"] = 'four';
console.log(myObject.akey);
console.log(myObject["akey"]);


