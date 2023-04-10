var main = function (input) {
  let singaporePopulation = 5977339;
  let numberOfSecondsPerHugPerSingapore = input * singaporePopulation;
  let numberofSecondsInAYear = 365 * 24 * 60 * 60;
  let totalRestSecondsInAYear = 365 * 9 * 60 * 60;
  let numberofYears =
    numberOfSecondsPerHugPerSingapore /
    (numberofSecondsInAYear - totalRestSecondsInAYear);
  let myOutputValue = numberofYears;
  return myOutputValue;
};
