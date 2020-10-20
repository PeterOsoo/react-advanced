import React, { useState } from "react"

// UseState - Basics
export const State = () => {
	const [text, setText] = useState("rabet")

	const handleClick = () => {
		if (text === "rabet") {
			setText("ondiek")
		} else {
			setText("rabet")
		}
	}

	return (
		<React.Fragment>
			<div className="state">
				<h3> 1. change name on button click </h3>
				<h3>{text}</h3>
				<p>CLick button below to change name </p>
				<button type="button" className="btn" onClick={handleClick}>
					change name
				</button>
				<br />
				<br />
				<br />
			</div>
		</React.Fragment>
	)
}

// hooks
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

// console.log(useState());
// const value = useState()[0];
// const handler = useState()[1];
// console.log(value, handler);
