import React from "react"
// import "./App.css"
import { State } from "./components/useState/State"
import { StateArray } from "./components/useState/StateArray"
import Counter from "./components/useState/Counter"

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<div className="App">
					<h1>react concepts</h1>
					<State />
				</div>
				<div>
					<StateArray />
				</div>
				<Counter />
			</div>
		</React.Fragment>
	)
}

export default App
