import React from "react"

import "./forms.css"

import FormBasics from "./FormBasics"
import ControlledInputs from "./ControlledInputs"

const FormContainer = () => {
	return (
		<div>
			<FormBasics />
			<ControlledInputs />
		</div>
	)
}

export default FormContainer
