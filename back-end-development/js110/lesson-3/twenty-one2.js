const readline = require('readline-sync');
const SUITE = ['C', 'D', 'H', 'S'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const FACES_VALUES = 10;
const ACE_VALUE_ONE = 1;
const ACE_VALUE_11 = 11;
const GOAL_VALUE = 21;
const DEALER_MINIMUM = 17;
let playerDeck = [];
let dealerDeck = [];
let playerWins = 0;
let dealerWins = 0;
let playerSum = 0;
let dealerSum = 0;

function prompt(string) {
  console.log(`=> ${string}`);
}

function initializeDeck() {
  return SUITE.map(suit => {
    return VALUES.map(num => {
      return [suit, num];
    });
  }).flat();
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function dealTwoCards(mainDeck) {
  return [mainDeck.shift(), mainDeck.shift()];
}

function joinAnd(arr) {
  switch (arr.length) {
    case 1:
      return arr.flat();
    case 2:
      return `${arr[0]} and ${arr[1]}`;
    default:
      return `${arr.slice(0, arr.length - 1).join(', ')}` + ', and ' + `${arr.slice(-1)}`;
  }
}

function cardDisplay(deck) {
  return deck.map(card => `${card[1]}${card[0]}`);
}

function onlyValues(deck) {
  return deck.map(value => value[1])
    .join(' ')
    .replace(/[^0-9A\s]/g, FACES_VALUES)
    .split(' ');
}

function sum(deck) {
  let sum = 0;
  let values = onlyValues(deck);
  values.forEach(value => {
    if (value === 'A') {
      sum += ACE_VALUE_11;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > GOAL_VALUE) sum -= 10;
  });

  return sum;
}

function twentyOneOrBust(sum, individual) {
  if (sum > GOAL_VALUE) {
    prompt(`${individual} busted with ${sum}.`);
    return true;
  } else if (sum === GOAL_VALUE) {
    prompt(`${individual} has ${GOAL_VALUE}.`);
    return true;
  } else {
    return false;
  }
}

function hitAgain(mainDeck) {
  prompt(`Hit again? (y or n)`);
  let answer = readline.question().toLowerCase().trim()[0];
  while (answer.match(/[^yn]/gi)) {
    prompt("Not a valid input. Select 'Y' or 'y' for 'yes'. Select 'N' or 'n' for 'no'.");
    answer = readline.question().toLowerCase().trim()[0];
  }
  console.clear();
  return answer === 'y' ? playerDeck.push(mainDeck.shift()) : false;
}

function determineWinner(player, dealer) {
  prompt(`======== FINAL RESULTS ========`);
  if ((player > GOAL_VALUE) || (dealer > player)) {
    dealerWins++;
    prompt(`Dealer wins.`);
  } else if ((dealer > GOAL_VALUE) || (player > dealer)) {
    playerWins++;
    prompt(`Player wins.`);
  } else if (player === dealer) {
    prompt(`It's a tie.`);
  }  
  prompt(`Player's cards: ${joinAnd(cardDisplay(playerDeck))}.`);
  prompt(`Player's score: ${player < 22 ? player : `${player} (busted)`}.`);
  prompt(`Dealer's cards: ${joinAnd(cardDisplay(dealerDeck))}.`);
  prompt(`Dealer's score: ${dealer < 22 ? dealer : `${dealer} (busted)`}.`);

}





function playAgain() {
  prompt(`Play again? (y or n)`);
  let answer = readline.question().toLowerCase().trim()[0];
  while (answer.match(/[^yn]/gi)) {
    prompt("Not a valid input. Select 'Y' or 'y' for 'yes'. Select 'N' or 'n' for 'no'.");
    answer = readline.question().toLowerCase().trim()[0];
  }
  console.clear();
  return answer === 'y' ? true : false;

}


function bestOfFive(player, dealer) {
  if (playerWins === 5) {

  } else if (dealerWins === 5) {
    
  }

  
}







while (true) {
  playerWins = 0;
  dealerWins = 0;


  while (true) {
    let mainDeck = initializeDeck();
    shuffle(mainDeck);

    playerDeck.push(...dealTwoCards(mainDeck));
    dealerDeck.push(...dealTwoCards(mainDeck));
    prompt(`===============================`);

    prompt(`Dealer's card: ${joinAnd(cardDisplay([dealerDeck[0]]))} and unknown.`);

    while (true) {
      playerSum = sum(playerDeck);
      prompt(`Your cards are: ${joinAnd(cardDisplay(playerDeck))}`);
      prompt(`Your score is ${playerSum}`);

      if (twentyOneOrBust(playerSum, 'Player')) break;

      if (!hitAgain(mainDeck)) break;
    }

    while (true) {
      dealerSum = sum(dealerDeck);

      if (playerSum > GOAL_VALUE) break;
      if (twentyOneOrBust(dealerSum, 'Dealer')) break;

      while (dealerSum < DEALER_MINIMUM) {
        dealerDeck.push(mainDeck.shift());
        dealerSum = sum(dealerDeck);
      }
      break;
    }

    determineWinner(playerSum, dealerSum);


    if (!playAgain()) break;

  }

  if (!bestOfFive()) break;

  prompt(`Play best out of five again?`);




}









