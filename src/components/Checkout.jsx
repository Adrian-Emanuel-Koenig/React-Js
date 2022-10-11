import { Button, Input, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase/firebase'
import "./checkout.css";

function Checkout() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [orderId, setorderId] = useState("")
    const [require, setRequire] = useState(false)
    const [loading, setLoading] = useState(false)
    const {cart,  cartTotal, clear} = useCart()

    const ordersDetails = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const buyProducts = (e)=>{
        e.preventDefault()
        if (Object.values(user).length !== 3) {
            setRequire(true)
        } else {
            setRequire(false)
            setLoading(true)
            const sales = collection(db,"orders")
            addDoc(sales, {
                user,
                items: cart,
                total: cartTotal(),
                date: serverTimestamp()
            })
            .then((res)=>{
                setorderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
        }
    }
    if(loading){
        return <CircularProgress size={150}/>
    }
    
    return (
        <div className='checkout'>
            {!orderId
            ?<div>
                <Typography variant='h3'>Checkout</Typography>
            <form onSubmit={buyProducts}>
            <Input type='text' placeholder='Name' name="name" onChange={ordersDetails}></Input>
            <Input type='number' placeholder='Number' name='phone' onChange={ordersDetails}></Input>
            <Input  type='email' placeholder='Email' name='email' onChange={ordersDetails}></Input>
            <Button type='submit' size='large' variant="contained" color="primary">Send Order</Button>
            {require && <Typography variant='h5'>Complete the form</Typography>}     
            </form>
            </div>
            :
            <div>
                <Typography variant='h2' gutterBottom>
                Thanks for your purchase
                </Typography>
                <Typography variant='h3' gutterBottom>
                Your order is: {orderId}
                </Typography>
                <Button onClick={()=> navigate('/home')} >Return</Button>
            </div>}
        </div>
    )
}

export default Checkout