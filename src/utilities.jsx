const gameStageInfo = {
  0: "Ready?",
  1: "Q1",
  2: "Q2",
  3: "Q3",
  4: "Q4",
  5: "Q5",
  6: "Q6",
  7: "Q7",
  8: "Q8",
  9: "Q9",
  10: "Q10",
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
