import { useState } from "react";
import FlagArea from "./flagArea";
import InfoArea from "./infoArea";
import ActionButton from "./actionButton";
import AnswerArea from "./answerArea";

function GameControl() {
  const [gameStage, setGameStage] = useState(0);
  const [country, setCountry] = useState("");
  const [score, setScore] = useState(0);

  return (
    <main>
      <FlagArea gameStage={gameStage} country={country} />
      <AnswerArea
        gameStage={gameStage}
        setGameStage={setGameStage}
        setScore={setScore}
        setCountry={setCountry}
      />
      <InfoArea gameStage={gameStage} score={score} />
      <ActionButton
        gameStage={gameStage}
        setGameStage={setGameStage}
        setCountry={setCountry}
        setScore={setScore}
      />
    </main>
  );
}

export default GameControl;
