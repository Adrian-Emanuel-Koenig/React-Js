import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

export default function CartWidget() {
  const{cartQuantity}=useCart()
  return (
    <>
    <ShoppingCartIcon />
    <span>{cartQuantity() || ''}</span>
    </>
  )
};