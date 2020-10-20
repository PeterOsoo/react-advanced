import React, { useState, useEffect } from "react"

// cleanup function
// second argument

const CleanUp = () => {
	const [size, setSize] = useState(window.innerWidth)

	const checkSize = () => {
		setSize(window.innerWidth)
	}

	useEffect(() => {
		console.log("useEffect")
		window.addEventListener("resize", checkSize)

		//callback function
		return () => {
			console.log("cleanup")
			window.removeEventListener("resize", checkSize)
		}

		//empty dependency array runs useEffect only once
	}, [])
	console.log("render")
	return (
		<>
			<div className="effect">
				<h3>2. cleanup function</h3>
				<p>
					useEffect hook to change to display the size of screen width in pixels
					after every resize of page{" "}
				</p>
				<p>Implenments cleanup function in UseEffect hook</p>
				<h3> window size </h3>

				<h2>{size} PX</h2>
			</div>
		</>
	)
}

export default CleanUp
