import countryAlphaCodes from "../database"
import worldFlags from "../assets/worldFlags.jpg"

function FlagArea({ gameStage, country }) {
	const flag = countryAlphaCodes[country]

	console.log(flag)

	return (
		<div className='flag-area'>
			{gameStage === 0 || gameStage === 11 ? (
				<img src={worldFlags} alt='World Flags' />
			) : flag ? (
				<img
					src={`https://flagcdn.com/w320/${flag}.png
`}
				/>
			) : (
				<p>Flag not found</p>
			)}
		</div>
	)
}

export default FlagArea
