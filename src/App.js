import React from "react"
import "./App.css"

import Home from "./pages/Home"
import Error from "./pages/Error"

import { Switch, Route } from "react-router-dom"

import UseStateContainer from "./components/useState/UseStateContainer"
import UseEffectContainer from "./components/useEffect/UseEffectContainer"

import ConditionalsContainer from "./components/ConditionalRendering/ConditionalsContainer"

import FormContainer from "./components/Forms/FormContainer"

import UseRef from "./components/UseRef/UseRef"

import UseReducerContainer from "./components/UseReducer/UseReducerContainer"

import PropDrilling from "./components/PropDrilling/PropDrilling"

import Context from "./components/UseContext/Context"

import CustomContainer from "./components/CustomHooks/CustomContainer"

import PropTypes from "./components/PropTypes/PropTypes"

import People from "./components/ReactRouter/People"
import Person from "./components/ReactRouter/Person"

import Optimization from "./components/Optimization/Optimization"

const App = () => {
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

					<Route path="/use-reducer" exact component={UseReducerContainer} />

					<Route path="/prop-drilling" exact component={PropDrilling} />

					<Route path="/use-context" exact component={Context} />

					<Route path="/custom-hooks" exact component={CustomContainer} />

					<Route path="/prop-types" exact component={PropTypes} />

					<Route path="/people" component={People} />

					<Route path="/person/:id" children={<Person />}></Route>

					<Route path="/optimization" component={Optimization} />

					<Route path="*" component={Error} />
				</Switch>
			</div>
		</React.Fragment>
	)
}

export default App
