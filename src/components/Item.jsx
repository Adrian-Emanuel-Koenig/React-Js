import React from 'react'

function Item({product}) {
	const {mark, tag, img, price, stock} = product;
  return (
	<div className='Item-Card'>
		<h3>{mark}</h3>
		<h4>{tag}</h4>
		<img src={img}/>
		<p>${price}</p>
		{/* <p>Stock: {stock}</p> */}
		<button> View </button>
	</div>
  )
}

export default Item