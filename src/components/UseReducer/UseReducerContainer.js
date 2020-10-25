import React from "react"

import "./reducer.css"

import UseReducerBasics from "./UseReducerBasics"
import UseReducer from "./UseReducer"

const UseReducerContainer = () => {
	return (
		<>
			<div className="reducer">
				<UseReducerBasics />
			</div>
			<div className="reducer">
				<UseReducer />
			</div>
		</>
	)
}

export default UseReducerContainer
