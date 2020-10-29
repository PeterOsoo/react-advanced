import React from "react"
import { useFetch } from "./UseFetch"

const url = "https://course-api.com/javascript-store-products"

const Example = () => {
	const { loading, products } = useFetch(url)
	console.log(products)
	return (
		<div>
			<h4>{loading ? "loading..." : "data"}</h4>
		</div>
	)
}

export default Example
