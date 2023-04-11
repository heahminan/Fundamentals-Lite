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
