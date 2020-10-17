import React, { useState } from "react"

const FormBasics = () => {
	const handleSubmit = e => {
		e.preventDefault()
		console.log("form submitted")
	}

	return (
		<article>
			<form action="" className="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="firstName">Name: </label>
					<input type="text" name="firstName" id="firstName" />
				</div>

				<div className="form-control">
					<label htmlFor="email">Email: </label>
					<input type="text" name="email" id="email" />
				</div>
				<button type="submit">add person</button>
				{/* button onclick also works  */}
				{/* <button type="submit" onClick={handleSubmit}>add person</button> */}
			</form>
		</article>
	)
}

export default FormBasics
