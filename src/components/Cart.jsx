import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartProducts from './CartProducts'

function Cart() {

const {cart, cartTotal, clear}=useCart()

  return (
    <div>
      {
        !cart.length
        ?<div>
          <h3>Cart empty</h3>
          <Link to={('/')}><Button> Back to Home</Button></Link>
        </div>
        :<div>
          <h3>Cart</h3>
            {cart.map((bought)=> <CartProducts key={bought.id} bought={bought}/>)}
          <span>Total payment: ${cartTotal()}</span>
          <Button onClick={clear}>Clear Cart</Button>
          <Link to={('/checkout')}><Button>Buy products</Button></Link>
        </div>
      }
    </div>
  )
}

export default Cart