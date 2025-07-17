function AnswerButtons({ country, wrongCountries, gameStage }) {
  return (
    <div className="answer-buttons">
      <button>{country}</button>
      <button>{wrongCountries[0]}</button>
      <button>{wrongCountries[1]}</button>
      <button>{wrongCountries[2]}</button>
    </div>
  );
}

export default AnswerButtons;
