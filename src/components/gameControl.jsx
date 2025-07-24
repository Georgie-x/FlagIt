import { useEffect, useState } from "react";
import FlagArea from "./flagArea";
import ActionButton from "./actionButton";
import AnswerArea from "./answerArea";
import countryAlphaCodes from "../database";

function GameControl() {
  const [gameStage, setGameStage] = useState(0);
  const [country, setCountry] = useState("");
  const [score, setScore] = useState(0);
  const [wrongCountries, setWrongCountries] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    if (gameStage >= 1 && gameStage <= 10) {
      const shuffled = Object.keys(countryAlphaCodes);
      console.log(shuffled);
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      setCountry(shuffled[0]);
      setWrongCountries(shuffled.slice(1, 4).map((country) => country));
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

      <ActionButton
        gameStage={gameStage}
        setGameStage={setGameStage}
        setScore={setScore}
      />
    </main>
  );
}

export default GameControl;
