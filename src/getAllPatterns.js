//function should return an array containing all combinations of characters of size patternSize
import en from "dictionary-en";
import nspell from "nspell";

const spell = nspell(en);

console.log(spell.correct("speling"));
console.log(spell.correct("spelling"));

export function getAllPatterns(characterArray, patternSize) {
  const start = new Date().getTime();
  const allPatterns = [];
  const pattern = [];
  const index = 0;
  generatePatterns(characterArray, patternSize, allPatterns, pattern, index);
  const end = new Date().getTime();
  const time = end - start;
  return { patterns: allPatterns, time: time };
}

function generatePatterns(
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
    generatePatterns(
      characterArray,
      patternSize,
      allPatterns,
      pattern,
      index + 1,
    );
  }

  return;
}
