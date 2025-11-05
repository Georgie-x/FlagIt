import { useState } from "react"
import { postHighscore } from "../api/highscores"
import { endMessage } from "../utility/gameMessages"

function Results({ score, gameMode }) {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (name.length < 3 || name.length > 8) {
      setError("Name must be 3-8 characters")
      return
    }

    try {
      await postHighscore(name, score)
      setSubmitted(true)
      setError(null)
    } catch (err) {
      setError("Failed to submit score")
    }
  }

  return (
    <div className="results">
      <h3>You scored {score}!</h3>
      <br/>
      <p>{endMessage(score, gameMode)}</p>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
            maxLength={8}
          />
          <button type="submit">Submit Score</button>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
      ) : (
        <p>Score submitted! ✅</p>
      )}
    </div>
  )
}

export default Results