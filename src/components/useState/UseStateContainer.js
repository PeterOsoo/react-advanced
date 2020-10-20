import React from "react"

import "./state.css"

import { State } from "./State"
import { StateArray } from "./StateArray"
import Counter from "./Counter"

const UseStateContainer = () => {
	return (
		<div className="App">
			<h3>react concepts - use State Hook </h3>
			<State />
			<StateArray />
			<Counter />
		</div>
	)
}

export default UseStateContainer
