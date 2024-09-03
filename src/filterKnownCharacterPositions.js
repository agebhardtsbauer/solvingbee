//export a function that takes an array of strings then returns an array of strings that contain the specified letter at the specified position

export function filterKnownCharacterPositions(arr, knownLetterPositions) {
  for (const knownLetterPosition of knownLetterPositions) {
    arr = filterForKnownCharacter(
      arr,
      knownLetterPosition.letter,
      knownLetterPosition.position,
    );
  }

  return arr;
}

export function filterForKnownCharacter(arr, char, position) {
  const index = position - 1;
  return arr.filter((word) => word[index] === char);
}
