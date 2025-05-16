const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const LOSING_COMBOS = {
  rock: ['paper', 'spock'],
  paper: ['scissors', 'lizard'],
  scissors: ['rock', 'spock'],
  lizard: ['rock', 'scissors'],
  spock: ['paper', 'lizard'],
};

let humanChoices = {
  rock: 1,
  paper: 2,
  scissors: 2,
  lizard: 0,
  spock: 5,
};

let humanWeight = {};
let computerWeight = {};
let totalMoves = Object.values(humanChoices).reduce((acc, num) => acc + num, 0);

for (let key in humanChoices) {
  humanWeight[key] = humanChoices[key] / totalMoves;
}

choices.forEach(elem => {
  LOSING_COMBOS[elem].forEach(item => {
    computerWeight[item] = Math.round(((computerWeight[item] ?? 0) + ((humanWeight[elem] ?? 0) / 2)) * 100) / 100;
  });
});

let array = Object.entries(computerWeight);
let newArray = [];
array.forEach((elem, index) => {
  newArray.push([elem[0], (Math.round((elem[1] + (((newArray[index - 1] ?? 0) === 0) ? 0 : newArray[index - 1][1])) * 100) / 100)]);
});
console.log(newArray);