import React, { useState } from 'react'
import ItemCount from '../ItemCount'
import "./itemDetail.css";

function ItemDetail({productDetail}) {
    const[count, setCount]=useState(1)
    const [bought, setBought] = useState(false)
    const {mark, tag, img, price, stock} = productDetail;

    const onAdd = () => {
        console.log(`Bought: ${count} ${mark} ${tag}`);
        setBought(true)
    }

    return (
        <div className='Item-Detail'>
            <h3>{mark}</h3>
            <h4>{tag}</h4>
            <img src={img} alt={tag}/>
            <p>${price}</p>
            <p>Stock: {stock}</p>
            {!bought
                ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
                : <button className='btnCart'>Go to cart</button>
            }
        </div>
    )
}

export default ItemDetail