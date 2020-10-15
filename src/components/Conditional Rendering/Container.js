import React from "react"
import MultipleReturnsBasic from "./MultipleReturnsBasic"
import MultipleReturnsData from "./MultipleReturnsData"
import ShortCircuit from "./ShortCircuit"

function Container() {
	return (
		<div>
			<MultipleReturnsBasic />
			<MultipleReturnsData />
			<ShortCircuit />
		</div>
	)
}

export default Container
