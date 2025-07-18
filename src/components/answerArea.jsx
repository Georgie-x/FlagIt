import { Instructions, AnswerButtons, Results } from "./index";
  

function AnswerArea({ gameStage, score, setScore, country, wrongCountries, setGameStage }) {



  return (
    <div className="answer-area">
      {gameStage === 0 ? (
        <Instructions />
      ) : gameStage === 11 ? (
        <Results score={score} />
      ) : (
        <AnswerButtons
          country={country}
          wrongCountries={wrongCountries}
          gameStage={gameStage}
          setGameStage={setGameStage}
          setScore={setScore}
        />
      )}
    </div>
  );
}

export default AnswerArea;
