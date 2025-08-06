const gameStageInfo = {
  0: "Ready?",
  1: "Question 1",
  2: "Question 2",
  3: "Question 3",
  4: "Question 4",
  5: "Question 5",
  6: "Question 6",
  7: "Question 7",
  8: "Question 8",
  9: "Question 9",
  10: "Question 10",
  11: "Game Over",
};

export { gameStageInfo };

function endMessage(score) {
  return score <= 1
    ? "Oh dear"
    : score <= 4
    ? "Better luck next time"
    : score <= 7
    ? "Well done!"
    : score <= 9
    ? "Amazing!"
    : "Wow! You FlaggedIt";
}

export { endMessage };
