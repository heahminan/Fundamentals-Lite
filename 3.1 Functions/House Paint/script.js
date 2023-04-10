let main = function (input) {
  let totalAreaInMetres = 6 * 6 * 3 * 3;
  let totalAreaOfWindows = 6 * 0.9 * 1.5;
  let totalAreaOfDoors = 8 * 0.9 * 1.5;
  let totalAreaForPainting =
    totalAreaInMetres - totalAreaOfDoors - totalAreaOfWindows;
  let totalPaintVolumeRequired = (totalAreaForPainting / 300) * 2;
  let totalPrice = totalPaintVolumeRequired * input;
  let myOutputValue = totalPrice;
  return myOutputValue;
};
