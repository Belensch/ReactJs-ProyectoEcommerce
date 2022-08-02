import React from 'react'
import { useEffect, useState } from 'react'
import { useParams}  from 'react-router-dom'
import { getFetch } from '../../../helpers/getFetch'
import ItemDetail from '../../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
 const [ producto, setproducto] =useState({})
  const {detalleId}=  useParams ()
   
    console.log(detalleId)

    useEffect ( ()=> {
      getFetch (detalleId)
      .then(respuesta => setproducto(respuesta))

    }, [detalleId])
    
  return (
    <div className='border border-2 border-success '>
      ItemDetailContainer
      <ItemDetail producto={producto}/>
        
      { /* <Input/>
          <Intercambiabilidad/>*/}
    </div>
  )
}

export default ItemDetailContainer