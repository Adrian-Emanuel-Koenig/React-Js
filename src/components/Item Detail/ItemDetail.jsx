import React, { useState } from 'react'
import ItemCount from '../ItemCount'
import "./itemDetail.css";
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Alert, Button,  Divider, Typography } from '@mui/material';

function ItemDetail({productDetail}) {
    const[count, setCount]=useState(1)
    const [bought, setBought] = useState(false)
    const {id, mark, tag, img, price, stock} = productDetail;
    const {addItem}=useCart();
    const navigate = useNavigate()

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
        <div className='detailContainer'>
        <div className='Item-Detail'>
            <Typography variant='h4'>{mark}</Typography>
            <Typography variant='p'>{tag}</Typography>
            <img src={img} alt={tag}/>
            <Typography variant='h4'>${price}</Typography>
            <Typography variant='p'>Stock: {stock}</Typography>
            {!bought
                ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
                : <Divider>
                    <Alert severity="success">{count} {tag} Added to Cart</Alert>
                    <Button variant='contained' color='primary' onClick={()=>{navigate("/cart")}}>Go to cart</Button>
                    <Button variant='contained' color='primary' onClick={()=>{navigate("/cart")}}>Continue Buying</Button>
                </Divider>
            }
        </div>
        </div>
    )
}

export default ItemDetail