import React from "react"

import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div>
			<h1>Home page</h1>

			<Link to="/use-state">Use State </Link>
			<br />
			<br />
			<br />
			<Link to="/use-effect">Use Effect </Link>
			<br />
			<br />
			<br />
			<Link to="/conditionals">Conditionals </Link>
			<br />
			<br />
			<br />
			<Link to="/forms">Forms </Link>
			<br />
			<br />
			<br />
			<Link to="/use-ref">Use Ref </Link>
			<br />
			<br />
			<br />
			<Link to="/use-reducer">Use Reducer </Link>
		</div>
	)
}

export default Home
