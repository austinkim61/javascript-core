const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUMBER_OF_GAMES_TO_WIN = 2;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(string) {
  console.log(`=> ${string}`);
}

function displayBoard(board) {
  // console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`)

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  if (arr.length <= 1) {
    return arr.join('');
  }

  let allButLast = arr.join(delimiter).slice(0, -1);
  let last = arr.slice(-1);

  return arr.length === 2 ? `${arr[0]} ${word} ${last}` : `${allButLast}${word} ${last}`;
}

function firstPlayer() {
  let first;
  while (true) {
    prompt(`Who should play first?: player, computer, or choose (random)`);
    let answer = readline.question().toLowerCase().slice(0, 3);

    switch (answer) {
      case 'pla':
        first = 'player';
        console.log('You are first.');
        break;
      case 'com':
        first = 'computer';
        console.log('Computer is first.');
        break;
      case 'cho':
        Math.floor(Math.random() * 2) === 1 ? first = 'player' : first = 'computer';
        console.log(`Choosing random first player: ${first}`);
        break;
      default:
        prompt("Sorry, that's not a valid choice.");
    }
    if (first !== undefined) break;
  }
  return first;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  if (!!priorityLine(board, COMPUTER_MARKER)) {
    computerOffenseDefense(priorityLine(board, COMPUTER_MARKER), board);
  } else if (!!priorityLine(board, HUMAN_MARKER)) {
    computerOffenseDefense(priorityLine(board, HUMAN_MARKER), board);
  } else if (board['5'] === ' ') {
    board['5'] = COMPUTER_MARKER;
  } else {
    computerRandom(board);
  }
}

function priorityLine(board, marker) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    let currentLine = [board[sq1], board[sq2], board[sq3]];

    if (twoMarkers(currentLine, marker) && oneInitialMarker(currentLine)) {
      return WINNING_LINES[line];
    }
  }
  return false;
}

function twoMarkers(array, marker) {
  return array.filter(mark => mark === marker).length === 2;
}

function oneInitialMarker(array) {
  return array.filter(mark => mark === INITIAL_MARKER).length === 1;
}

function computerOffenseDefense(array, board) {
  board[priorityMarker(array, board)] = COMPUTER_MARKER;
}

function priorityMarker(array, board) {
  return array.find(square => board[square] === INITIAL_MARKER);
}

function computerRandom(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function keepScore(player, computer, tie) {
  return prompt(`The score is:\nPlayer: ${player}\nComputer: ${computer}\nTies: ${tie}`);
}

function detectOverallWinner(player, computer) {
  if (player === NUMBER_OF_GAMES_TO_WIN) {
    return prompt(`Player is the overall winner!`);
  } else if (computer === NUMBER_OF_GAMES_TO_WIN) {
    return prompt(`Computer is the overall winner!`);
  }
  return false;
}

function playAgain(string) {
  prompt(string);
  let answer = readline.question();

  while (answer.match(/[^yn]/gi)) {
    prompt("Not a valid input. Select 'Y' or 'y' for 'yes'. Select 'N' or 'n' for 'no'.");
    answer = readline.question();
  }

  return answer.toLowerCase() === 'y' ? true : false;
}

while (true) {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;
  let board = initializeBoard();
  let startPlayer = firstPlayer();

  while (!detectOverallWinner(playerWins, computerWins)) {
    board = initializeBoard();

    let currentPlayer = startPlayer;

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);

      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      detectWinner(board) === 'Player' ? playerWins++ : computerWins++;
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    keepScore(playerWins, computerWins, ties);
    detectOverallWinner(playerWins, computerWins);

    if (playerWins === NUMBER_OF_GAMES_TO_WIN || computerWins === NUMBER_OF_GAMES_TO_WIN) break;

    if (!playAgain(`Keep playing until ${NUMBER_OF_GAMES_TO_WIN} wins? (y or n)`)) break;
  }

  if (!playAgain(`Play until ${NUMBER_OF_GAMES_TO_WIN} wins again? (y or n)`)) break;
}

prompt('Thanks for playing Tic Tac Toe!');