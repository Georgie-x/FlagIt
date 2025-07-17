function FlagArea({ gameStage, country }) {


  return (
    <div className="flag-area">
      {gameStage === 0 || gameStage === 11 ? (
        <img src="src\assets\world-flags.jpg" />
      ) : (
        <img src={country.flagUrl} />
      )}
    </div>
  );
}

export default FlagArea;
