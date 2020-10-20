import React, { useEffect, useState } from "react"

export const Basics = () => {
	const [value, setValue] = useState(0)

	useEffect(() => {
		console.log("call useEffect")

		if (value > 0) {
			document.title = `New Messages(${value})`
		}
	}, [value])

	useEffect(() => {
		console.log("hello useEffet")
	}, [])

	console.log("render component")
	return (
		<>
			<div className="effect">
				<h3>1. Basic UseEfect Counter </h3>
				<p>updates document title on re-render when count is greater than 1</p>
				<h1>{value}</h1>
				<button className="btn" onClick={() => setValue(value + 1)}>
					click me
				</button>
			</div>
		</>
	)
}

// empty array to run once. Only after the initial render
