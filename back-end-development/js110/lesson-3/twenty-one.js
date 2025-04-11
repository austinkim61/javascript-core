const readline = require('readline-sync');
const SUITE = ['C', 'D', 'H', 'S'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const ACE_VALUE_ONE = 1;
const ACE_VALUE_11 = 11;
let playerDeck = [];
let dealerDeck = [];
let playerSum = 0;
let dealerSum = 0;

let mainDeck = SUITE.map(suit => {
  return VALUES.map(num => {
    return [suit, num];
  });
}).flat();

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function prompt(string) {
  console.log(`=> ${string}`);
}

function onlyValues(deck) {
  return deck.map(value => value[1])
    .join(' ')
    .replace(/[^0-9A\s]/g, '10')
    .split(' ');
}

function deckValues(deck, string = null) {
  return deck.filter(card => string ? card === string : card !== 'A');
}

function sumNonAces(array) {
  return array.reduce((acc, elem) => Number(acc) + Number(elem), 0);
}

function sumAces(array) {
  let firstSum = array.length * ACE_VALUE_ONE;
  let secondSum = array.length - 1 + ACE_VALUE_11;
  
  return [firstSum, secondSum];
}

function sum(deck) {
  let values = onlyValues(deck); // ['10', '5', 'A', 'A', 'A', '4', '5']
  let nonAcesArray = deckValues(values);
  let acesArray = deckValues(values, 'A');  

  let nonAcesSum = sumNonAces(nonAcesArray);
  let [firstAcesSum, secondAcesSum] = sumAces(acesArray);

  if (firstAcesSum === 0) {
    return [nonAcesSum];
  } else {
    return [nonAcesSum + firstAcesSum, nonAcesSum + secondAcesSum];
  }
}

function twentyOneOrBust(sum, individual) {
  if (sum.every(sum => sum > 21)) {    
    prompt(`${individual} busted with ${sum[0]}.`);
    return true;
  } else if (sum.includes(21)) {
    prompt(`${individual} has 21.`);
    return true;
  } else {
    return false;
  }
}

function hitAgain() {
  prompt(`Hit again? (y or n)`);
  let answer = readline.question().toLowerCase().trim()[0];
  while (answer.match(/[^yn]/gi)) {
    prompt("Not a valid input. Select 'Y' or 'y' for 'yes'. Select 'N' or 'n' for 'no'.");
    answer = readline.question().toLowerCase().trim()[0];
  }
  return answer === 'y' ? playerDeck.push(mainDeck.shift()) : false;
}

function getFinalValue(values) {
  return values.map(value => value).sort((a, b) => a - b).filter(num => num < 22).pop() || values.map(value => value).sort((a, b) => a - b).pop();
}

function determineWinner(player, dealer) {

  if ((player > 21) || (dealer > player)) {
    prompt(`Dealer wins.`);
  } else if ((dealer > 21) || (player > dealer)) {
    prompt(`Player wins.`);    
  } else if (player === dealer) {
    prompt(`It's a tie.`);
  }
  prompt(`Player's cards: ${JSON.stringify(playerDeck)}\nPlayer's score: ${player < 22 ? player : `${player} (busted)`}.`);
  prompt(`Dealer's cards: ${JSON.stringify(dealerDeck)}\nDealer's score: ${dealer < 22 ? dealer : `${dealer} (busted)`}.`);  
}




shuffle(mainDeck);

while (mainDeck.length !== 48) {
  playerDeck.push(mainDeck.shift());
  dealerDeck.push(mainDeck.shift());
}

prompt(`Dealer's card: ${JSON.stringify(dealerDeck[0])} and unknown.`);

while (true) {
  playerSum = sum(playerDeck);
  prompt(`Your cards are: ${JSON.stringify(playerDeck)}\nYour possible scores are: ${JSON.stringify(playerSum)}`);

  if (twentyOneOrBust(playerSum, 'Player')) break; 

  if (!hitAgain()) break;
}

while (true) {
  dealerSum = sum(dealerDeck);
  
  if (getFinalValue(playerSum) > 21) break; 
  if (twentyOneOrBust(dealerSum, 'Dealer')) break; 
    
  while (dealerSum.every(sum => sum < 17)) {
    dealerDeck.push(mainDeck.shift());
    dealerSum = sum(dealerDeck);
  }
  break;  
}

determineWinner(getFinalValue(playerSum), getFinalValue(dealerSum));