import { Instructions, AnswerButtons, Results } from "./index";

function AnswerArea({ gameStage, score, country, wrongCountries }) {
  return (
    <div className="answer-area">
      {gameStage === 0 ? (
        <Instructions />
      ) : gameStage === 11 ? (
        <Results score={score} />
      ) : (
        <AnswerButtons
          country={country.name}
          wrongCountries={wrongCountries}
          gameStage={gameStage}
        />
      )}
    </div>
  );
}

export default AnswerArea;
