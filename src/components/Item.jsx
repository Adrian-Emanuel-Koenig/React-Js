import { Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Item({product}) {
	const navigate = useNavigate()
	const {mark, tag, img, price, id} = product;

  return (
	<div className='Item-Card'>
		<Typography variant='h4'>{mark}</Typography>
		<Typography variant='h6'>{tag}</Typography>
		<img src={img} alt={tag}/>
		<Typography variant='h6'>${price}</Typography>
		<Button color="primary" variant="contained" onClick={()=>{navigate(`/item/${id}`)}}>View</Button>
	</div>
  )
}

export default Item