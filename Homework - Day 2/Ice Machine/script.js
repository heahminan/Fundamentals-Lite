function weightConversion(input) {
  let convertGramsToPounds = input * 0.00220462;
  return convertGramsToPounds;
}

var main = function (noOfGuests) {
  let noOfDrinks = noOfGuests * 2;
  let noOfCubes = noOfDrinks * 4;
  let weightOfIceInGrams = noOfCubes * 1.5;
  let weightofIceInPounds = weightConversion(weightOfIceInGrams);
  let timeRequired = weightofIceInPounds / 5;
  let myOutputValue = `${timeRequired} hours`;
  return myOutputValue;
};
