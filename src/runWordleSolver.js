import readline from "readline";
import { getAllFiveLetterWords } from "./getFiveLetterWords.js";
import { filterKnownCharacterPositions } from "./filterKnownCharacterPositions.js";
import { removeWordsWithLetter } from "./removeWordsWithLetter.js";
import { removeWordsWithoutLetter } from "./removeWordsWithoutLetter.js";
import { removeWordsWithLetterInPosition } from "./removeWordsWithLetterInPosition.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let words = getAllFiveLetterWords();
console.log(words);
let filteredWords = words.patterns;
let removedLetters = [];

function displayMenu() {
  console.log("\nMenu Options:");
  console.log("[r]emove letter");
  console.log("[k]nown letter position");
  console.log("[u]nknown letter position");
  console.log("e[x]it\n");
}

function processInput(input) {
  const command = input.trim().toLowerCase();

  switch (command) {
    case "r":
      rl.question("Remove Letters: ", (chars) => {
        for (const char of chars) {
          filteredWords = removeWordsWithLetter(filteredWords, char);
          removedLetters.push(char);
        }
        console.log(filteredWords);
        promptUser();
      });
      break;

    case "k":
      rl.question("Enter letter and position (ex: r4):\n", (combo) => {
        filteredWords = filterKnownCharacterPositions(filteredWords, [
          {
            letter: combo[0],
            position: parseInt(combo[1], 10),
          },
        ]);
        console.log(`Updated words: ${filteredWords}`);
        promptUser();
      });
      break;

    case "u":
      rl.question("Enter letter and position (ex: g5): ", (combo) => {
        filteredWords = removeWordsWithoutLetter(filteredWords, combo[0]);

        filteredWords = removeWordsWithLetterInPosition(filteredWords, [
          {
            letter: combo[0],
            position: parseInt(combo[1], 10),
          },
        ]);
        console.log(filteredWords);
        promptUser();
      });
      break;

    case "x":
      console.log("Exiting the game.");
      rl.close();
      break;

    default:
      console.log("Invalid option. Please try again.");
      promptUser();
      break;
  }
}

function promptUser() {
  displayMenu();
  rl.question("Choose an option: ", (input) => {
    processInput(input);
  });
}

promptUser();
