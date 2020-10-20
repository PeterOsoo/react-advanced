import React, { useState } from "react"
import { data } from "../data"

export const StateArray = () => {
	const [people, setPeople] = useState(data)

	const removeItem = id => {
		const newPeople = people.filter(person => person.id !== id)
		setPeople(newPeople)
	}

	return (
		<div className="state">
			<h3>2. UseState - Array </h3>
			<p>
				Clear list functionality. Clear specific item from list and all items on
				list
			</p>
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
			<br />
			<br />
			<br />
		</div>
	)
}
