const readline = require('readline-sync');
const GRAND_WINNER = 5;
const MOVE_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

const LOSING_COMBOS = {
  rock: ['paper', 'spock'],
  paper: ['scissors', 'lizard'],
  scissors: ['rock', 'spock'],
  lizard: ['rock', 'scissors'],
  spock: ['paper', 'lizard'],
};

const RPSGame = {
  human: createHuman(),
  computer: null,

  init() {
    this.human = createHuman(this);
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
    this.computer.choices[computerMove]
      = ((this.computer.choices[computerMove] ?? 0) + 1);
  },

  computerChoose() {
    let randomDecimal = Math.random();
    let array = Object.entries(this.computer.weight);
    let newArray = [];
    let sum = 0;

    array.forEach(elem => {
      newArray.push([elem[0], (Math.round((elem[1] + sum) * 100) / 100)]);
      sum += elem[1];
    });

    if (this.computer.totalMoves === 0) {
      let randomIndex = Math.floor(Math.random() * MOVE_CHOICES.length);
      this.computer.move = MOVE_CHOICES[randomIndex];
    } else {
      this.computer.move = (newArray.find(elem => elem[1] > randomDecimal))[0];
    }
  },

  humanChoose() {
    let choice;
    while (true) {
      console.log('Please choose rock, paper, scissors, lizard, or spock');
      choice = readline.question().trim().toLowerCase();
      if (MOVE_CHOICES.includes(choice)) break;
      console.log('Sorry, invalid choice.');
    }
    this.human.move = choice;
  },

  updateWeights() {
    for (let key in this.human.choices) {
      this.human.weight[key] =
        this.human.choices[key] / this.human.totalMoves;
    }

    MOVE_CHOICES.forEach(elem => {
      LOSING_COMBOS[elem].forEach(item => {
        this.computer.weight[item] = Math.round(((this.computer.weight[item]
          ?? 0) + ((this.human.weight[elem] ?? 0) / 2)) * 100) / 100;
      });
    });
  },

  updateComputerTotalNumberOfMoves() {
    this.computer.totalMoves = Object.values(this.computer.choices)
      .reduce((acc, num) => acc + num, 0);
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
    this.human.choices = {};
    this.computer.choices = {};
    this.human.weight = {};
    this.computer.weight = {};
    this.human.move = null;
    this.computer.move = null;
    this.human.score = 0;
    this.computer.score = 0;
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.computer.choose();
      this.human.choose();
      this.displayWinner();
      this.updateComputerTotalNumberOfMoves();
      this.updateWeights();
      this.determineOverallWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

function createPlayer() {
  return {
    choices: {},
    weight: {},
    move: null,
    score: 0,
    totalMoves: 0,
  };
}

function createHuman(game) {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      game.humanChoose();
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
  };

  return Object.assign(playerObject, computerObject);
}

RPSGame.init();