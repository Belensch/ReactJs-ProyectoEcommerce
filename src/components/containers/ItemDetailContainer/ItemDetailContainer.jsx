import React from 'react'
import { useEffect, useState } from 'react'
import { useParams}  from 'react-router-dom'
import {  doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from '../../ItemDetail/ItemDetail'
import Loading from '../../Loading/Loading'


const ItemDetailContainer = () => {
 const [ producto, setProducto] =useState({})
 const [ loading, setLoading] = useState (true)

 const {detalleId}=  useParams ()
   
   

useEffect (()=>{
  const baseDatos = getFirestore () 
  const queryProducto = doc ( baseDatos, 'productos', detalleId) // bring 1 product by id
  getDoc (queryProducto)
  .then (resp => setProducto ({id: resp.id, ... resp.data()}))
  .catch(err => console.log(err))
  .finally(() => setLoading(false)) //Show Loading component
},[detalleId])
   
 

  return (
    <>
    <br/>
    {loading ? <Loading/>

    : producto.name == undefined ? <ItemNotFound/> : <ItemDetail producto={producto}/>
  }
    
    </>
  )

}
export default ItemDetailContainer