import React, { useState, useReducer } from "react"

import { data } from "./data"
import Modal from "./Modal"

const reducer = (state, action) => {}

const defaultState = {
	people: data,
	isModalOpen: true,
	modalContent: "Hello World",
}

const UseReducer = () => {
	const [name, setName] = useState("")
	const [state, dispatch] = useReducer(reducer, defaultState)

	const handleSubmit = e => {
		e.preventDefault()
		console.log("submitted form")
		if (name) {
		} else {
		}
	}
	return (
		<>
			<h3>2. useReducer - Refactor</h3>
			{state.isModalOpen && <Modal modalContent={state.modalContent} />}

			<form action="" onSubmit={handleSubmit} className="form">
				<div className="">
					<input
						type="text"
						name=""
						id=""
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<button type="submit">add person</button>
			</form>
			{state.people.map(person => {
				return (
					<div className="" key={person.id}>
						<h4>{person.name}</h4>
					</div>
				)
			})}
		</>
	)
}

export default UseReducer
