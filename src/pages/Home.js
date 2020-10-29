import React from "react"

import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div>
			<h1>React Concepts</h1>
			<br />
			<br />
			<hr />
			<br />
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
			<br />
			<br />
			<br />
			<Link to="/prop-drilling">Prop Drilling </Link>
			<br />
			<br />
			<br />
			<Link to="/use-context">Use Context </Link>
		</div>
	)
}

export default Home
