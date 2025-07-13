function ActionButton({ gameStage, setGameStage, setCountry, setScore }) {
  const buttonText =
    gameStage === 0 ? "START!" : gameStage === 11 ? "PLAY AGAIN?" : "SKIP";

  const handleClick = () => {
    gameStage === 11 ? setGameStage(0) : setGameStage(gameStage + 1);
  };

  return (
    <div className="action-button">
      <button onClick={() => handleClick()}>{buttonText}</button>
    </div>
  );
}

export default ActionButton;
