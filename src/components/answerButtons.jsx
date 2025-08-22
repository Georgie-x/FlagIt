function AnswerButtons({ currentQuestion, gameStage, setQuestionNo, setScore }) {
	function handleButtonClick(selectedAnswer) {
		if (selectedAnswer === currentQuestion.correctCountry) {
			setScore((prev) => prev + 1)
		}

		setQuestionNo((prev) => prev + 1)
	}

	return (
		<div className='answer-buttons'>
			{currentQuestion.shuffledAnswers.map((answer, index) => (
				<button key={index} onClick={() => handleButtonClick(answer)}>
					{answer}
				</button>
			))}
		</div>
	)
}

export default AnswerButtons
