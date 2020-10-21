import React, { useState, useEffect } from "react"
const url = "https://api.github.com/users/Atmos"

const MultipleReturnsData = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [user, setUser] = useState("default user")

	useEffect(() => {
		fetch(url)
			.then(resp => {
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json()
				} else {
					setIsLoading(false)
					setIsError(true)

					throw new Error(resp.statusText)
				}
			})

			.then(user => {
				const { login } = user
				setUser(login)
				setIsLoading(false)
			})

			// network error
			.catch(error => console.log(error))
	}, [])

	if (isLoading) {
		return (
			<div className="conditionals">
				<h3>Multiple Returns Data </h3>
				<h3>Loading...</h3>
			</div>
		)
	}

	if (isError) {
		return (
			<div className="conditionals">
				<h3>Multiple Returns Data </h3>
				<h3>Something went wrong....</h3>
			</div>
		)
	}

	return (
		<div className="conditionals">
			<h3>Multiple Returns Data </h3>
			<h3>{user}</h3>
		</div>
	)
}

export default MultipleReturnsData
