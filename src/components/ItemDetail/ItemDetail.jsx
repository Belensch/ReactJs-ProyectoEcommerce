import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
  const[ isCount, setIsCount] = useState (true)
  const{agregarCarrito, cartList}= useCartContext()

//const [toCart, setToCart]= useState (true)

const onAdd= (cant)=> {
    //setToCart(false)
  agregarCarrito ({...producto, cantidad:cant})
  alert (`La cantidad es ${cant}`)
  setIsCount(false)
}
console.log(cartList)

  return (
    <div className='row'>
      <div className="col-md-4 p-1">
        <div className='card w-100 mt-5'>
          <div className='col'>
            <div className="col"></div>
            <img src={producto.foto} alt="Foto del Producto" />
          </div>
          <div className='col'>
            <h3>{ producto.name}</h3>
            <p>Categoria:{producto.categoria}</p>
            <p></p>
            <p>Precio: {producto.price}</p>
          </div>
        </div>
      
      </div>
      <div className="col">
       
      </div>
       
      {isCount ? 
        <ItemCount initial={1} stock={5} onAdd= {onAdd} />
         : 
         <>
         <Link to= {'/cart'}>
         <button className=' btn btn-outline-success'> Ir al carrito: Cart</button>
         </Link>
         <Link to= {'/'}>
         <button className=' btn btn-outline-primary'> Seguir Comprando</button>
         </Link>
         </>
        }
        
        <Link to="/cart"> <button className='btn btn-outline-primary btn-block'> Ir Al Carrito </button></Link>
      
    
    </div>
   
  )
}

export default ItemDetail