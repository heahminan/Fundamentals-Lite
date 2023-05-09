var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  var userInput = input * 2;
  // Default output value is 'you lose'.
  var myOutputValue = "you lose " + input + " " + randomDiceNumber;

  // If input matches randomDiceNumber, update output.
  if (userInput == randomDiceNumber) {
    myOutputValue = "you win " + input + " " + randomDiceNumber;
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
