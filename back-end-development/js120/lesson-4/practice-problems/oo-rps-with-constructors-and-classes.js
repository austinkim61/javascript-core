// Constructors and Prototypes Version
// const readline = require('readline-sync');

// function Player() {
//   this.move = null;
// }

// function Human() {
//   Player.call(this);
// }

// Human.prototype.choose = function() {
//   let choice;
//   while (true) {
//     console.log('Please choose rock, paper, or scissors:');
//     choice = readline.question();
//     if (['rock', 'paper', 'scissors'].includes(choice)) break;
//     console.log('Sorry, invalid choice.');
//   }

//   this.move = choice;
// };

// function Computer() {
//   Player.call(this);
// }

// Computer.prototype.choose = function() {
//   const choices = ['rock', 'paper', 'scissors'];
//   let randomIndex = Math.floor(Math.random() * choices.length);
//   this.move = choices[randomIndex];
// };

// function RPSGame() {
//   this.human = new Human();
//   this.computer = new Computer();
// }

// RPSGame.prototype = {
//   displayWelcomeMessage() {
//     console.log('Welcome to Rock, Paper, Scissors!');
//   },

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!')
//   },

//   displayWinner() {
//     console.log(`You chose: ${this.human.move}`);
//     console.log(`The computer chose: ${this.computer.move}`);

//     let humanMove = this.human.move;
//     let computerMove = this.computer.move;

//     if ((humanMove === 'rock' && computerMove === 'scissors') ||
//       (humanMove === 'paper' && computerMove === 'rock') ||
//       (humanMove === 'scissors' && computerMove === 'paper')) {
//       console.log('You win!');
//     } else if ((humanMove === 'rock' && computerMove === 'paper') ||
//       (humanMove === 'paper' && computerMove === 'scissors') ||
//       (humanMove === 'scissors' && computerMove === 'rock')) {
//       console.log('Computer wins!');
//     } else {
//       console.log("It's a tie");
//     }
//   },

//   playAgain() {
//     console.log('Would you like to play again? (y/n)');
//     let answer = readline.question();
//     return answer.toLowerCase()[0] === 'y';
//   },

//   play() {
//     this.displayWelcomeMessage();
//     while (true) {
//       this.human.choose();
//       this.computer.choose();
//       this.displayWinner();
//       if (!this.playAgain()) break;
//     }
//     this.displayGoodbyeMessage();
//   },
// };

// RPSGame.prototype.constructor = RPSGame;

// let game = new RPSGame();
// game.play();

// console.log(Human.prototype.constructor);





// Classes Version
const readline = require('readline-sync');

class Player {
  constructor() {
    this.move = null;
  }

  /*choose() {
    if (this instanceof Human) {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    } else if (this instanceof Computer) {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    }
  }*/
}

class Human extends Player {
  constructor() {
    super();
  }

  choose() {
    let choice;

    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      choice = readline.question();
      if (['rock', 'paper', 'scissors'].includes(choice)) break;
      console.log('Sorry, invalid choice.');
    }

    this.move = choice;
  }
}

class Computer extends Player {
  constructor() {
    super();
  }

  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    this.move = choices[randomIndex];
  }
}

class RPSGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!')
  }

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  }

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  }

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }
}

let game = new RPSGame();
game.play();