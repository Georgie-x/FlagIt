import { Instructions, AnswerButtons, Results } from "./index";

function AnswerArea({
  gameStage,
  score,
  setScore,
  country,
  shuffledAnswers,
  setGameStage,
}) {
  return (
    <div className="answer-area">
      {gameStage === 0 ? (
        <Instructions />
      ) : gameStage === 11 ? (
        <Results score={score} />
      ) : (
        <AnswerButtons
          country={country}
          gameStage={gameStage}
          setGameStage={setGameStage}
          setScore={setScore}
          shuffledAnswers={shuffledAnswers}
        />
      )}
    </div>
  );
}

export default AnswerArea;
