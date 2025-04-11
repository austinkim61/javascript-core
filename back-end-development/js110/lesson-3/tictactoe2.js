const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUMBER_OF_GAMES_TO_WIN = 5;

function prompt(string) {
  console.log(`=> ${string}`);
}

function displayBoard(board) {
  console.clear();

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
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];
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

while (true) {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  let board = initializeBoard();

  while (!detectOverallWinner(playerWins, computerWins)) {
    board = initializeBoard();
  
    while (true) {
      displayBoard(board);
  
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
  
      computerChoosesSquare(board);
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
    
    prompt(`Keep playing until ${NUMBER_OF_GAMES_TO_WIN} wins? (y or n)`);
    let answer = readline.question().toLowerCase()[0];
    if (answer !== 'y') break;
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');