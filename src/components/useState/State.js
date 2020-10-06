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
			<h2>UseState - Basics</h2>
			<h3>{text}</h3>
			<button type="button" className="btn" onClick={handleClick}>
				change name
			</button>
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
