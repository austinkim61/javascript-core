const LANGUAGE = 'english';
const readline = require('readline-sync');
const MESSAGES = require('./mortgage_calculator_messages.json');

let monthlyInterestRate;
let monthlyPayment;
let answer;
let fixedMonthlyPayment;

function messages(message, lang) {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

function cleanInput(input) {
  return parseFloat(input.replace(/[^0-9.]/g, ''));
}

prompt('welcome');

do {
  prompt('loan');

  let loan = cleanInput(readline.question());

  while (invalidNumber(loan)) {
    prompt('invalid');
    loan = cleanInput(readline.question());
  }

  prompt('apr');
  let annualPercentageRate = cleanInput(readline.question());

  while (invalidNumber(annualPercentageRate)) {
    prompt('invalid');
    annualPercentageRate = cleanInput(readline.question());
  }

  prompt('duration');
  let duration = cleanInput(readline.question());

  while (invalidNumber(duration)) {
    prompt('invalid');
    duration = cleanInput(readline.question());
  }

  if (annualPercentageRate === 0) {

    monthlyPayment = parseFloat(loan / duration);

    fixedMonthlyPayment = monthlyPayment.toFixed(2);

  } else {
    
    monthlyInterestRate = parseFloat(annualPercentageRate / (12 * 100));

    monthlyPayment = parseFloat(loan * (monthlyInterestRate / (1 - Math.pow((1 +
      monthlyInterestRate), (-duration)))));
  
   fixedMonthlyPayment = monthlyPayment.toFixed(2);

  }

  console.log(`${MESSAGES[LANGUAGE]['result']}$${fixedMonthlyPayment} at an Annual Percentage Rate of ${annualPercentageRate}% over ${duration} months to pay back a loan of $${loan}. The total amount paid will be $${fixedMonthlyPayment * duration}.`);

  prompt('another');

  answer = readline.question();
}

while (['y', 's', 'j'].includes(answer[0].toLowerCase()));