var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// var main = function (input) {
//   var myOutputValue = "";
//   var counter = 0;
//   while (counter < input) {
//     // Roll dice inside the loop, generating a random dice roll each iteration
//     var diceRoll = rollDice();
//     // Add each dice roll to output
//     myOutputValue = myOutputValue + " " + diceRoll + " ";
//     // Increment counter at end of each iteration
//     counter = counter + 1;
//   }
//   return myOutputValue;
// };

var main = function (input) {
  var myOutputValue = "";
  // Initialise the outer counter, rowCounter
  var rowCounter = 0;
  while (rowCounter < input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;
    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "x";
      columnCounter = columnCounter + 1;
    }
    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};
