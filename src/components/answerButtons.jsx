import countryAlphaCodes from "../utility/database";

function AnswerButtons({
  currentQuestion,
  setQuestionNo,
  setScore,
  gameMode,
  setGameStage,
}) {
  function handleButtonClick(selectedAnswer) {
    if (selectedAnswer === currentQuestion.correctCountryCode) {
      setScore((prev) => prev + 1);
      setQuestionNo((prev) => prev + 1);
    } else {
      if (gameMode === "survival") {
        setGameStage("end");
      } else {
        setQuestionNo((prev) => prev + 1);
      }
    }
  }

  const convertedAnswers = currentQuestion.shuffledAnswers.map((code) => ({
    code,
    name: countryAlphaCodes[code] || code,
  }));

  return (
    <div className="answer-buttons">
      {convertedAnswers.map(({ code, name }, index) => (
        <button key={index} onClick={() => handleButtonClick(code)}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default AnswerButtons;
