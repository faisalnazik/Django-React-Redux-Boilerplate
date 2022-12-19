// ----------------------------------------------------------------------

export function randomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}

export function randomNumberRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
