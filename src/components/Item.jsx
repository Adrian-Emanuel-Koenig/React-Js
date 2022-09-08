import React from 'react'
import { Link } from 'react-router-dom'


function Item({product}) {
	const {mark, tag, img, price, id} = product;

  return (
	<div className='Item-Card'>
		<h3>{mark}</h3>
		<h4>{tag}</h4>
		<img src={img} alt={tag}/>
		<p>${price}</p>
		<Link to={`/category/${id}`}><button>View</button></Link>
	</div>
  )
}

export default Item