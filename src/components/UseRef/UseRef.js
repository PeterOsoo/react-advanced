import React, { useEffect, useRef } from "react"

// preserves value between the renders
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRef = () => {
	const refContainer = useRef(null)

	const handleSubmit = e => {
		e.preventDefault()
		console.log(refContainer.current.value)
	}

	// focus input on render
	useEffect(() => {
		console.log(refContainer.current)
		refContainer.current.focus()
	})

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div>
				<input type="text" ref={refContainer} />
			</div>
			<button type="submit">submit</button>
		</form>
	)
}

export default UseRef
