import React, { useState } from "react"

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState("")
	const [email, setEmail] = useState("")

	const handleSubmit = e => {
		e.preventDefault()
		console.log(firstName, email)
	}

	return (
		<div className="forms">
			<h3>2. Contolled Inputs </h3>
			<article>
				<form action="" className="form" onSubmit={handleSubmit}>
					<div className="form-control">
						<label htmlFor="firstName">Name: </label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
					</div>

					<div className="form-control">
						<label htmlFor="email">Email: </label>
						<input
							type="text"
							name="email"
							id="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<button type="submit">add person</button>

					{/* button onclick also works as onSubmit on the form   */}
					{/* <button type="submit" onClick={handleSubmit}>add person</button> */}
				</form>
			</article>
		</div>
	)
}

export default ControlledInputs
