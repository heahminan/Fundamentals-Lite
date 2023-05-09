// loop 6 times
// each loop add "hello" to myOutputValue

var main = function (input) {
  var counter = 0;
  var myOutputValue = "";

  while (counter <= 6) {
    myOutputValue = myOutputValue + " hello " + counter;
    counter += 2;
  }
  return myOutputValue;
};
