export function removeWordsWithLetter(words, letter) {
  return words.filter((word) => !word.includes(letter));
}
