import { useEffect, useState } from "react"

function AnswerButtons({ country, wrongCountries, gameStage, setGameStage, setScore }) {
	const [shuffledAnswers, setShuffledAnswers] = useState([])

	useEffect(() => {
		writeQuestion()
	}, [gameStage])

	function writeQuestion() {
		const allAnswers = [...wrongCountries, country]

		const shuffled = allAnswers
			.map((answer) => ({ answer, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ answer }) => answer)

		setShuffledAnswers(shuffled)
    console.log('answerbut', gameStage, country, allAnswers, shuffled)
	}

	function handleButtonClick(selectedAnswer) {
		if (selectedAnswer === country) {
			setScore((prev) => prev + 1)
		}

		setGameStage((prev) => prev + 1)
	}


	return (
		<div className='answer-buttons'>
			{shuffledAnswers.map((answer, index) => (
				<button key={index} onClick={() => handleButtonClick(answer)}>
					{answer}
				</button>
			))}
		</div>
	)
}

export default AnswerButtons

// country + wrongCountries already in state

// shuffle to assign correct country to a button (writeQuestion), happens each time gameStage changes. shuffle letters A-D, assign 1 to correct country and others to other letters

// progress gamestage by 1 after any answer button clicked (handleButtons)

// add to score if answer correct (handleButtons)

// show green for correct answer, red for wrong (CSS)

// potentially avoid double clicking by accident (errors)
