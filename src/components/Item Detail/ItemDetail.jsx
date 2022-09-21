import React, { useState } from 'react'
import ItemCount from '../ItemCount'
import "./itemDetail.css";
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function ItemDetail({productDetail}) {
    const[count, setCount]=useState(1)
    const [bought, setBought] = useState(false)
    const {id, mark, tag, img, price, stock} = productDetail;
    const {addItem}=useCart();

    const onAdd = () => {
        const purchase = {
            id, 
            mark,
            tag,
            img,
            price,
            quantity: count
        }
        setBought(true)
        addItem(purchase)
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
                : <button className='btnCart' ><Link to={"/cart"}>Go to cart</Link></button>
            }
        </div>
    )
}

export default ItemDetail