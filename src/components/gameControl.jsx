import { useEffect, useState } from "react"
import FlagArea from "./flagArea"
import ActionButton from "./actionButton"
import AnswerArea from "./answerArea"
import genQ from "../utility/qBuilder"
import countryAlphaCodes from "../utility/database"

function GameControl() {
	const [gameStage, setGameStage] = useState("start")
	const [score, setScore] = useState(0)
	const [questions, setQuestions] = useState([])
	const [questionNo, setQuestionNo] = useState(0)

	useEffect(() => {
		setQuestions(genQ(countryAlphaCodes))
	}, [])

	const currentQuestion = questions[questionNo]

	return (
		<main>
			<FlagArea gameStage={gameStage} currentQuestion={currentQuestion} />
			<AnswerArea
				gameStage={gameStage}
				setGameStage={setGameStage}
				setScore={setScore}
				currentQuestion={currentQuestion}
				score={score}
			/>
			<ActionButton
				questionNo={questionNo}
				setQuestionNo={setQuestionNo}
				gameStage={gameStage}
				setGameStage={setGameStage}
				setScore={setScore}
			/>
		</main>
	)
}

export default GameControl
