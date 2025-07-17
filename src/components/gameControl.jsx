import { useEffect, useState } from "react";
import FlagArea from "./flagArea";
import InfoArea from "./infoArea";
import ActionButton from "./actionButton";
import AnswerArea from "./answerArea";
import flagData from "../database";

function GameControl() {
  const [gameStage, setGameStage] = useState(0);
  const [country, setCountry] = useState({});
  const [score, setScore] = useState(0);
  const [wrongCountries, setWrongCountries] = useState([]);

  useEffect(() => {
    if (gameStage >= 1 && gameStage <= 10) {
      const shuffled = [...flagData];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      setCountry(shuffled[0]);
      setWrongCountries(shuffled.slice(1, 4).map(country => country.name));
    }
  }, [gameStage]);

  return (
    <main>
      <FlagArea gameStage={gameStage} country={country} />
      <AnswerArea
        gameStage={gameStage}
        setGameStage={setGameStage}
        setScore={setScore}
        setCountry={setCountry}
        wrongCountries={wrongCountries}
		score={score}
		country={country}
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
