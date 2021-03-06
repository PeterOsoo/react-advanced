import React from "react"

const FormBasics = () => {
	const handleSubmit = e => {
		e.preventDefault()
		console.log("form submitted...")
	}

	return (
		<div className="forms">
			<h3>1. Form Basics </h3>
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

					{/* button onclick also works as onSubmit on the form   */}
					{/* <button type="submit" onClick={handleSubmit}>add person</button> */}
				</form>
			</article>
		</div>
	)
}

export default FormBasics
