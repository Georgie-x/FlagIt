function ActionButton({ gameStage, setGameStage, setScore }) {
  const buttonText =
    gameStage === 0 ? "START!" : gameStage === 11 ? "PLAY AGAIN?" : "SKIP";

  const handleClick = () => {
    if (gameStage === 11) {
      setScore(0);
      setGameStage(0);
    } else if (gameStage === 0) {
      setScore(0);
      setGameStage(1);
    } else {
      setGameStage(gameStage + 1);
    }
  };

  return (
    <div className="action-button">
      <button onClick={() => handleClick()}>{buttonText}</button>
    </div>
  );
}

export default ActionButton;
