import React from 'react'
import { useEffect, useState } from 'react'
import { useParams}  from 'react-router-dom'
import { getFetch } from '../../../helpers/getFetch'
import ItemDetail from '../../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
 const [ producto, setproducto] =useState({})
 const [ loading, setLoading] = useState (true)

 const {detalleId}=  useParams ()
   
    console.log(detalleId)

    useEffect ( ()=> {
      if (detalleId){
        getFetch ()
        .then(respuesta => setproducto(respuesta))
        .catch( err => console.log(err) )
        .finally(()=> setLoading(false) )

      } else {
        getFetch() 
      .then(respuesta => setproducto(respuesta))    
      .catch( err => console.log(err) )
      .finally(()=> setLoading(false) )
      
      
      }
    }, [detalleId])
    
const Loading =()=>{
  useEffect (()=> {
    return ()=> console.log ("desmontado del loadin")
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
      { loading ?
      <Loading/>
      : 
          <ItemDetail producto={producto}/>
    }
      
    
    </div>
  )
}

export default ItemDetailContainer