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
			<h1>window</h1>
			<h2>{size} PX</h2>
		</>
	)
}

export default CleanUp
