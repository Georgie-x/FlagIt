import { useState } from "react"
import HighscoreDisplay from "./highscoreDisplay"

function HighscoreLink() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='action-button-area'>
			<a href="#" onClick={() => setIsOpen(!isOpen)} className='open-btn'>
				{isOpen ? "Hide Highscores" : "Show Highscores"}
			</a>

			{isOpen && (
				<div>
					<HighscoreDisplay isOpen={isOpen} setIsOpen={setIsOpen}/>
				</div>
			)}
		</div>
	)
}

export default HighscoreLink
