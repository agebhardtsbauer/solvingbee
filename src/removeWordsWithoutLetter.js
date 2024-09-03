export function removeWordsWithoutLetter(words, letter) {
  return words.filter((word) => word.includes(letter));
}
