import React, { useState, useEffect } from "react"

const ShowHide = () => {
	const [show, setShow] = useState(false)
	return (
		<>
			<h3>Show and Hide Component</h3>
			<button className="btn" onClick={() => setShow(!show)}>
				show/hide
			</button>
			{show && <Item />}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	)
}

const Item = () => {
	const [size, setSize] = useState(window.innerWidth)
	const checkSize = () => {
		setSize(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener("resize", checkSize)
		return () => {
			window.removeEventListener("resize", checkSize)
		}
	}, [])

	return (
		<div style={{ marginTop: "2rem" }}>
			<h3>Window</h3>
			<h4>size : {size}</h4>
		</div>
	)
}

export default ShowHide
