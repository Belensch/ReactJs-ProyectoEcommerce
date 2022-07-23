import React from 'react'
//import { useParams}  from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const {deralleId} =useParams()
    console.log(detalleId)
  return (
    <div>ItemDetailContainer
        <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer