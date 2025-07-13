import {
	Header,
	Footer,
	GameControl,
} from "./components/index"

function App() {
	return (
		<>
			<div className='layout-container'>
				<Header />
				<GameControl />
				<Footer />
			</div>
		</>
	)
}

export default App
