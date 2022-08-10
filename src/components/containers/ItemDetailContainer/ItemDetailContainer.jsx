import React from 'react'
import { useEffect, useState } from 'react'
import { useParams}  from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import { getFetch } from '../../../helpers/getFetch'
import ItemDetail from '../../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
 const [ producto, setProducto] =useState({})
 const [ loading, setLoading] = useState (true)

 const {detalleId}=  useParams ()
   
    console.log(detalleId)

useEffect (()=>{
  const baseDatos = getFirestore () //trar a firestore
  const queryProducto = doc ( baseDatos, 'productos', detalleId) //fs p apuntar a un prod especifico
  getDoc (queryProducto)
  .then (resp => setProducto ({id: resp.id, ... resp.data()}))
  .catch(err => console.log(err))
  .finally(() => setLoading(false)) 
},[detalleId])

console.log (producto)


    //vieja consulta al mock
    //useEffect(() => {
      //getFetch(detalleId)
      //.then(respuesta => setProducto(respuesta)) 
      //.finally(()=> setLoading(false) )     
  //}, [])//
        
const Loading =()=>{
  useEffect (()=> { 
   
  })
  return <div><h1>Cargando ... </h1>
  <div className="sk-chase">
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  </div>
</div>
}
  return (
    <div>
       ItemDetailContainer    
            {
                producto.id ?
                    <ItemDetail producto={producto} />
                :
                    <Loading />
            }           

    
    </div>
  )
}

export default ItemDetailContainer