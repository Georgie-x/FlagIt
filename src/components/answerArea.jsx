import { Instructions, AnswerButtons, Results } from "./index"

function AnswerArea({
	currentQuestion,
	setQuestionNo,
	gameStage,
	score,
	setScore,
	setGameStage,
	gameMode,
}) {
	return (
		<div className='answer-area'>
			{gameStage === "start" ? (
				<Instructions gameMode={gameMode} />
			) : gameStage === "end" ? (
				<Results score={score} gameMode={gameMode} />
			) : (
				<AnswerButtons
					setScore={setScore}
					currentQuestion={currentQuestion}
					setQuestionNo={setQuestionNo}
					setGameStage={setGameStage}
					gameMode={gameMode}
				/>
			)}
		</div>
	)
}

export default AnswerArea
