import React, { useEffect } from "react"

export const Basics = () => {
	useEffect(() => {
		console.log("call useEffect")
	}, console.log("render component"))
	return (
		<div>
			<h3>Use Effect Basics</h3>
		</div>
	)
}
