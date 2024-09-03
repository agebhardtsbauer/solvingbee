export function removeWordsWithLetterInPosition(arr, knownLetterPositions) {
  for (const knownLetterPosition of knownLetterPositions) {
    arr = removeWordCharacterPosition(
      arr,
      knownLetterPosition.letter,
      knownLetterPosition.position,
    );
  }

  return arr;
}

export function removeWordCharacterPosition(arr, char, position) {
  const index = position - 1;
  return arr.filter((word) => word[index] !== char);
}
