const readline = require('readline-sync');
const GAMES_TO_WIN = 5;
const MARKS_TO_WIN = 3;

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log(``);
    console.log(`     |     |`);
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log(`     |     |`);
    console.log(``);
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isFull() {
    let unusedSquares = this.unusedSquares();
    return unusedSquares.length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }



  displayWithClear() {
    // console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];

  static joinOr(arr, delimiter = ', ', word = 'or') {
    let allButLast = arr.join(delimiter).slice(0, -1);
    let last = arr.slice(-1);
    switch (arr.length) {
      case 1:
        return arr.join('');
      case 2:
        return `${arr[0]} ${word} ${last}`;
      default:
        return `${allButLast}${word} ${last}`;
    }
  }

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }


  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.playOneGame();
      if (!this.playAgain()) break;

      console.log("Let's play again!");
      console.log('');
    }

    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.board.reset();
    this.board.display();

    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
  }

  playAgain() {
    let choice;

    while (true) {
      choice = readline.question('Play again? (y/n): ')[0].toLowerCase();

      if (['y', 'n'].includes(choice)) break;
      console.log("Sorry, that's not a valid choice.");
      console.log('');
    }

    // console.clear();
    return choice === 'y';
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("Computer is the winner.");
    } else {
      console.log("It's a tie game.");
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  // computerMoves() {
  //   let validChoices = this.board.unusedSquares();
  //   let choice;

  //   // if player about to win, do defensive move
  //   // determine twoInARow

  //   do {
  //     choice = Math.floor((9 * Math.random()) + 1).toString();
  //   } while (!validChoices.includes(choice));

  //   this.board.markSquareAt(choice, this.computer.getMarker());
  // }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }








  computerMoves() { // refactor to have other methods and this order:
    // win
    // defensive
    // 5
    // random

    let validChoices = this.board.unusedSquares();
    let choice;
    let array;

    if (validChoices.includes("5")) {
      console.log('5');
      choice = "5";
    } else {
      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    for (let line = 0; line < TTTGame.POSSIBLE_WINNING_ROWS.length; line++) {

      if ((this.board.countMarkersFor(this.computer, TTTGame.POSSIBLE_WINNING_ROWS[line]) === 2) // offensive
        && (this.board.countMarkersFor(this.human, TTTGame.POSSIBLE_WINNING_ROWS[line]) === 0)) {

        array = TTTGame.POSSIBLE_WINNING_ROWS[line];
        choice = validChoices.find(x => array.includes(x));
        return this.board.markSquareAt(choice, this.computer.getMarker());
      }
    }

    for (let line = 0; line < TTTGame.POSSIBLE_WINNING_ROWS.length; line++) {
      if ((this.board.countMarkersFor(this.human, TTTGame.POSSIBLE_WINNING_ROWS[line]) === 2) // defensive
        && (this.board.countMarkersFor(this.computer, TTTGame.POSSIBLE_WINNING_ROWS[line]) === 0)) {

        array = TTTGame.POSSIBLE_WINNING_ROWS[line];
        choice = validChoices.find(x => array.includes(x));
        return this.board.markSquareAt(choice, this.computer.getMarker());
      }
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }
}




let game = new TTTGame();
game.play();

