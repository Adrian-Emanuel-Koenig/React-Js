import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../mocks/mockData';
import ItemList from './ItemList';
import "./itemListContainer.css";


export default function ItemListContainer({greeting}) {

const [listProducts, setListProducts]=useState([])
const [loading, setLoading]=useState(false)
const {categoryId} = useParams()

useEffect(() => {
  setLoading(true)
  data
.then((res) => {
  if (categoryId) {
    setListProducts(res.filter((item)=> item.category === categoryId))
  } else {
    setListProducts(res)
  }
})
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
},[categoryId])

  return (
    <div className='itemList-container'>
      <h3 className='tittle'>{greeting}</h3>
      {loading ? <p>Loading...</p> : <ItemList listProducts={listProducts}/>}  
    </div>
  )
}
