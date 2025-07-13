import { useState } from "react";
import Display from "./display";
import InfoArea from "./infoArea";
import ActionButton from "./actionButton";
import AnswerArea from "./answerArea";

function GameControl() {
  const [gameStage, setGameStage] = useState(0);
  const [country, setCountry] = useState("");
  const [score, setScore] = useState(0);

  return (
    <main>
      <Display gameStage={gameStage} country={country} />
      <InfoArea gameStage={gameStage} score={score} />
      <ActionButton
        gameStage={gameStage}
        setGameStage={setGameStage}
        setCountry={setCountry}
        setScore={setScore}
      />
      <AnswerArea
        gameStage={gameStage}
        setGameStage={setGameStage}
        setScore={setScore}
        setCountry={setCountry}
      />
    </main>
  );
}

export default GameControl;
