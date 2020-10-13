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
			<h1>{value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				click me
			</button>
		</>
	)
}

// empty array to run once. Only after the initial render
