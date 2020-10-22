import React from "react"

import "./forms.css"

import FormBasics from "./FormBasics"
import ControlledInputs from "./ControlledInputs"
import Lists from "./Lists"
import MultipleInputs from "./MultipleInputs"

const FormContainer = () => {
	return (
		<div>
			<FormBasics />
			<ControlledInputs />
			<Lists />
			<MultipleInputs />
		</div>
	)
}

export default FormContainer
