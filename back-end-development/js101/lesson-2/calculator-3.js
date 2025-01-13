const LANGUAGE = 'english'; // change to your language here
const readline = require('readline-sync');
const MESSAGES = require('./calculator-messages.json');

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang) {
  return MESSAGES[lang][message];
}

prompt('welcome');

let answer;

do {
  prompt('first');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalid');
    number1 = readline.question();
  }

  prompt('second');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalid');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('choices');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`${MESSAGES[LANGUAGE]['result']}${output}`);

  prompt('another');

  answer = readline.question();

}

while (['y', 's', 'j'].includes(answer[0].toLowerCase()));