//function should return an array containing all combinations of characters of size patternSize
import en from "dictionary-en";
import nspell from "nspell";

const spell = nspell(en);

export function getAllPatterns(characterArray, patternSize) {
  const start = new Date().getTime();
  const allPatterns = [];
  const pattern = [];
  const index = 0;
  generateAllPatterns(characterArray, patternSize, allPatterns, pattern, index);
  const end = new Date().getTime();
  const time = end - start;
  return { patterns: allPatterns, time: time };
}

function getAllPatternsFaster(characterArray, patternSize) {
  const start = new Date().getTime();
  const allPatterns = [];
  const pattern = [];
  const index = 0;
  generatePatternsFaster(
    characterArray,
    patternSize,
    allPatterns,
    pattern,
    index,
  );
  const end = new Date().getTime();
  const time = end - start;
  return { patterns: allPatterns, time: time };
}

function generateAllPatterns(
  characterArray,
  patternSize,
  allPatterns,
  pattern,
  index,
) {
  if (index === patternSize) {
    if (spell.correct(pattern.join(""))) {
      allPatterns.push(pattern.join(""));
    }
    return;
  }

  for (let i = 0; i < characterArray.length; i++) {
    pattern[index] = characterArray[i];
    // console.log(index, pattern);
    generateAllPatterns(
      characterArray,
      patternSize,
      allPatterns,
      pattern,
      index + 1,
    );
  }

  return;
}

function generatePatternsFaster(
  characterArray,
  patternSize,
  allPatterns,
  pattern,
  index,
) {
  if (index === patternSize) {
    if (spell.correct(pattern.join(""))) {
      allPatterns.push(pattern.join(""));
    }
    return;
  }

  for (let i = 0; i < characterArray.length; i++) {
    if (
      i >= 2 &&
      characterArray[i] === pattern[index - 1] &&
      characterArray[i] === pattern[index - 2]
    ) {
      return;
    }
    pattern[index] = characterArray[i];
    // console.log(index, pattern);
    generatePatternsFaster(
      characterArray,
      patternSize,
      allPatterns,
      pattern,
      index + 1,
    );
  }

  return;
}

const all = getAllPatterns(["t", "i", "v", "n", "u", "b", "a"], 6);
console.log(all.patterns);
console.log(all.time);

const faster = getAllPatternsFaster(["t", "i", "v", "n", "u", "b", "a"], 6);

console.log(faster.patterns);
console.log(faster.time);
