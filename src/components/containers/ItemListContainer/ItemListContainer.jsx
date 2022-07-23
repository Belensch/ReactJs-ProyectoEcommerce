import { useState } from "react"
import { useEffect } from "react"

import { getFetch } from "../../../helpers/getFetch"

import ItemCount from "../../ItemCount/ItemCount"

import ItemList from "../../ItemList/ItemList"


const ItemListContainer = ({saludo}) => {
  const [ productos, setProductos ] = useState([])    
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
      getFetch() // mock de una consulta a una api
      .then(respuesta => setProductos(respuesta))    
      .catch( err => console.log(err) )
      .finally(()=> setLoading(false) )
  }, [])

  const onAdd = (cant) => {
      console.log(`La cantidad es:  ${cant}`)
  }
  
  return (
      <div>
          { saludo }
          
              { loading ? 
                  <div><h1>Cargando ...</h1> <div className="sk-chase">
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
</div></div>
                  
                  : 
                  <ItemList productos={productos} />
              }
          
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
          
      </div>
      
  )
}

export default ItemListContainer