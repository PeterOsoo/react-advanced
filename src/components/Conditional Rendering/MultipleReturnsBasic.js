import React, { useState } from "react"

const MultipleReturnsBasic = () => {
	const [loading, setLoading] = useState(true)

	if (loading) {
		return <h3>Loading...</h3>
	}
	return <h3>multiple returns</h3>
}

export default MultipleReturnsBasic
