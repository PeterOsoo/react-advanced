import React from "react"
import "./App.css"

import UseStateContainer from "./components/useState/UseStateContainer"

import { Basics } from "./components/useEffect/Basics"
import CleanUp from "./components/useEffect/CleanUp"
import { FetchData } from "./components/useEffect/FetchData"

import Container from "./components/Conditional Rendering/Container"

import FormContainer from "./components/Forms/FormContainer"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<Switch>
					<Route>
						<Link to="/" exact>
							{" "}
							Home{" "}
						</Link>
						<Link to="/usestate" exact component={UseStateContainer}>
							useState
						</Link>
					</Route>
				</Switch>
				{/* <UseStateContainer /> */}

				{/* <Basics /> */}
				{/* <CleanUp /> */}
				{/* <FetchData /> */}

				{/* conditionals  */}

				{/* <Container />

				<FormContainer /> */}
			</div>
		</React.Fragment>
	)
}

export default App
