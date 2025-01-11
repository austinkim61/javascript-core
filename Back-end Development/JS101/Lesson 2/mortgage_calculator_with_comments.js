const LANGUAGE = 'german'; // change to your language here
const readline = require('readline-sync');
const MESSAGES = require('./mortgage_calculator_messages.json');

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

/*
take number and remove non-numeric characters but keep .
account for only letters
account for more than one .

first step remove everything but numbers and .
  possible to have 100.12.12
second step verify if is number or not - parsefloat || NaN

*/





function cleanInput(input) {
  return parseFloat(input.replace(/[^0-9.]/g, ''));
}

prompt('welcome');

let monthlyInterestRate;
let monthlyPayment;

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

  monthlyInterestRate = parseFloat(annualPercentageRate / (12 * 100));

  monthlyPayment = parseFloat(loan * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-duration)))));

  let fixedMonthlyPayment = monthlyPayment.toFixed(2);
  
  console.log(`${MESSAGES[LANGUAGE]['result']}$${fixedMonthlyPayment}`);

  prompt('another');

  answer = readline.question();

}

while (['y', 's', 'j'].includes(answer[0].toLowerCase()));





/* 
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months
*/

/*
Determine monthly payments for a mortgage or car loan
Obtain from user
  - the loan amount
  - the Annual Percentage Rate (APR)
  - the loan duration

Calculate
  - monthly interest rate (APR/12) - easy from above
  - loan duration in months - easy from above


Notes
  - use explicit names instead of single-letter variables
  - print the payment amount as dollars and cents (e.g. $123.45)
  - run code through ESLint


Hints
  - decide the input formats your program expects (e.g. interest rate % as 5 or .05)
  - if working with APR, convert it to monthly interest rate
  - loan duration in months or years?
  - edge cases
    - support no-intesrest loans or loans that aren't for an integer number of years

For the messages, create a JSON file for different languages - check calculator3






START

# Determine monthly payments for a mortgage or car loan

GET
loanAmount
monthlyInterestRate
annualPercentageRate
loanDurationYears
loanDurationMonths

PRINT monthlyPayment amount as dollars and cents

  monthlyPayment = loan * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-duration))));
10000 * ((5/12)) / (1 - Math.pow((1 + (5/12)), (-36))));
*/

