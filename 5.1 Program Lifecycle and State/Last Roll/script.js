var rollDice = function () {
  // produces a decimal starting from 0 and ending BEFORE 6 (5.999999...)
  var randomDecimal = Math.random() * 6;

  // take off the decimal -> 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1 -> 1 to 6
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

let lastRoll = 0;

var main = function (input) {
  var randomDiceNumber = rollDice();
  var myOutputValue =
    "Your last roll was " +
    lastRoll +
    ". You just rolled a " +
    randomDiceNumber +
    ". You guessed " +
    input +
    ". You lost!";

  if (randomDiceNumber == input) {
    myOutputValue =
      "Your last roll was " +
      lastRoll +
      ". You just rolled a " +
      randomDiceNumber +
      ". You guessed " +
      input +
      ". You won!";
  }
  lastRoll = randomDiceNumber;

  return myOutputValue;
};
