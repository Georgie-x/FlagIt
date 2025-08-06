import { useEffect, useState } from "react";

function AnswerButtons({ country, setGameStage, setScore, shuffledAnswers }) {
  function handleButtonClick(selectedAnswer) {
    if (selectedAnswer === country) {
      setScore((prev) => prev + 1);
    }

    setGameStage((prev) => prev + 1);
  }

  return (
    <div className="answer-buttons">
      {shuffledAnswers.map((answer, index) => (
        <button key={index} onClick={() => handleButtonClick(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
}

export default AnswerButtons;
