import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import React from 'react'
import { useCartContext } from '../../../context/CartContext'


const guardarOrden = async (e) => {
  e.preventDefaul()
  const order = {}
        order.buyer = {email:'bs@gmail.com', name:'Bel', phone:'261111111'}

        order.productos = cartList.map(prod => {
            return {
                product: prod.name,
                id: prod.id,
                price: prod.price
            }
        })
        
        order.total = precioTotal()

 // consulta p/ guardar la orden en la base de datos de firebase
 const baseDatos = getFirestore ()
 const queryOrders = collection (baseDatos, 'orders')
 addDoc (queryOrders, order)
 .then(resp => console.log(resp.id))


}

// actualizar el stock 
const queryCollectionStock = collection(baseDatos, 'productos') // indicar a la collección de firestore

 const queryActulizarStock = query(
     queryCollectionStock,  
     where( documentId() , 'in', cartList.map(it => it.id) )          
 )

const batch = writeBatch(baseDatos)

 await getDocs(queryActulizarStock)
 .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
     stock: res.data().stock - cartList.find(productos => productos.id === res.id).cantidad
 }) ))
 .catch(err => console.log(err))
.finally(()=> vaciarCarrito())

batch.commit()


   



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
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
                </div>
            </div>
              <div className="col-4">
                <form 
                    onSubmit={ guardarOrden }
                    className="p-2 w-75 border border-2 border-warning rounded" 
                >
                    <label className="ml-0 alert alert-warning">Formulario con sus validaciones</label>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"                            
                            placeholder="Ingrese el nombre" 
                        />                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Telefono</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="phone" 
                           
                            placeholder="Ingrese el teléfono"
                        />                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                           
                            placeholder="Enter email" 
                        />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Repetir Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="rEmail"                            
                            placeholder="Enter email" 
                        />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar Pedido de compra</button>

                </form>
            </div>    
        </div>


  )
}

export default Cart