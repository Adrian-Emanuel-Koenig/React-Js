import React from 'react'

function Item({product}) {
  return (
	<div>
		<h3>{product.mark}</h3>
		<h4>{product.tag}</h4>
		<img src={product.img}/>
		<p>${product.price}</p>
		<p>Stock: {product.stock}</p>
	</div>
  )
}

export default Item