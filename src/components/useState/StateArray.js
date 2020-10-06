import React, { useState } from "react"
import { data } from "../data"

export const StateArray = () => {
	const [people, setPeople] = useState(data)

	const removeItem = id => {
		const newPeople = people.filter(person => person.id !== id)
		setPeople(newPeople)
	}

	return (
		<div>
			<h3>UseState - Array </h3>
			{people.map(person => {
				const { id, name } = person
				return (
					<div key={id} className="item">
						<h4> {name} </h4>
						<button onClick={() => removeItem(id)}>remove</button>
					</div>
				)
			})}

			<button className="btn" onClick={() => setPeople([])}>
				clear items
			</button>
		</div>
	)
}
