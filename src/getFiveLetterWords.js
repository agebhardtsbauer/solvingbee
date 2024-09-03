import { getAllPatterns } from "./getAllPatterns.js";
import { filterKnownCharacterPositions } from "./filterKnownCharacterPositions.js";

const allLetters = [
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

function removeLettersFromAllLetters(letters, removeLetters) {
  return letters.filter((letter) => !removeLetters.includes(letter));
}

let removeLetters = ["r", "s", "e", "m", "u", "l", "c", "h"];
let remainingLetters = removeLettersFromAllLetters(allLetters, removeLetters);

let validWords = getAllPatterns(remainingLetters, 5);

let knownLetterPositions = [
  { letter: "a", position: 2 },
  { letter: "i", position: 3 },
  // { letter: "w", position: 5 },
];

let knownLettersNotInPosition = [
  { letter: "r", position: 2 },
  { letter: "t", position: 4 },
];

let output = filterKnownCharacterPositions(
  validWords.patterns,
  knownLetterPositions,
);

console.log(output);

export function getAllFiveLetterWords() {
  return getAllPatterns(allLetters, 5);
}
// const startTimeInMilliseconds = new Date().getTime();
// const wordsOfLength5 = getAllPatterns(allLetters, 5);
// const endTimeInMilliseconds = new Date().getTime();
// const elapsedTimeInMilliseconds =
//   endTimeInMilliseconds - startTimeInMilliseconds;
// console.log("Time to get all 5 Letter Words: " + elapsedTimeInMilliseconds);
// console.log("Time to get all 5 Letter Words: " + wordsOfLength5.time);
// console.log("Words: " + wordsOfLength5.patterns.length);
// console.log(wordsOfLength5.patterns);
//
// console.log(knownCharacter(wordsOfLength5.patterns, "k", 1));
