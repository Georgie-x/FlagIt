function endMessage(score, gameMode) {
  if (gameMode === "10") {
    return score <= 1
      ? "Oh dear"
      : score <= 4
      ? "Better luck next time"
      : score <= 7
      ? "Well done!"
      : score <= 9
      ? "Amazing!"
      : "Wow! You FlaggedIt";
  } else {
    return score <= 97
      ? "Keep Trying!"
      : score <= 192
      ? "Almost There"
      : "Wow! You Mega FlaggedIt!!!!!";
  }
}

export { endMessage };
