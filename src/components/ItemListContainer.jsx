import React, { useEffect, useState } from 'react'
import { customFetch } from './customFetch';
import { data } from '../mocks/mockData'
import products from './Guitar';
import ItemList from './ItemList';
import "./itemListContainer.css";


export default function ItemListContainer({greeting}) {

const [listProducts, setListProducts]=useState([])
const [loading, setLoading]=useState(false)

useEffect(() => {
  setLoading(true)
  data
// customFetch(products)
.then(res=> setListProducts(res))
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
},[])

  return (
    <div className='itemList-container'>
      <h3 className='tittle'>{greeting}</h3>
      <ItemList listProducts={listProducts}/>
    </div>
  )
}
