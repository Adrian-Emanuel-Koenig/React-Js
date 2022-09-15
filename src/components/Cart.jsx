import React from 'react'
import { useCart } from '../context/CartContext'

function Cart() {

const {cart}=useCart()
console.log('Ready to buy: ', cart)
  return (
    <div>Cart</div>
  )
}

export default Cart