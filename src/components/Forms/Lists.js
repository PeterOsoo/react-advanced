import React, { useState } from "react"

// Add Item To The List

const Lists = () => {
	const [firstName, setFirstName] = useState("")
	const [email, setEmail] = useState("")
	const [people, setPeople] = useState([])

	const handleSubmit = e => {
		e.preventDefault()
		if (firstName && email) {
			const person = {
				id: new Date().getTime().toString(),
				firstName,
				email,
			}
			console.log(person)
			setPeople(people => {
				return [...people, person]
			})
			setFirstName("")
			setEmail("")
		} else {
			console.log("empty values... ")
		}
	}

	return (
		<div className="forms">
			<h3>3. Add Item To The List</h3>
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
				{people.map(person => {
					const { id, firstName, email } = person
					return (
						<div className="item" key={id}>
							<h4>{firstName}</h4>
							<p> {email}</p>
						</div>
					)
				})}
			</article>
		</div>
	)
}

export default Lists
