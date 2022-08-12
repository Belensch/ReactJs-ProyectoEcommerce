import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemCount from "../../ItemCount/ItemCount"
import ItemList from "../../ItemList/ItemList"





const ItemListContainer = ({saludo}) => {
  const [ productos, setProductos ] = useState([])    
    const [ loading, setLoading ] = useState(true)

    const {categoriaId} = useParams()
    
 
    useEffect (()=>{
      const baseDatos = getFirestore () //trar a firestore
      const queryCollection = collection ( baseDatos, 'productos') //fs p traer todo el listado de todos los productos
      getDocs (queryCollection)
      .then (resp => setProductos (resp.docs.map(prod => ({id: prod.id, ...prod.data() } ) ) ) )
      .catch (err => console.log (err))   
      .finally( () => setLoading (false))
    
    },[categoriaId])
    console.log(productos)


  const onAdd = (cant) => {
      console.log(`La cantidad es:  ${cant}`)
  }
  const Loading = ()=> {
    useEffect(()=>{
      
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
          { saludo }
          
              { loading ? 
              <Loading/>
                  
                  : 
                  <ItemList productos={productos} />
              }
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
      
  )
}

export default ItemListContainer