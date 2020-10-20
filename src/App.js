import React from "react"
import "./App.css"

import UseStateContainer from "./components/useState/UseStateContainer"
import UseEffectContainer from "./components/useEffect/UseEffectContainer"

import Container from "./components/Conditional Rendering/Container"

import FormContainer from "./components/Forms/FormContainer"

import { Switch, Route } from "react-router-dom"

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<Switch>
					<Route path="/" exact>
						{" "}
						Home{" "}
					</Route>

					<Route path="/use-state" exact component={UseStateContainer} />

					<Route path="/use-effect" exact component={UseEffectContainer} />

					{/* <Route component={Error} /> */}
				</Switch>

				{/* conditionals  */}

				{/* <Container />

				<FormContainer /> */}
			</div>
		</React.Fragment>
	)
}

export default App
