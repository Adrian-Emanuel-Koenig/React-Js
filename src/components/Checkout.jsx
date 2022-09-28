import { Button, Input } from '@mui/material'
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
        return <img src='https://cutewallpaper.org/21/loading-animated-gif-transparent-background/wesusa-on-Scratch.png'alt='Loading...'/>
    }
    
    return (
        <div className='checkout'>
            {!orderId
            ?<div>
            <h3>Checkout</h3>
            <form onSubmit={buyProducts}>
            <Input type='text' placeholder='Name' name="name" onChange={ordersDetails}></Input>
            <Input type='number' placeholder='Number' name='phone' onChange={ordersDetails}></Input>
            <Input  type='email' placeholder='Email' name='email' onChange={ordersDetails}></Input>
            <Button type='submit'>Buy</Button>     
            {require && <p>Complete the form</p>}     
            </form>
            </div>
            :
            <div>
                <h2>Thanks for your purchase</h2>
                <h3>Your order is: {orderId}</h3>
                <Button onClick={()=> navigate('/')} >Return</Button>
            </div>}
        </div>
    )
}

export default Checkout