var rollDice = function () {
  // produces a decimal starting from 0 and ending BEFORE 6 (5.999999...)
  var randomDecimal = Math.random() * 6;

  // take off the decimal -> 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1 -> 1 to 6
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

let calculatePercentageOfWins = function () {
  percentageOfWins = (numOfWins / numOfSubmits) * 100;
};

let numOfSubmits = 0;
let numOfWins = 0;
let percentageOfWins = 0;

var main = function (input) {
  numOfSubmits = numOfSubmits + 1;
  var randomDiceNumber = rollDice();
  calculatePercentageOfWins();
  var myOutputValue =
    "Out of " +
    numOfSubmits +
    " submissions, you won " +
    numOfWins +
    " times. That is " +
    percentageOfWins +
    "% of the time. You just rolled a " +
    randomDiceNumber +
    ". You guessed " +
    input +
    ". You lost!";

  if (randomDiceNumber == input) {
    numOfWins = numOfWins + 1;
    calculatePercentageOfWins();
    myOutputValue =
      "Out of " +
      numOfSubmits +
      " submissions, you won " +
      numOfWins +
      " times. That is " +
      percentageOfWins +
      "% of the time. You just rolled a " +
      randomDiceNumber +
      ". You guessed " +
      input +
      ". You won!";
  }

  return myOutputValue;
};
