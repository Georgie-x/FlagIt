import HighscoreLink from "./highscoreLink";

function ActionButton({
  questionNo,
  setQuestionNo,
  gameStage,
  setGameStage,
  setScore,
  gameMode,
  setGameMode,
}) {
  const buttonText =
    gameStage === "start"
      ? "START!"
      : gameStage === "end"
      ? "PLAY AGAIN?"
      : gameMode === "survival"
      ? ""
      : "SKIP";

  const handleClick = () => {
    if (gameStage === "end") {
      setScore(0);
      setGameStage("start");
      setQuestionNo(-1);
    } else if (gameStage === "start") {
      setScore(0);
      setGameStage("playing");
      setQuestionNo(0);
    } else {
      setQuestionNo(questionNo + 1);
    }
  };

  const showButton = !(gameMode === "survival" && gameStage === "playing");

  return (
    <div className="action-button">
      {gameStage === "start" ? (
        <fieldset>
          <div>
            <input
              type="radio"
              id="10"
              name="mode"
              value="10"
              checked={gameMode === "10"}
              onChange={() => setGameMode("10")}
            />
            <label htmlFor="10">Default</label>
          </div>
          <div>
            <input
              type="radio"
              id="survival"
              name="mode"
              value="survival"
              checked={gameMode === "survival"}
              onChange={() => setGameMode("survival")}
            />
            <label htmlFor="survival">Hardcore</label>
          </div>
        </fieldset>
      ) : gameStage === "playing" ? (
        <label htmlFor="aButton">Question {questionNo + 1}</label>
      ) : (
        <label htmlFor="aButton"></label>
      )}

      {showButton && (
        <button className="aButton" id="aButton" onClick={() => handleClick()}>
          {buttonText}
        </button>
      )}

	  <HighscoreLink />
    </div>
  );
}

export default ActionButton;
