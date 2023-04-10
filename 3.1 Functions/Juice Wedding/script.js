var main = function (input) {
  let numberOfGuests = input;
  let numberOfOrangesNeeded = input * 4;
  let litresOfOrangeJuice = input * 90 * 0.001;
  let myOutputValue = `How many oranges are needed? Ans: ${numberOfOrangesNeeded} oranges How many litres of orange juice would I get? Ans : ${litresOfOrangeJuice} litres`;
  return myOutputValue;
};
