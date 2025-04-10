// function joinOr(arr, delimiter = ', ', word = 'or') {
//   if (arr.length <= 1) {
//     return arr.join('');
//   }

//   let allButLast = arr.join(delimiter).slice(0, -1);
//   let last = arr.slice(-1);

//   return arr.length === 2 ? `${arr[0]} ${word} ${last}` : `${allButLast}${word} ${last}`; 
// }

// console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
// console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
// console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
// console.log(joinOr([]));                      // => ""
// console.log(joinOr([5]));                     // => "5"
// console.log(joinOr([1, 2]));                  // => "1 or 2"







// function joinOr(string) {
//   switch (string) {
//     case 'hello1':
//       return 'hello1';
//     case 'hello2':
//       return `hello2`;
//     case 'hello3':
//       return `hello3`;
//     default:
//       return `hello4`;
//   }

// }


// console.log(joinOr('dsf'));









// const NUMBER_OF_GAMES_TO_WIN = 5;
// function prompt(string) {
//   console.log(`=> ${string}`);
// }

// function detectOverallWinner(player, computer) {
//   if (player === NUMBER_OF_GAMES_TO_WIN) {
//     return prompt(`Player is the overall winner!`);    
//   } else if (computer === NUMBER_OF_GAMES_TO_WIN) {
//     return prompt(`Computer is the overall winner!`);
//   }
//   return false;
// }

// console.log(!detectOverallWinner(0, 4))












// function priorityLine(array) {

//   let board = array;

//   for (let i = 0; i < board.length; i++) {
//     if (true) {
//       return 'hello' + i;
//     }

//   }
//   return 'goodbye';



// }

// let arr = [1, 2, 3];

// console.log(priorityLine(arr));






// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };





// function trueOrFalse(string) {
//   // return string === 'y' ? true : false;

//   let arr = [1, 2, 3];

//   return arr.map(x => {
//     return x * 2;
//   });


// }

// console.log(trueOrFalse('y'));


// let arr = 1;


// function thisTest(string) {
//   return string;
// }


// console.log(thisTest(`Keep playing until ${arr} wins? (y or n)`))


const SUITE = ['C', 'D', 'H', 'S'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// let mainDeck = SUITE.map(suit => {
//   return VALUES.map(num => {
//     return [suit, num];
//   });
// }).flat();

// function shuffle(array) {
//   for (let index = array.length - 1; index > 0; index--) {
//     let otherIndex = Math.floor(Math.random() * (index + 1));
//     [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
//   }
// }


// shuffle(mainDeck);

let mainDeck = [['S', '5'], ['H', '2'], ['C', 'A'], ['H', 'A'], ['S', '8'], ['C', '10'], ['C', '10'], ['H', '10'], ['S', '2']];
let valuesOnly = ['5', '2', 'A', 'A', '8', '10', '10', '10', '2']; // gotten by converNonAces(mainDeck)


function convertNonAces(deck) {
  return deck.map(value => value[1])
    .join(' ')
    .replace(/[^0-9A\s]/g, '10')
    .split(' ');
}


let nonAceDeck = convertNonAces(mainDeck).filter(card => card !== 'A');



// console.log(mainDeck);
// console.log(valuesOnly);
console.log(nonAceDeck);
// console.log(convertNonAces(mainDeck));
// console.log();










// DELETE BELOW THIS LINE
/*


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