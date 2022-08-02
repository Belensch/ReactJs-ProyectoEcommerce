import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getFetch } from "../../../helpers/getFetch"

import ItemCount from "../../ItemCount/ItemCount"

import ItemList from "../../ItemList/ItemList"


const ItemListContainer = ({saludo}) => {
  const [ productos, setProductos ] = useState([])    
    const [ loading, setLoading ] = useState(true)

    const {categoriaId} = useParams()
    useEffect(()=>{
        if(categoriaId){
      getFetch() // mock de una consulta a una api
      .then(respuesta => setProductos(respuesta.filter(prod=>prod.categoria === categoriaId)))    
      .catch( err => console.log(err) )
      .finally(()=> setLoading(false) )
    } else {
        getFetch() // mock de una consulta a una api
      .then(respuesta => setProductos(respuesta))    
      .catch( err => console.log(err) )
      .finally(()=> setLoading(false) )

    }
  }, [categoriaId])

  const onAdd = (cant) => {
      console.log(`La cantidad es:  ${cant}`)
  }
  
  return (
      <div>
          { saludo }
          
              { loading ? 
                  <div><h1>Cargando ... <div className="sk-chase">
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
</div></h1></div>
                  
                  : 
                  <ItemList productos={productos} />
              }
          
          {/*<ItemCount initial={1} stock={5} onAdd={onAdd} />*/}
          
      </div>
      
  )
}

export default ItemListContainer