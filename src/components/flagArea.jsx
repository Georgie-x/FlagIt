import flagData from "../database";

function FlagArea({ gameStage, country }) {
  const flag = flagData.find((item) => item.name === country);

  return (
    <div className="flag-area">
      {gameStage === 0 || gameStage === 11 ? (
        <img src="src/assets/world-flags.jpg" alt="World Flags" />
      ) : flag ? (
        <img src={flag.flagUrl} alt={`Flag of ${flag.name}`} />
      ) : (
        <p>Flag not found</p>
      )}
    </div>
  );
}

export default FlagArea;
