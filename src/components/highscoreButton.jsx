import { useState } from "react"
import HighscoreDisplay from "./highscoreDisplay"

function HighscoreButton() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='action-button-area'>
			<button onClick={() => setIsOpen(!isOpen)} className='open-btn'>
				{isOpen ? "Hide Info" : "Show Info"}
			</button>

			{isOpen && (
				<div>
					<HighscoreDisplay isOpen={isOpen} setIsOpen={setIsOpen}/>
				</div>
			)}
		</div>
	)
}

export default HighscoreButton
