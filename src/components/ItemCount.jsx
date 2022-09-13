import React from 'react';
import "./itemCount.css";

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
        <button onClick={remove}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
    </div>
        <button className='buttonBuy' onClick={onAdd}>Buy</button>
    </>
)}