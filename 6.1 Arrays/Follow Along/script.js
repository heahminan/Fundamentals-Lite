var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// Store guesses in a global array that persists across Submits.
var guesses = [];
var main = function (input) {
  // Add the user's guess to the guesses array.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();
  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = "You lose. Your guesses: " + guesses;
  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = "You win. Your guesses: " + guesses;
  }
  // Return output value.
  return myOutputValue;
};
