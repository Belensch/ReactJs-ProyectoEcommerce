import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from "../../ItemList/ItemList"
import Loading from "../../Loading/Loading"





const ItemListContainer = ({saludo}) => {
  const [ productos, setProductos ] = useState([])    // State for products array from database
    const [ loading, setLoading ] = useState(true)    // State for conditional rendering of Loading component

    const {categoriaId} = useParams()    //UseParams hook to get the parameters of the route
    
 
    useEffect (()=>{
      const baseDatos = getFirestore () //trar a firestore
      const queryCollection = collection ( baseDatos, 'productos') //fs p traer todo el listado de todos los productos
      const queryCollectionFilter = categoriaId? query(queryCollection, 
        where('categoria', '==', categoriaId)) : queryCollection
      getDocs (queryCollectionFilter)
      .then (resp => setProductos (resp.docs.map(prod => ({id: prod.id, ...prod.data() } ) ) ) )    //Set products and assign the id to each item
      .catch (err => console.log (err))   // Check for errors in the previous step
      .finally( () => setLoading (false)) //Set loading to false to show ItemList component
    
    },[categoriaId])   //useEffect control on mount and every time categoryId changes
   



  
    
  
  
  return (
      <div>
        {categoriaId && <h3>{ saludo }</h3>}

        <br/>
        <br/>
          
          
              { loading ? <Loading/>
              
                  
                  : 
                  <ItemList productos={productos} />
              }
          
        </div>
      
  )
}

export default ItemListContainer