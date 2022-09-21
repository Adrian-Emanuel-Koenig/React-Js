import {Button} from '@mui/material'
import React from 'react'
import {useCart} from '../context/CartContext'
import "./cartProducts.css";


function CartProducts({bought}) {
    const {removeItem} = useCart()

    return (
        <div key={bought.id} className="cartProducts">
            <img src={bought.img} alt={bought.tag}/>
            <div>
                <p>{bought.mark}</p>
                <p>{bought.tag}</p>
                <p>Quantity: {bought.quantity}</p>
                <p>Price: ${bought.price}</p>
            </div>
            <Button onClick={() => removeItem(bought.id)}>Remove Product</Button>
        </div>
    )
}

export default CartProducts