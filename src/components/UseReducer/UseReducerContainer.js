import React, { useState, useReducer } from "react"

import "./reducer.css"

import { data } from "./data"
import UseReducerBasics from "./UseReducerBasics"

const UseReducerContainer = () => {
	const [name, setName] = useState("")
	const [people, setPeople] = useState(data)
	const [showModal, setShowModal] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		console.log("submitted form")
		if (name) {
			setShowModal(true)
			setPeople([...people, { id: new Date().getTime().toString(), name }])
			setName("")
		} else {
			setShowModal(true)
		}
	}
	return (
		<>
			{showModal && <UseReducerBasics />}

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
			{people.map(person => {
				return (
					<div className="" key={person.id}>
						<h4>{person.name}</h4>
					</div>
				)
			})}
		</>
	)
}

export default UseReducerContainer
