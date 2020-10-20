import React, { useState, useEffect } from "react"

const url = "https://api.github.com/users"

export const FetchData = () => {
	const [users, setUsers] = useState([])

	const getUsers = async () => {
		const response = await fetch(url)
		const users = await response.json()
		setUsers(users)
		// console.log(users);
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<>
			<h3>3. github users</h3>
			<p>fetch github users from API endpoint</p>
			<ul className="users">
				{users.map(user => {
					const { id, login, avatar_url, html_url } = user

					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />

							<div>
								<h4>{login}</h4>
								<a target="_blank" href={html_url}>
									profile
								</a>
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}
