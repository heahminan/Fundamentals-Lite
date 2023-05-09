// outer loop 3 times
// inner loop 3 times
// inner loop add "hello" to myOutputValue
// q1 - 9 hellos
// q3 - fewer rows of hellos
// q4 - fewer columns of hellos
// q5 - fewer rows of hellos
// q6 - fewer columns of hellos
// q7 - there are 4 rows of hellos
// q8 - there are 4 columns of hellos
// q10 - 2 times more

var main = function (input) {
  var outerCounter = 0;
  var myOutputValue = "";

  while (outerCounter < input) {
    console.log("OC " + outerCounter);
    var innerCounter = 0;

    while (innerCounter < input * 2) {
      console.log("IC " + innerCounter);
      myOutputValue = myOutputValue + " hello";
      innerCounter += 1;
    }

    myOutputValue = myOutputValue + "<br>";
    outerCounter += 1;
  }

  return myOutputValue;
};
