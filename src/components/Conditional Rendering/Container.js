import React from "react"
import MultipleReturnsBasic from "./MultipleReturnsBasic"
import MultipleReturnsData from "./MultipleReturnsData"
import ShortCircuit from "./ShortCircuit"
import ShowHide from "./ShowHide"

function Container() {
	return (
		<div>
			<MultipleReturnsBasic />
			<MultipleReturnsData />
			<ShortCircuit />
			<ShowHide />
		</div>
	)
}

export default Container
