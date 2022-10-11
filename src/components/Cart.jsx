import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartProducts from './CartProducts'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Cart() {
const navigate = useNavigate()
const {cart, cartTotal, clear}=useCart()

  return (
    <div className='cartContainer'>
      {
        !cart.length
        ?<div>
          <Typography variant='h3'>Cart empty<ShoppingCartOutlinedIcon fontSize="large"/></Typography>
          <Button variant="contained" onClick={()=>{navigate("/")}}> Back to Home</Button>
        </div>
        :<div>
          <Typography variant='h3'>My Cart</Typography>
            {cart.map((bought)=> <CartProducts key={bought.id} bought={bought}/>)}
          <Typography variant='h4'> Total payment: ${cartTotal()} </Typography>
          <Button variant="contained" color="primary" onClick={clear}>Clear Cart</Button>
          <Button variant="contained" color="success" onClick={()=> navigate('/checkout')} >Buy products</Button>
        </div>
      }
    </div>
  )
}
export default Cart