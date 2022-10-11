import { Button, Typography } from '@mui/material';
import React from 'react';
import "./itemCount.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ItemCount({stock, initial, onAdd, count, setCount}) {

const remove = () =>{
    if(count > initial){
        setCount(count-1)
    }
}

const add = () =>{
    if(count < stock){
        setCount(count + 1)
    }
}

return (
    <>
    <div className='itemCount'>
        <Button variant="contained" color="error" onClick={remove}>-</Button>
        <Typography>{count}</Typography>
        <Button variant="contained" color="success" onClick={add}>+</Button>
    </div>
        <Button variant="contained" color="primary"  size="large" onClick={onAdd}><AddShoppingCartIcon/>Add to Cart</Button>
    </>
)}