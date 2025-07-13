import { useState } from "react"


function GameControl() {
	const [gameStage, setGameStage] = useState(0)
	const [country, setCountry] = useState("")
	const [score, setScore] = useState(0)



	return (
		<main>
			<Display country={country}/>
			<InfoArea score={score}/>
			<ActionButton />
			<AnswerArea />
		</main>
	)
}

export default GameControl
