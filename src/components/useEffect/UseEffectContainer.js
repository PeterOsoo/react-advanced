import React from "react"

import "./effect.css"

import { Basics } from "./Basics"
import CleanUp from "./CleanUp"
import { FetchData } from "./FetchData"

const UseStateContainer = () => {
	return (
		<div className="App">
			<h3>react concepts - use Effect Hook </h3>
			<Basics />
			<CleanUp />
			<FetchData />
		</div>
	)
}

export default UseStateContainer
