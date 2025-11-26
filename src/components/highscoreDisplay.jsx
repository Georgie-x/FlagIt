import { useState, useEffect } from "react"
import { getHighscores } from "../api/highscores"

function HighscoreDisplay({ isOpen, setIsOpen }) {
	const [scores, setScores] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (isOpen) {
			getHighscores()
				.then((data) => {
					const sorted = data
						.sort((a, b) => b.score - a.score)
						.map((entry, index) => ({
							...entry,
							position: index + 1,
						}))
					setScores(sorted)
					setLoading(false)
				})
				.catch((err) => {
					setError(err.message)
					setLoading(false)
				})
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className='highscore-display' onClick={() => setIsOpen(false)}>
			{loading && "Loading..."}
			{error && `Error: ${error}`}

			{!loading && !error && (
				<>
					<h2>Highscores</h2>
					<br />
					<ul>
						{scores.map((entry) => (
							<li key={entry.position} style={{ marginBottom: "8px" }}>
								#{entry.position} {entry.name} — {entry.score} pts (
								{new Date(entry.time).toLocaleDateString("en-GB")})
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}

export default HighscoreDisplay
