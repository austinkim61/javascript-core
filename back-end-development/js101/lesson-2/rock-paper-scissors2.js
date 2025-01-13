const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let player = 0;
let computer = 0;


function prompt(message) {
  console.log(`=> ${message}`);
}

function returnMatch(userInput) {
  let value = VALID_CHOICES.filter(option => option.startsWith(userInput))[0];
  return value;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (playerWinner(choice, computerChoice)) {
    prompt('You win!');
  } else if (computerWinner(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function playerWinner(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
  (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
  (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
  (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
  (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    return true;
  } else {
    return false;
  }
}

function computerWinner(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
  (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
  (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
  (choice === 'lizard' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
  (choice === 'spock' && (computerChoice === 'paper' || computerChoice === 'lizard'))) {
    return true;
  } else {
    return false;
  }
}

function displayGrandWinner(choice, computerChoice) {
  if (playerWinner(choice, computerChoice)) {
    player += 1;
  } else if (computerWinner(choice, computerChoice)) {
    computer += 1;
  } else ;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}. You can shorten this to r, p, sc, l, or sp.`);

  let choice = readline.question().toLowerCase();

  while (choice.trimStart().trimEnd() === 's') {
    prompt("Please specify more than one character if you typed 's'.");
    choice = readline.question().toLowerCase();
  }

  let match = returnMatch(choice);

  while (!VALID_CHOICES.includes(match)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
    match = returnMatch(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(match, computerChoice);
  displayGrandWinner(match, computerChoice);

  if (player === 3) {
    prompt("You are the grand winner! (3 out of 5)");
    player = 0;
    computer = 0;
  } else if (computer === 3) {
    prompt("Computer is the grand winner (3 out of 5)");
    player = 0;
    computer = 0;
  }

  prompt('Do you want to play again (y/n)?');

  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}