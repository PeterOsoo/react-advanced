import React from "react"

import "./forms.css"

import FormBasics from "./FormBasics"
import ControlledInputs from "./ControlledInputs"
import Lists from "./Lists"

const FormContainer = () => {
	return (
		<div>
			<FormBasics />
			<ControlledInputs />
			<Lists />
		</div>
	)
}

export default FormContainer
