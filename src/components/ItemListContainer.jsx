import React, { useEffect, useState } from 'react'
import { customFetch } from './customFetch';
import products from './Guitar';
import ItemList from './ItemList';
import "./itemListContainer.css";


export default function ItemListContainer({greeting}) {

const [listProducts, setListProducts]=useState([])

useEffect(() => {
customFetch(products)
.then(data=> setListProducts(data))
},[])

console.log(listProducts);
  return (
    <>
    <div>{greeting}</div>
    <ItemList listProducts={listProducts}/>
    </>
  )
}
