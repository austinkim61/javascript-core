// Problem 1
// let book1 = {
//   title: 'Mythos',
//   author: 'Stephen Fry',
//   getDescription: function() {
//     console.log(`${this.title} was written by ${this.author}.`)
//   },
// };

// let book2 = {
//   title: 'Me Talk Pretty One Day',
//   author: 'David Sedaris',
//   getDescription: function() {
//     console.log(`${this.title} was written by ${this.author}.`)
//   },
// };

// let book3 = {
//   title: "Aunts aren't Gentlemen",
//   author: 'PG Wodehouse',
//   getDescription: function() {
//     console.log(`${this.title} was written by ${this.author}.`)
//   },
// };

// book1.getDescription();
// book2.getDescription();
// book3.getDescription();





// Problem 2
/*
Any unnecessary code?
  - lots
Does it have duplication?
  - getDescription
*/





// Problem 3
// function createBook(title, author) {
//   return {
//     title,
//     author,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}.`);
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// book1.getDescription();
// book2.getDescription();
// book3.getDescription();





// Problem 4
// function createBook(title, author) {
//   return {
//     title,
//     author,
//     read: false,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}.`);
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// book1.getDescription();
// book2.getDescription();
// book3.getDescription();

// console.log(book1.read);
// console.log(book2.read);
// console.log(book3.read);





// Problem 5
// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}.`);
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry', true);
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

// book1.getDescription();
// book2.getDescription();
// book3.getDescription();

// console.log(book1.read);
// console.log(book2.read);
// console.log(book3.read);





// Problem 6
// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}.`);
//     },
//     readBook() {
//       this.read = true;
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry', true);
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', false);

// console.log(book1.read);
// console.log(book2.read);
// console.log(book3.read);

// book1.readBook();
// book2.readBook();
// book3.readBook();

// console.log(book1.read);
// console.log(book2.read);
// console.log(book3.read);





// Problem 7
function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}. I ${this.read ? 'have' : "haven't"} read it.`);
    },

    readBook() {
      this.read = true;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry', false);
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', false);

book1.getDescription();
book2.getDescription();
book3.getDescription();

book1.readBook();
book2.readBook();
book3.readBook();

book1.getDescription();
book2.getDescription();
book3.getDescription();