import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../mocks/mockData'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [productDetail, setProductDetail]= useState({})
  const [loading, setLoading]= useState(true)
  const {id} =useParams()

useEffect(()=>{
data
.then((res)=>setProductDetail(res.find((item)=> item.id === id)))
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
},[id])

  return (
    <div>
      {loading ? <p>Loading...</p> : <ItemDetail productDetail={productDetail}/>}
      </div>
  )
}

export default ItemDetailContainer