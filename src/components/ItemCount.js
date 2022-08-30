import React from 'react';
import "./itemCount.css";

export default function ItemCount({stock, initial, onAdd, Remove}) {

return (
    <div className='itemCount-container'>
    <div>Stock: {stock}</div>
    <div className='itemCount-buttons'> <button onClick={Remove}>-</button>
    <div>{initial}</div>
    <button onClick={onAdd}>+</button>
    </div>
    <button className='buttonBuy'>Buy</button>
    </div>
)}