import { useEffect, useState } from "react";
import FlagArea from "./flagArea";
import ActionButton from "./actionButton";
import AnswerArea from "./answerArea";
import genQ from "../utility/qBuilder";
import countryAlphaCodes from "../utility/database";

function GameControl() {
  const [gameStage, setGameStage] = useState("start");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionNo, setQuestionNo] = useState(-1);
  const [gameMode, setGameMode] = useState("10");

  useEffect(() => {
    if (gameStage === "start") {
      const allQuestions = genQ(countryAlphaCodes);

      if (gameMode === "survival") {
        setQuestions(allQuestions);
      } else {
        setQuestions(allQuestions.slice(0, 10));
      }
    }
  }, [gameStage, gameMode]);

  const totalQuestions = questions.length;

  const currentQuestion = questions[questionNo];

  if (questionNo >= totalQuestions && gameStage === "playing") {
    setGameStage("end");
  }

  return (
    <main>
      <FlagArea gameStage={gameStage} currentQuestion={currentQuestion} />
      <AnswerArea
        gameStage={gameStage}
        setGameStage={setGameStage}
        setScore={setScore}
        currentQuestion={currentQuestion}
        score={score}
        setQuestionNo={setQuestionNo}
        gameMode={gameMode}
      />
      <ActionButton
        questionNo={questionNo}
        setQuestionNo={setQuestionNo}
        gameStage={gameStage}
        setGameStage={setGameStage}
        setScore={setScore}
        gameMode={gameMode}
        setGameMode={setGameMode}
      />
    </main>
  );
}

export default GameControl;
