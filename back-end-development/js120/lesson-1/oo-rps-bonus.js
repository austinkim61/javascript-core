const readline = require('readline-sync');
const GRAND_WINNER = 5;
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

const RPSGame = {
  human: createHuman(),
  computer: null,

  init() {
    this.computer = createComputer(this);
    this.play();
  },









  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard Spock. Goodbye!');
  },

  logChoices(humanMove, computerMove) {
    this.human.choices[humanMove] = ((this.human.choices[humanMove] ?? 0) + 1);
    this.computer.choices[computerMove] = ((this.computer.choices[computerMove] ?? 0) + 1);
  },

  computerChoose() {

    // get key value pairs and determine highest hands of user
    // add randomization element

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    this.computer.move = choices[randomIndex];





  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    this.logChoices(humanMove, computerMove);

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (this.determineRoundWinner(humanMove, computerMove)) {
      console.log('You win this round!');
      this.human.score++;
    } else if (this.determineRoundWinner(computerMove, humanMove)) {
      console.log('Computer wins this round!');
      this.computer.score++;
    } else {
      console.log("It's a tie");
    }
    console.log(`Human won ${this.human.score} ${this.human.score !== 1 ? 'times' : 'time'} and computer won ${this.computer.score} ${this.computer.score !== 1 ? 'times' : 'time'}.`);
    console.log(this.human.choices);
    console.log(this.computer.choices);
  },

  determineRoundWinner(player1, player2) {
    return WINNING_COMBOS[player1].includes(player2);
  },

  determineOverallWinner() {
    if (this.human.score === GRAND_WINNER) {
      console.log(`Human is the overall winner!`);
      this.clearEverything();
    } else if (this.computer.score === GRAND_WINNER) {
      console.log(`Computer is the overall winner!`);
      this.clearEverything();
    }
  },

  clearEverything() {
    this.human.score = 0;
    this.computer.score = 0;
    this.human.choices = {};
    this.computer.choices = {};
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.determineOverallWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

function createPlayer() {
  return {
    choices: {},
    move: null,
    score: 0,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard, or spock');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }
      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer(game) {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      game.computerChoose();
    },


    // choose() {
    //   const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    //   let randomIndex = Math.floor(Math.random() * choices.length);
    //   this.move = choices[randomIndex];
    // },
  };

  return Object.assign(playerObject, computerObject);
}

// RPSGame.play();
RPSGame.init();