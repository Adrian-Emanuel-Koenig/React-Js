import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { data } from '../../mocks/mockData'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [productDetail, setProductDetail]= useState({})
  const [loading, setLoading]= useState(true)

useEffect(()=>{
data
.then((res)=>setProductDetail(res.find((item)=> item.id === 1)))
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
},[])

  return (
    <div>
      {loading ? <p>Loading...</p> : <ItemDetail productDetail={productDetail}/>}
      </div>
  )
}

export default ItemDetailContainer