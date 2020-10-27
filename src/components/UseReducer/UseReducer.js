import React, { useState, useReducer } from "react"

import { data } from "./data"
import Modal from "./Modal"

// reducer action
const reducer = (state, action) => {
	// always return some kind of state
	// console.log(state, action)
	if (action.type === "ADD_ITEM") {
		const newPeople = [...state.people, action.payload]
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: `Person was added!`,
		}
	}
	// return state
	// throw new Error("No matching action..")
	if (action.type === "NO_VALUE") {
		return {
			...state,
			isModalOpen: true,
			modalContent: "Please enter valid name",
		}
	}
}

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: "",
}

const UseReducer = () => {
	const [name, setName] = useState("")
	const [state, dispatch] = useReducer(reducer, defaultState)

	const handleSubmit = e => {
		e.preventDefault()
		// console.log("submitted form")
		if (name) {
			const newItem = {
				id: new Date().getTime().toString(),
				name,
			}
			dispatch({ type: "ADD_ITEM", payload: newItem })
			setName("")
		} else {
			dispatch({ type: "NO_VALUE" })
		}
	}
	return (
		<>
			<h3>2. useReducer </h3>
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
