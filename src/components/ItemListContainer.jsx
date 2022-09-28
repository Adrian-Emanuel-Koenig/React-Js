import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import ItemList from './ItemList';
import "./itemListContainer.css";


export default function ItemListContainer({greeting}) {

const [listProducts, setListProducts]=useState([])
const [loading, setLoading]=useState(false)
const {categoryId} = useParams()

useEffect(()=>{
  setLoading(true)
  const products = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products");
  getDocs(products)
  .then((res)=>{
    const list = res.docs.map((product)=>{
      return {
        id:product.id,
        ...product.data()
      }
    })
    setListProducts(list)
  })
  .catch((error)=>console.log(error))
  .finally(()=> setLoading(false))
},[categoryId])


  return (
    <div className='itemList-container'>
      <h3 className='tittle'>{greeting}</h3>
      {loading ? <img src='https://cutewallpaper.org/21/loading-animated-gif-transparent-background/wesusa-on-Scratch.png'alt='Loading...'/> : <ItemList listProducts={listProducts}/>}  
    </div>
  )
}
