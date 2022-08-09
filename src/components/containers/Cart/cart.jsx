import React from 'react'
import { useCartContext } from '../../../context/CartContext'



const Cart = () => {

  const { cartList, vaciarCarrito, eliminarProducto, precioTotal  }= useCartContext ()
  console.log(cartList)
  

  
  return (
    
    <div className="row"> 
      <h1> Tu Carrito </h1> 
         <div className="col-8"> 
             <div  className="w-100">
              {cartList.map (item =>(
                <div key={item.id}>
            <img src= {item.foto} alt="Foto del producto" className='"w-20'/>
            -Nombre del Producto: {item.name}-Cantidad:{item.cantidad} -Precio: {item.price} -Importe: {item.cantidad *item.price} - Subtotal: {item.cantidad * item.price}
          
            <div><button  className="btn btn-danger"  onClick={ ()=> eliminarProducto (item.id)} >  Eliminar producto x </button></div>

      </div> 

        ))} 
        </div>

        <div>
        <h6>  { precioTotal() !== 0 && `Precio Total: ${ precioTotal() }`} </h6>
    <button className='btn btn-danger' onClick={vaciarCarrito}> Vaciar tu carrito</button></div>

    
      </div>
      </div>

  )
}

export default Cart