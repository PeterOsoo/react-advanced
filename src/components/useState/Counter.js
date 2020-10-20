import React, { useState } from "react"

const Counter = () => {
	const [value, setValue] = useState(0)

	const reset = () => {
		setValue(0)
	}

	const complexIncrease = () => {
		setTimeout(() => {
			// setValue(value + 1)
			setValue(prevState => {
				return prevState + 1
			})
		}, 2000)
	}

	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h3>3. Implementing a Counter </h3>
				<h4>regular counter</h4>
				<h1>{value}</h1>
				<button className="btn" onClick={() => setValue(value - 1)}>
					decrease
				</button>
				<button className="btn" onClick={reset}>
					reset
				</button>
				<button className="btn" onClick={() => setValue(value + 1)}>
					increase
				</button>
			</section>
			<section style={{ margin: "4rem 0" }}>
				<h4>more complex counter</h4>
				<p>counter who's value increases after a specific period of time.</p>
				<p>Using setTimeout</p>
				<h1>{value}</h1>
				<button className="btn" onClick={complexIncrease}>
					increase later
				</button>
			</section>
		</>
	)
}

export default Counter
