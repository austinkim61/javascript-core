const readline = require('readline-sync');

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
    return keys.filter(key => this.isUnusedSquare(key));
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.wins = 0;
    this.turn = false;
  }

  getMarker() {
    return this.marker;
  }

  getWins() {
    return this.wins;
  }

  incrementWins() {
    this.wins++;
  }

  getTurn() {
    return this.turn;
  }

  isTurn() {
    this.turn = true;
  }

  isNotTurn() {
    this.turn = false;
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
  static MATCH_GOAL = 3;
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
    this.playMatch();
    this.displayGoodbyeMessage();




    // while (true) {
    //   this.playOneGame();

    //   // if (this.someoneWonThreeGames()) break;
    //   if (!this.playAgain()) break;

    //   console.log("Let's play again!");
    //   console.log('');
    // }

    // // this.matchWinner();

  }

  playMatch() {
    console.log(`First player to win ${TTTGame.MATCH_GOAL} games wins the match.`);

    // determineWhoGoesFirst();

    while (true) {
      this.playOneGame();
      this.updateMatchScore();
      this.displayMatchScore();

      if (this.matchOver()) break;
      if (!this.playAgain()) break;
    }

    this.displayMatchResults();
  }

  matchOver() {
    return this.isMatchWinner(this.human) || this.isMatchWinner(this.computer);
  }

  isMatchWinner(player) {
    return player.getWins() >= TTTGame.MATCH_GOAL;
  }

  updateMatchScore() {
    if (this.isWinner(this.human)) {
      this.human.incrementWins();
    } else if (this.isWinner(this.computer)) {
      this.computer.incrementWins();
    }
  }

  displayMatchScore() {
    let human = this.human.getWins();
    let computer = this.computer.getWins();
    console.log(`Current match score: [you: ${human}] [computer: ${computer}]`);
  }

  displayMatchResults() {
    if (this.human.getWins() > this.computer.getWins()) {
      console.log("You won the match! Congratulations!");
    } else if (this.human.getWins < this.computer.getWins()) {
      console.log("Computer won the match.");
    }
  }








  determineWhoMoves() {
    if (this.human.getTurn()) { // if this.human.isTurn() === true
      this.human.isNotTurn(); // switch method to replace
      this.computer.isTurn();
      return this.humanMoves();
    } else {
      this.computer.isNotTurn();
      this.human.isTurn();
      return this.computerMoves();
    }
  }






  playOneGame() {
    this.board.reset();
    this.board.display();

    // let firstPlayer;
    // let secondPlayer;

    // determineWhoGoesFirst(firstPlayer, secondPlayer);

    while (true) {

      // this.determineWhoMoves();
      this.humanMoves();
      if (this.gameOver()) break;


      // this.determineWhoMoves();
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

    console.clear();
    console.log("");
    console.log("");
    console.log("");
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
      // this.human.wins++;
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      // this.computer.wins++;
      console.log("Computer is the winner.");
    } else {
      console.log("It's a tie game.");
    }
    console.log(`Human wins: ${this.human.wins}`);
    console.log(`Computer wins: ${this.computer.wins}`);
  }


  // matchWinner() {
  //   if (this.isMatchWinner(this.human)) {
  //     console.log("You won three games! Congratulations!");
  //   } else if (this.isMatchWinner(this.computer)) {
  //     console.log("Computer won three games.");
  //   }
  // }

  // someoneWonThreeGames() {
  //   if (this.human.wins === 3) {
  //     return true;
  //   } else if (this.computer.wins === 3) {
  //     return true;
  //   }
  //   return false;
  // }

  // isMatchWinner(player) {
  //   return player.wins === 3;
  // }



  determineWhoGoesFirst() {
    let num = Math.floor(2 * Math.random());
    if (num === 1) {
      this.human.playerTurn();
      this.computer.notPlayerTurn();
    } else {
      this.human.notPlayerTurn();
      this.computer.playerTurn();
    }
  }

  switchTurns() {

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

  computerMoves() {
    // let choice = this.offensiveComputerMove() ||
    //              this.defensiveComputerMove() ||
    //              this.pickCenterSquare() ||
    //              this.pickRandomSquare();

    let choice = this.pickCenterSquare() ||
                 this.pickRandomSquare();

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

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

  defensiveComputerMove() {
    return this.findCriticalSquare(this.human);
  }

  offensiveComputerMove() {
    return this.findCriticalSquare(this.computer);
  }

  findCriticalSquare(player) {
    for (let line = 0; line < TTTGame.POSSIBLE_WINNING_ROWS.length; line++) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[line];
      let key = this.criticalSquare(player, row);
      if (key) return key;
    }

    return null;
  }

  criticalSquare(player, row) {
    if (this.board.countMarkersFor(player, row) === 2) {
      let index = row.findIndex(key => this.board.isUnusedSquare(key));
      if (index >= 0) return row[index];
    }

    return null;
  }

  pickCenterSquare() {
    return this.board.isUnusedSquare("5") ? "5" : null;
  }

  pickRandomSquare() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }
}




let game = new TTTGame();
game.play();

