import React from "react"
import "./App.css"

import Home from "./pages/Home"

import UseStateContainer from "./components/useState/UseStateContainer"
import UseEffectContainer from "./components/useEffect/UseEffectContainer"

import ConditionalsContainer from "./components/ConditionalRendering/ConditionalsContainer"

import FormContainer from "./components/Forms/FormContainer"

import UseRef from "./components/UseRef/UseRef"

import { Switch, Route } from "react-router-dom"

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />

					<Route path="/use-state" exact component={UseStateContainer} />

					<Route path="/use-effect" exact component={UseEffectContainer} />

					<Route path="/conditionals" exact component={ConditionalsContainer} />

					<Route path="/forms" exact component={FormContainer} />

					<Route path="/use-ref" exact component={UseRef} />

					{/* <Route component={Error} /> */}
				</Switch>
			</div>
		</React.Fragment>
	)
}

export default App
