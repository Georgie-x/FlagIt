import { useState } from "react";
import countryAlphaCodes from "../utility/database";

function AnswerButtons({
  currentQuestion,
  setQuestionNo,
  setScore,
  gameMode,
  setGameStage,
}) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const CORRECT_DELAY = 500;   
  const WRONG_DELAY = 1500;    

  function handleButtonClick(selectedAnswer) {
    if (locked) return;
    setSelected(selectedAnswer);
    setLocked(true);

    const isCorrect = selectedAnswer === currentQuestion.correctCountryCode;

    if (isCorrect) {
      setScore((prev) => prev + 1);

      setTimeout(() => {
        setSelected(null);
        setLocked(false);
        setQuestionNo((prev) => prev + 1);
      }, CORRECT_DELAY);
    } else {
      if (gameMode === "survival") {
        setTimeout(() => setGameStage("end"), WRONG_DELAY);
      } else {
        setTimeout(() => {
          setSelected(null);
          setLocked(false);
          setQuestionNo((prev) => prev + 1);
        }, WRONG_DELAY);
      }
    }
  }

  const convertedAnswers = currentQuestion.shuffledAnswers.map((code) => ({
    code,
    name: countryAlphaCodes[code] || code,
  }));

  const getButtonClass = (code) => {
    if (!selected) return "";
    if (code === currentQuestion.correctCountryCode) return "correct";
    return "wrong";
  };

  return (
    <div className="answer-buttons">
      {convertedAnswers.map(({ code, name }, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(code)}
          className={getButtonClass(code)}
          disabled={locked}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default AnswerButtons;
