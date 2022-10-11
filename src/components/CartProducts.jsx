import {Button, Typography} from '@mui/material'
import React from 'react'
import {useCart} from '../context/CartContext'
import "./cartProducts.css";


function CartProducts({bought}) {
    const {removeItem} = useCart()

    return (
        <div key={bought.id} className="cartProducts">
            <img src={bought.img} alt={bought.tag}/>
            <div>
                <Typography variant='p'>{bought.mark}</Typography>
                <Typography variant='p'>{bought.tag}</Typography>
                <Typography variant='p'>Quantity: {bought.quantity}</Typography>
                <Typography variant='p'>Price: ${bought.price}</Typography>
            </div>
            <Button variant="contained" color="error" onClick={() => removeItem(bought.id)}>Remove Product</Button>
        </div>
    )
}

export default CartProducts