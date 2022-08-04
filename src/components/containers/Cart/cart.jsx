import React from 'react'
import { useCartContext } from '../../../context/CartContext'



const Cart = () => {

  const { cartList, vaciarCarrito }= useCartContext ()
  console.log(cartList)
  return (
    
    <div>
     <h1> Carrito </h1>
     <ul>
      {cartList.map (item =>(
        <li key={item.id}>
          <div className='w-25'> 
            <img src= {item.foto} alt="Foto del producto" className='"w-25'/> 
            </div>       
          -Nombre del Producto: {item.name}-Cantidad:{item.cantidad} -Precio: {item.price} -Importe: {item.cantidad *item.price}

        </li>
        ))} 
    </ul>
    <button className='btn btn-outline-success' onClick={vaciarCarrito}> Vaciar carrito</button>

    
      </div>
  )
}

export default Cart