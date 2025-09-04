import scoreDB from "../utility/scoreDB.js"

function HighscoreDisplay({ isOpen }) {
	if (!isOpen) return null 

	return (
		<div className='highscore-display'>
			<h2>Highscores</h2>
			<ul>
				{scoreDB.map((entry) => (
					<li key={entry.position} style={{ marginBottom: "8px" }}>
						#{entry.position} {entry.name} — {entry.score} pts ({entry.time})
					</li>
				))}
			</ul>
		</div>
	)
}

export default HighscoreDisplay
