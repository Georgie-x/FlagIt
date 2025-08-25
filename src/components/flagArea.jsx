import worldFlags from "../assets/worldFlags.jpg";

function FlagArea({ gameStage, currentQuestion }) {
  if (!currentQuestion) {
    return (
      <div className="flag-area">
        <img src={worldFlags} alt="World Flags" />
      </div>
    );
  }

  const flagCode = currentQuestion.correctCountryCode;

  return (
    <div className="flag-area">
      {gameStage !== "playing" ? (
        <img src={worldFlags} alt="World Flags" />
      ) : (
        <img src={`https://flagcdn.com/w320/${flagCode}.png`} alt={`Flag`} />
      )}
    </div>
  );
}

export default FlagArea;
