// class Game {
//   play() {
//     return 'Start the game!';
//   }
// }

// class Bingo extends Game {
//   rulesOfPlay() {
//     // rules of play
//   }

//   play() {
//     return 'Bingo';
//   }
// }

// let bingo = new Bingo();

// console.log(bingo.play());

// // it will call the method that is on Bingo since it is there. called method overriding







class Greeting {
  greet(string) {
    console.log(string);
  }
};

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
};


class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye');
  }
};

let firstHello = new Hello();
let firstGoodbye = new Goodbye();

firstHello.hi();
firstGoodbye.bye();











































































































































