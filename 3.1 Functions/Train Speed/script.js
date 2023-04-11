var main = function (numberOfHoursDelayed) {
  let remainingTimeToCompleteJourney = 2 - numberOfHoursDelayed;
  let distanceToCover = 400;
  let newSpeed = distanceToCover / remainingTimeToCompleteJourney;
  let myOutputValue = newSpeed;
  return myOutputValue;
};
