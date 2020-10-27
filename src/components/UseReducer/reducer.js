// reducer action
export const reducer = (state, action) => {
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

	if (action.type === "CLOSE_MODAL") {
		return { ...state, isModalOpen: false }
	}

	if (action.type === "REMOVE_ITEM") {
		const newPeople = state.people.filter(
			person => person.id !== action.payload
		)
		return { ...state, people: newPeople }
	}
	throw new Error("No matching action..")
}
