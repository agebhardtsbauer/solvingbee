import readline from "readline";
import { removeWordsWithoutLetter } from "./removeWordsWithoutLetter.js";
import { getAllPatterns } from "./getAllPatterns.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getNletterWords(n, input) {
  console.log(`${n} letter words:`);
  console.log(
    removeWordsWithoutLetter(
      getAllPatterns(input.split(""), n).patterns,
      input[0],
    ),
  );
}

function processInput(input) {
  console.log("4 letter words:");
  console.log(
    removeWordsWithoutLetter(
      getAllPatterns(input.split(""), 4).patterns,
      input[0],
    ),
  );

  getNletterWords(5, input);
  getNletterWords(6, input);
  getNletterWords(7, input);
  getNletterWords(8, input);
  getNletterWords(9, input);
  getNletterWords(10, input);

  // console.log("5 letter words:");
  // console.log(
  //   removeWordsWithoutLetter(getAllPatterns(input.split(""), 5), input[0]),
  // );
  //
  // console.log("6 letter words:");
  // console.log(
  //   removeWordsWithoutLetter(getAllPatterns(input.split(""), 6), input[0]),
  // );
  //
  // console.log("7 letter words:");
  // console.log(
  //   removeWordsWithoutLetter(getAllPatterns(input.split(""), 7), input[0]),
  // );
  //
  // console.log("8 letter words:");
  // console.log(
  //   removeWordsWithoutLetter(getAllPatterns(input.split(""), 8), input[0]),
  // );
  //
  // console.log("9 letter words:");
  // console.log(
  //   removeWordsWithoutLetter(getAllPatterns(input.split(""), 9), input[0]),
  // );
  //
  // console.log("10 letter words:");
  //
  // console.log(
  //   removeWordsWithoutLetter(getAllPatterns(input.split(""), 10), input[0]),
  // );

  rl.close();
}

function promptUser() {
  rl.question("enter letters beginning with yellow letter: ", (input) => {
    processInput(input);
  });
}

promptUser();
