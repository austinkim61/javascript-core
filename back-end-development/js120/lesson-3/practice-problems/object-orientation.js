// Problem 1
// let scissor = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// };




// Problem 2
// let scissor = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// };

// function setProducePrice(product, newPrice) {
//   return newPrice < 0 ? console.log('New price is invalid.') : product.price = newPrice;
// }

// updatePsetProducePricerice(scissor, -1);
// console.log(scissor);





// Problem 3
// let scissor = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// };

// function setProducePrice(product, newPrice) {
//   return newPrice < 0 ? console.log('New price is invalid.') : product.price = newPrice;
// }

// function describeProduct(product) {
//   console.log(`Name: ${product.name}`);
//   console.log(`ID: ${product.id}`);
//   console.log(`Price: $${product.price}`);
//   console.log(`Stock: ${product.stock}`);
// }

// describeProduct(scissor);





// Problem 4
// let scissor = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,

//   setPrice(newPrice) {
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       console.log('New price is invalid.');
//     }
//   },

//   describe() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: $${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   },
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,

//   setPrice(newPrice) {
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       console.log('New price is invalid.');
//     }
//   },

//   describe() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: $${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   },
// };





// Problem 5
// function createProduct(id, name, stock, price) {
//   return {
//     id,
//     name,
//     stock,
//     price,

//     setPrice(newPrice) {
//       if (newPrice >= 0) {
//         this.price = newPrice;
//       } else {
//         console.log('New price is invalid.');
//       }
//     },

//     describe() {
//       console.log(`Name: ${this.name}`);
//       console.log(`ID: ${this.id}`);
//       console.log(`Price: $${this.price}`);
//       console.log(`Stock: ${this.stock}`);
//     },
//   };
// }



// Launch School Solution
// function createProduct(id, name, stock, price) {
//   let newProduct = {};
//   newProduct.id = id;
//   newProduct.name = name;
//   newProduct.stock = stock;
//   newProduct.price = price;

//   newProduct.setPrice = function(newPrice) {
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       console.log('New price is invalid.');
//     }
//   };

//   newProduct.describe = function() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: $${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   };

//   return newProduct;
// }





// Problem 6
// function createProduct(id, name, stock, price) {
//   return {
//     id,
//     name,
//     stock,
//     price,

//     setPrice(newPrice) {
//       if (newPrice >= 0) {
//         this.price = newPrice;
//       } else {
//         console.log('New price is invalid.');
//       }
//     },

//     describe() {
//       console.log(`Name: ${this.name}`);
//       console.log(`ID: ${this.id}`);
//       console.log(`Price: $${this.price}`);
//       console.log(`Stock: ${this.stock}`);
//     },
//   };
// }

// let scissors = createProduct(0, 'Scissors', 8, 10);
// let drill = createProduct(1, 'Drill', 15, 45);

// scissors.setPrice(-50000);
// scissors.setPrice(50000);
// scissors.describe();
// drill.setPrice(-50000);
// drill.setPrice(50000);
// drill.describe();


// Launch School Solution
// function createProduct(id, name, stock, price) {
//   let newProduct = {};
//   newProduct.id = id;
//   newProduct.name = name;
//   newProduct.stock = stock;
//   newProduct.price = price;

//   newProduct.setPrice = function(newPrice) {
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       console.log('New price is invalid.');
//     }
//   };

//   newProduct.describe = function() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: $${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   };

//   return newProduct;
// }

// let scissors = createProduct(0, 'Scissors', 8, 10);
// let drill = createProduct(1, 'Drill', 15, 45);

// scissors.setPrice(-50000);
// scissors.setPrice(50000);
// scissors.describe();
// drill.setPrice(-50000);
// drill.setPrice(50000);
// drill.describe();
