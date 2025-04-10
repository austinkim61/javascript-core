/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.


// to see in hands: [['H', '2'], ['S', 'J'], ['D', 'A']]


*/
const SUITE = ['C', 'D', 'H', 'S'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let playerDeck = [];
let dealerDeck = [];
let playerTotal = 0;
let dealerTotal = 0;

let mainDeck = SUITE.map(suit => {
  return VALUES.map(num => {
    return [suit, num];
  });
}).flat();

// FUNCTIONS
// to see in hands: [['H', '2'], ['S', 'J'], ['D', 'A']]

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

// function deal(array, person) {
//   person.push(array.shift());
// }

function prompt(string) {
  console.log(`=> ${string}`);
}













function sum(deck) { // if at least one ace, use sumWithAce, if not, use SumWithoutAce
  return checkForAce(convertNonAces(deck)) ? sumWithAce(convertNonAces(deck)) : sumWithoutAce(convertNonAces(deck));
}

function checkForAce(deck) { // checks for at least 1 ace
  return deck.some(card => card === 'A');
}

function sumWithoutAce(deck) { // returns the sum of an array that does not have any aces
  // return deck.reduce((acc, elem) => Number(acc) + Number(elem));

  let total = deck.reduce((acc, elem) => Number(acc) + Number(elem));
  return winOrBust(total); // 
  
}

function winOrBust(num1, num2) {
  playerTotal = num1;

  if (num1 === 21 || num2 === 21) {
    return 21;
  } else if (num1 > 22 && num2 > 22) {
    return 'bust';
  } else {
    return num2 !== undefined ? prompt(`Your total is ${num1} or ${num2}.`) : prompt(`Your total is ${num1}.`);
  }
}


function sumWithAce(deck) { // input format is ['A', 'A', '2', '2', '3', 'A', 'A']
  // let numberOfAces = deck.filter(card => card[1] === 'A').length;

  let nonAceDeck = deck.filter(card => card !== 'A'); // array of only non-Aces
  let numberOfAces = deck.filter(card => card === 'A').length; // number of aces
  // let nonAceDeckSum = sumWithoutAce(nonAceDeck); // sum of non-Aces
  let nonAceDeckSum = nonAceDeck.reduce((acc, elem) => Number(acc) + Number(elem)); // sum of non-Aces

  firstSum = nonAceDeckSum + (numberOfAces * 1);
  secondSum = nonAceDeckSum + numberOfAces - 1 + 11;
  
  return winOrBust(firstSum, secondSum);
  
}


function convertNonAces(deck) { // => ['10', '5', 'A', 'A', 'A', '4', '5']
  return deck.map(value => value[1])
    .join(' ')
    .replace(/[^0-9A\s]/g, '10')
    .split(' ');

}



// ['10', '5', '2', '2', '3', '4', '5']









// main actions
shuffle(mainDeck);

while (mainDeck.length !== 48) {
  playerDeck.push(mainDeck.shift());
  dealerDeck.push(mainDeck.shift());
}

// PLAYER LOOP
while (true) {
  
  console.log(playerDeck);

  if (sum(playerDeck) === 21) {
    prompt('You have 21');
    break;
  } else if (sum(playerDeck) === 'bust') {
    prompt(`You busted with ${playerTotal}`);
    break;
  }


  // prompt(sum(playerDeck)); // if reaches this point will show you total

  // if (hitAgain() !== true) break;

  break;




}









/*

let playerTotal = 0;
let dealerTotal = 0;


FUNCTIONS
function sum
if deck contains ace: RETURN function sumWithAce
if deck doesn't contain ace: RETURN function sumWithoutAce


function forcedStay
return function sum


function sumWithAce:
firstTotal = calculate total with 1 (REDUCE METHOD)
secondTotal = calculate total with 11 (REDUCE METHOD)
if (firstTotal === 21) || (secondTotal === 21) =====> RETURN 21
if (firstTotal > 21) && (secondTotal > 21) =====> RETURN BUST
if not:
playerTotal = WHICHEVER IS GREATER
display two possible totals ====> RETURN Your total is '10' or '20'


function sumWithoutAce:
calculate total (REDUCE METHOD)
if total === 21 =====> RETURN 21
if total > 21 ====> RETURN BUST
if not: 
playerTotal = total
display total ====> RETURN Your total is '10'


function hitAgain:
prompt(hitAgain?)
let answer = question.readline()

while (answer.match(/[^yn]/gi))
prompt(select only y or n)
prompt(hitAgain)
answer = question.readline

if answer = y ====> person.push(deck.shift()) AND RETURN TRUE
if answer = n ====> RETURN FALSE



PLAYER TURN

while loop 
{
if (sum(playerdeck) === 21) prompt(you have 21) AND playerTotal = 21 AND BREAK
if (sum(playerdeck) === BUST) prompt(you busted with ${sum(playerdeck)}) AND playerTotal >= 22 AND BREAK

prompt(sum(playerdeck)) // if reaches this point will show the possible totals


if (hitAgain !== true) BREAK // exists loop // stay
===> else it will PUSH ANOTHER CARD TO THE PLAYER FIRST AND CONTINUES LOOP
}



1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

IN BETWEEN






DEALERTURN 
if (playerTotal > 21) ====> prompt(dealer wins) AND end game


LOOP
function dealerTurn
if total is less than 17, hit
dealerTotal = dealerTotal + hit value (CHECK FOR ACE)
END LOOP

if dealerTotal > 21 ===> prompt(player wins) AND end game


compare dealerTotal to playerTotal
prompt(player wins, dealer wins, or tie)











*/





// console.log(deck.length);
// console.log(player.length);
// console.log(dealer.length);
// console.log(deck);


























































// function initialDeal(array) {
//   player.push(array.shift());
//   dealer.push(array.shift());
//   player.push(array.shift());
//   dealer.push(array.shift());
// }

// initialDeal(deck);



























































































































































































































