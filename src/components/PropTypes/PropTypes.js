import React from "react"
import Product from "./Product"
import { useFetch } from "../CustomHooks/UseFetch"
// import defaultImage from "./assets/default-image.jpeg"

const url = "https://course-api.com/react-prop-types-example"

const PropTypes = () => {
	const { products } = useFetch(url)
	return (
		<div>
			<h2>products</h2>
			{/* <img src={defaultImage} /> */}
			<section className="products">
				{products.map(product => {
					return <Product key={product.id} {...product} />
				})}
			</section>
		</div>
	)
}

export default PropTypes
