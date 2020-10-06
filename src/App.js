import React from "react"
import "./App.css"
import { State } from "./components/useState/State"
import { StateArray } from "./components/useState/StateArray"

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<h1>react concepts</h1>
				<State />
			</div>
			<div>
				<StateArray />
			</div>
		</React.Fragment>
	)
}

export default App
