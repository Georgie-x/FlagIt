function genQ(array) {
  const codes = Object.keys(array);
  const shuffledCodes = [...codes].sort(() => 0.5 - Math.random());
  const questionsArray = shuffledCodes.map((correctCountryCode) => {
    const wrongCountries = codes
      .filter((c) => c !== correctCountryCode)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const shuffledAnswers = [...wrongCountries, correctCountryCode]
      .map((a) => ({ answer: a, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ answer }) => answer);
    return { correctCountryCode, shuffledAnswers };
  });
  return questionsArray;
}

export default genQ;
