var main = function (numberOfGuests) {
  let numberOfOrangesNeeded = numberOfGuests * 4;
  let litresOfOrangeJuice = numberOfGuests * 90 * 0.001;
  let myOutputValue = `How many oranges are needed? Ans: ${numberOfOrangesNeeded} oranges How many litres of orange juice would I get? Ans : ${litresOfOrangeJuice} litres`;
  return myOutputValue;
};
