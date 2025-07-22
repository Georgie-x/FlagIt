import { useEffect, useState } from "react";
import FlagArea from "./flagArea";
import InfoArea from "./infoArea";
import ActionButton from "./actionButton";
import AnswerArea from "./answerArea";
import flagData from "../database";

function GameControl() {
  const [gameStage, setGameStage] = useState(0);
  const [country, setCountry] = useState("");
  const [score, setScore] = useState(0);
  const [wrongCountries, setWrongCountries] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    if (gameStage >= 1 && gameStage <= 10) {
      const shuffled = [...flagData];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      setCountry(shuffled[0].name);
      setWrongCountries(shuffled.slice(1, 4).map((country) => country.name));
    }
  }, [gameStage]);

  useEffect(() => {
    if (!country || wrongCountries.length === 0) return;

    const allAnswers = [...wrongCountries, country];
    const shuffled = allAnswers
      .map((answer) => ({ answer, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ answer }) => answer);

    setShuffledAnswers(shuffled);
  }, [country, wrongCountries]);

  return (
    <main>
      <FlagArea gameStage={gameStage} country={country} />
      <AnswerArea
        gameStage={gameStage}
        setGameStage={setGameStage}
        setScore={setScore}
        country={country}
        score={score}
        shuffledAnswers={shuffledAnswers}
      />
      <InfoArea gameStage={gameStage} score={score} />
      <ActionButton
        gameStage={gameStage}
        setGameStage={setGameStage}
        setScore={setScore}
      />
    </main>
  );
}

export default GameControl;
