// 3.1 Functions

// Juice Wedding
var main = function (numberOfGuests) {
  let numberOfOrangesNeeded = numberOfGuests * 4;
  let litresOfOrangeJuice = numberOfGuests * 90 * 0.001;
  let myOutputValue = `How many oranges are needed? Ans: ${numberOfOrangesNeeded} oranges How many litres of orange juice would I get? Ans : ${litresOfOrangeJuice} litres`;
  return myOutputValue;
};

// SG Hugs
var main = function (numberOfSecondsPerHug) {
  let singaporePopulation = 5977339;
  let numberOfSecondsToHugSingapore =
    numberOfSecondsPerHug * singaporePopulation;
  let numberofSecondsInAYear = 365 * 24 * 60 * 60;
  let totalRestSecondsInAYear = 365 * 9 * 60 * 60;
  let numberofYears =
    numberOfSecondsPerHugPerSingapore /
    (numberofSecondsInAYear - totalRestSecondsInAYear);
  let myOutputValue = numberofYears;
  return myOutputValue;
};

// House Paint
let main = function (pricePerLitre) {
  let totalAreaInMetres = 6 * 6 * 3 * 3;
  let totalAreaOfWindows = 6 * 0.9 * 1.5;
  let totalAreaOfDoors = 8 * 0.9 * 1.5;
  let totalAreaForPainting =
    totalAreaInMetres - totalAreaOfDoors - totalAreaOfWindows;
  let totalPaintVolumeRequired = (totalAreaForPainting / 300) * 2;
  let totalPrice = totalPaintVolumeRequired * pricePerLitre;
  let myOutputValue = totalPrice;
  return myOutputValue;
};

// Train Speed
var main = function (numberOfHoursDelayed) {
  let remainingTimeToCompleteJourney = 2 - numberOfHoursDelayed;
  let distanceToCover = 400;
  let newSpeed = distanceToCover / remainingTimeToCompleteJourney;
  let myOutputValue = newSpeed;
  return myOutputValue;
};

// Clock (requires further edits)
var main = function (numberOfMinutes) {
  let angleBetweenHourAndMinute = null;
  let anglePerMinute = 360 / 60;
  if (numberOfMinutes == 5) {
    angleBetweenHourAndMinute = 0;
  }

  if (numberOfMinutes > 5 && numberOfMinutes < 61) {
    angleBetweenHourAndMinute = (numberOfMinutes - 5) * anglePerMinute;
  }

  if (numberOfMinutes > -1 && numberOfMinutes < 5) {
    angleBetweenHourAndMinute = 330 + numberOfMinutes * anglePerMinute;
  }

  let myOutputValue = angleBetweenHourAndMinute;
  return myOutputValue;
};
