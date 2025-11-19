const API_URL = 'http://72.61.19.16:3000/api/highscores';


export const getHighscores = async () => {
  const response = await fetch(API_URL)
  if (!response.ok) throw new Error('Failed to fetch highscores')
  return response.json()
}

export const postHighscore = async (name, score) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      score,
      time: new Date().toISOString() 
    })
  })
  if (!response.ok) throw new Error('Failed to post highscore')
  return response.json()
}