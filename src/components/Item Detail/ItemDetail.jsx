import React from 'react'
import ItemCount from '../ItemCount'
import "./itemDetail.css";

function ItemDetail({productDetail}) {
	const {mark, tag, img, price, stock} = productDetail;

    return (
        <div className='Item-Detail'>
            <h3>{mark}</h3>
            <h4>{tag}</h4>
            <img src={img}/>
            <p>${price}</p>
            <p>Stock: {stock}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail