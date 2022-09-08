import React, { useState } from 'react';
import "./itemCount.css";

export default function ItemCount({stock, initial, onAdd}) {
const[count, setCount]=useState(initial)

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
        <button onClick={remove}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
    </div>
        <button className='buttonBuy' onClick={onAdd}>Buy</button>
    </>
)}