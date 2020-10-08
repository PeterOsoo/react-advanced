import React from "react"
import "./App.css"
import { State } from "./components/useState/State"
import { StateArray } from "./components/useState/StateArray"
import { Object } from "./components/useState/Object"

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
			<Object />
		</React.Fragment>
	)
}

export default App
