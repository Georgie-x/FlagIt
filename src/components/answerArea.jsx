import { Instructions, AnswerButtons, Results } from "./index"

function AnswerArea({ currentQuestion, questionNo, gameStage, score, setScore, setGameStage }) {
	return (
		<div className='answer-area'>
			{gameStage === "start" ? (
				<Instructions />
			) : gameStage === "end" ? (
				<Results score={score} />
			) : (
				<AnswerButtons
					gameStage={gameStage}
					setGameStage={setGameStage}
					setScore={setScore}
					currentQuestion={currentQuestion}
          questionNo={questionNo}
				/>
			)}
		</div>
	)
}

export default AnswerArea
