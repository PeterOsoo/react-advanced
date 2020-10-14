import React from "react"
import "./App.css"
import { State } from "./components/useState/State"
import { StateArray } from "./components/useState/StateArray"
import Counter from "./components/useState/Counter"
import { Basics } from "./components/useEffect/Basics"
import CleanUp from "./components/useEffect/CleanUp"
import { FetchData } from "./components/useEffect/FetchData"
import MultipleReturnsBasic from "./components/Conditional Rendering/MultipleReturnsBasic"
import MultipleReturnsData from "./components/Conditional Rendering/MultipleReturnsData"

function App() {
	return (
		<React.Fragment>
			{/* <div className="App">
				<div className="App">
					<h1>react concepts</h1>
					<State />
				</div>
				<div>
					<StateArray />
				</div>
				<Counter />
			</div> */}

			{/* <Basics /> */}
			{/* <CleanUp /> */}
			{/* <FetchData /> */}

			{/* conditionals  */}
			<MultipleReturnsBasic />
			<MultipleReturnsData />
		</React.Fragment>
	)
}

export default App
