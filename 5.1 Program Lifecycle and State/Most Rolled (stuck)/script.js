var rollDice = function () {
  // produces a decimal starting from 0 and ending BEFORE 6 (5.999999...)
  var randomDecimal = Math.random() * 6;

  // take off the decimal -> 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1 -> 1 to 6
  var diceNumber = randomInteger + 1;

  if (diceNumber == 1) {
    numOf1Rolled += 1;
  }

  if (diceNumber == 2) {
    numOf2Rolled += 1;
  }

  if (diceNumber == 3) {
    numOf3Rolled += 1;
  }

  if (diceNumber == 4) {
    numOf4Rolled += 1;
  }

  if (diceNumber == 5) {
    numOf5Rolled += 1;
  }

  if (diceNumber == 6) {
    numOf6Rolled += 1;
  }
  console.log("start #1");
  console.log(numOf1Rolled);
  console.log("#2");
  console.log(numOf2Rolled);
  console.log("#3");
  console.log(numOf3Rolled);
  console.log("#4");
  console.log(numOf4Rolled);
  console.log("#5");
  console.log(numOf5Rolled);
  console.log("#6 end");
  console.log(numOf6Rolled);
  return diceNumber;
};

let checkHighestNumRolled = function () {
  if (
    numOf1Rolled >= numOf2Rolled ||
    numOf1Rolled >= numOf3Rolled ||
    numOf1Rolled >= numOf4Rolled ||
    numOf1Rolled >= numOf5Rolled ||
    numOf1Rolled >= numOf6Rolled
  ) {
    highestNumRolled = 1;
  }

  if (
    numOf2Rolled >= numOf1Rolled ||
    numOf2Rolled >= numOf3Rolled ||
    numOf2Rolled >= numOf4Rolled ||
    numOf2Rolled >= numOf5Rolled ||
    numOf2Rolled >= numOf6Rolled
  ) {
    highestNumRolled = 2;
  }

  if (
    numOf3Rolled >= numOf1Rolled ||
    numOf3Rolled >= numOf2Rolled ||
    numOf3Rolled >= numOf4Rolled ||
    numOf3Rolled >= numOf5Rolled ||
    numOf3Rolled >= numOf6Rolled
  ) {
    highestNumRolled = 3;
  }

  if (
    numOf4Rolled >= numOf1Rolled ||
    numOf4Rolled >= numOf2Rolled ||
    numOf4Rolled >= numOf3Rolled ||
    numOf4Rolled >= numOf5Rolled ||
    numOf4Rolled >= numOf6Rolled
  ) {
    highestNumRolled = 4;
  }

  if (
    numOf5Rolled >= numOf1Rolled ||
    numOf5Rolled >= numOf2Rolled ||
    numOf5Rolled >= numOf3Rolled ||
    numOf5Rolled >= numOf4Rolled ||
    numOf5Rolled >= numOf6Rolled
  ) {
    highestNumRolled = 5;
  }

  if (
    numOf6Rolled > numOf1Rolled ||
    numOf6Rolled > numOf2Rolled ||
    numOf6Rolled > numOf3Rolled ||
    numOf6Rolled > numOf4Rolled ||
    numOf6Rolled > numOf5Rolled
  ) {
    highestNumRolled = 6;
  }
};

let numOf1Rolled = 0;
let numOf2Rolled = 0;
let numOf3Rolled = 0;
let numOf4Rolled = 0;
let numOf5Rolled = 0;
let numOf6Rolled = 0;
let highestNumRolled = 0;

var main = function (input) {
  var randomDiceNumber = rollDice();
  checkHighestNumRolled();
  var myOutputValue =
    "You just rolled a " +
    randomDiceNumber +
    ". " +
    highestNumRolled +
    " is the number you rolled the most. You guessed " +
    input +
    ". You lost!";

  if (randomDiceNumber == input) {
    myOutputValue =
      "You just rolled a " +
      randomDiceNumber +
      ". " +
      highestNumRolled +
      " is the number you rolled the most. You guessed " +
      input +
      ". You won!";
  }

  return myOutputValue;
};
