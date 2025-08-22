function genQ(array) {
	const codes = Object.values(array)
	const shuffledCodes = [...codes].sort(() => 0.5 - Math.random())
	const questionsArray = shuffledCodes.map((correctCountry) => {
		const wrongCountries = codes
			.filter((c) => c !== correctCountry)
			.sort(() => 0.5 - Math.random())
			.slice(0, 3)
		const shuffledAnswers = [...wrongCountries, correctCountry]
			.map((a) => ({ answer: a, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ answer }) => answer)
		return { correctCountry, shuffledAnswers }
	})
	return questionsArray
}

export default genQ
