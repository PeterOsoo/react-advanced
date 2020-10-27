import React, { useState, useReducer } from "react"

// import { data } from "./data"
import Modal from "./Modal"

import { reducer } from "./reducer"

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

	// close Modal

	const closeModal = () => {
		dispatch({
			type: "CLOSE_MODAL",
		})
	}

	return (
		<>
			<h3>2. useReducer </h3>
			{state.isModalOpen && (
				<Modal modalContent={state.modalContent} closeModal={closeModal} />
			)}

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
					<div className="item" key={person.id}>
						<h4>{person.name}</h4>
						<button
							onClick={() =>
								dispatch({ type: "REMOVE_ITEM", payload: person.id })
							}
						>
							remove
						</button>
					</div>
				)
			})}
		</>
	)
}

export default UseReducer
