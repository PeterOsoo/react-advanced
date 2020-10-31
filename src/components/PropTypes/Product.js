import React from "react"
import PropTypes from "prop-types"
import defaultImage from "./assets/default-image.jpeg"

const Product = ({ image, name, price }) => {
	return (
		<article className="product">
			<img src={image.url} alt={name || "default name"} />
			<h4>{name}</h4>
			<p>Kshs {price}</p>
		</article>
	)
}

// prop types
Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
}

// default props
Product.defaultProps = {
	name: "default name",
	price: 3.59,
	image: defaultImage,
}

export default Product
