var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = "you lose " + randomDiceNumber + " " + input;

  // If input matches randomDiceNumber, update output.
  if (randomDiceNumber == input) {
    myOutputValue = "you win " + randomDiceNumber + " " + input;
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
  console.log(diceNumber);
  if (diceNumber % 2 == 1) {
    diceNumber = "odd";
  }

  if (diceNumber % 2 == 0) {
    diceNumber = "even";
  }
  console.log(diceNumber);
  return diceNumber;
};
