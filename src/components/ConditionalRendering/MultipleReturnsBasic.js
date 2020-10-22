import React, { useState } from "react"

const MultipleReturnsBasic = () => {
	const [loading, setLoading] = useState(true)

	if (loading) {
		return (
			<div className="conditionals">
				<h3>1. Multiple returns </h3>
				<h4>Loading...</h4>
			</div>
		)
	}
	return (
		<div className="conditionals">
			<h3>1. Multiple returns </h3>
			<p>doesn't display loading when state is false </p>
		</div>
	)
}

export default MultipleReturnsBasic
