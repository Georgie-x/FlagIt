function Instructions({ gameMode }) {
	const defaultText =
		"Can you guess all flags correctly? You'll be given 10 random flags of the world and have to guess the country it belongs to. There will be 4 options to choose from. Good luck!!"

	const survivalText =
		"Hardcore Survival Mode!! Think you've got what it takes? You will get ALL country flags and will be instantly eliminated if you answer any wrong. Can you MegaFlagIt?"

	return (
		<div className='instructions'>
			<p>{gameMode === "10" ? defaultText : survivalText}</p>
		</div>
	)
}

export default Instructions
