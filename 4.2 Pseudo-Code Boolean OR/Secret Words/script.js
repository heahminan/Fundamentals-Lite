var main = function (input) {
  // Set a default value for myOutputValue
  var myOutputValue = "hello world";
  // If input is our secret phrase, change the value of myOutputValue
  if (
    input == "palatable papaya" ||
    input == "neat noodles" ||
    input == "awesome ayam" ||
    input == "delicious dumplings"
  ) {
    myOutputValue = "you wrote the secret phrase!";
  }
  // return myOutputValue as output
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
