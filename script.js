export const capitalize = (string) => {
  const firstLetterUpperCase = string.slice(0, 1).toUpperCase();
  return string
    .slice(1, string.length)
    .padStart(string.length, firstLetterUpperCase);
};

export const reverseString = (string) =>
  string.split("").reverse().toString().replaceAll(",", "");

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;

export const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const capitalAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Matches character to a letter Regex
const isLetter = (character) => character.match(/[A-Z|a-z]/i);

// Return the letter shifted over using the index of the current letter + the shift and modulo of 26 so that it will loop in the case of "x" with a shift of 10
const getShiftedLetter = (letter, shift) => {
  if (letter.toUpperCase() === letter) {
    return capitalAlphabet[(capitalAlphabet.indexOf(letter) + shift) % 26];
  }
  return alphabet[(alphabet.indexOf(letter) + shift) % 26];
};

export const caeserCipher = (string, shift) => {
  let cipher = "";
  // Split string to an array
  const strArray = string.split("");
  strArray.forEach((character) => {
    // For every character check if a letter and then shift it through the cipher
    if (isLetter(character)) {
      cipher += getShiftedLetter(character, shift);
    } else {
      cipher += character;
    }
  });
  return cipher;
};

const getMinNum = (array) => {
  let min = array[0];
  array.forEach((num) => {
    if (num < min) min = num;
  });
  return min;
};

const getMaxNum = (array) => {
  let max = array[0];
  array.forEach((num) => {
    if (num > max) max = num;
  });
  return max;
};

const getTotal = (array) => {
  return array.reduce((accumulator, curr) => accumulator + curr);
};

export const analyzeArray = (array) => {
  const object = {};
  object.length = array.length;
  object.min = getMinNum(array);
  object.max = getMaxNum(array);
  object.average = getTotal(array) / object.length;
  return object;
};
