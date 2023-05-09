var main = function (input) {
  // Default output value is 'you lose'.
  var myOutputValue = "";

  // check if input is a number

  if (Number.isNaN(Number(input))) {
    myOutputValue = "sorry please enter a number";
    return myOutputValue;
  }

  if (input < 1 || input > 6) {
    myOutputValue = "sorry please enter a number between 1 to 6";
    return myOutputValue;
  }

  // Generate a random dice number
  var randomDiceNumber = rollDice();
  var randomDiceNumber2 = rollDice();
  console.log("randomDiceNumber");
  console.log(randomDiceNumber);
  console.log("randomDiceNumber2");
  console.log(randomDiceNumber2);

  // If input matches randomDiceNumber, update output.
  if (
    (randomDiceNumber == input ||
      randomDiceNumber + 1 == input ||
      randomDiceNumber - 1 == input) &&
    (randomDiceNumber2 == input ||
      randomDiceNumber2 + 1 == input ||
      randomDiceNumber2 - 1 == input) &&
    !(randomDiceNumber == 1 && randomDiceNumber2 == 1)
  ) {
    myOutputValue = "you win " + randomDiceNumber + " " + input;
  } else {
    myOutputValue = "you lose " + randomDiceNumber + " " + input;
  }

  // Return output.
  return myOutputValue;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
