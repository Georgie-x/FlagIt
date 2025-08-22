import { gameStageInfo } from "../utilities"

function ActionButton({ questionNo, setQuestionNo, gameStage, setGameStage, setScore }) {
	const infoText = gameStageInfo[gameStage]
	const buttonText = gameStage === "start" ? "START!" : gameStage === "end" ? "PLAY AGAIN?" : "SKIP"

	const handleClick = () => {
		if (gameStage === "end") {
			setScore(0)
			setGameStage("start")
			setQuestionNo(0)
		} else if (gameStage === "start") {
			setScore(0)
			setGameStage("playing")
			setQuestionNo(1)
		} else {
			setQuestionNo(questionNo + 1)
		}
	}

	return (
		<div className='action-button'>
			<label htmlFor='aButton'>{infoText}</label>
			<button id='aButton' onClick={() => handleClick()}>
				{buttonText}
			</button>
		</div>
	)
}

export default ActionButton
