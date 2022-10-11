import { collection, doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import ItemDetail from './ItemDetail'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function ItemDetailContainer() {
  const [productDetail, setProductDetail]= useState({})
  const [loading, setLoading]= useState(true)
  const{id} =useParams()

  useEffect(() => {
    const productsCollection = collection(db, "products")
    const referenceDoc = doc(productsCollection, id)
    getDoc(referenceDoc)
    .then((res)=>{
      setProductDetail({
        id:res.id,
        ...res.data()
      })
    })
    .catch((error)=>console.log(error))
    .finally(()=> setLoading(false))
  }, [id])
  
  return (
    <div>
      {loading ? <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>: <ItemDetail productDetail={productDetail}/>}
      </div>
  )
}

export default ItemDetailContainer