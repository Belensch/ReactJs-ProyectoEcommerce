import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
import { Card } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import CheckoutForm from "../../CheckoutForm/CheckoutForm"
import { setOrder, updateStock } from "../../../helpers/Helpers"


const Cart = () => {
    
    const { cartList, vaciarCarrito, eliminarProducto, precioTotal } = useCartContext()
    const [ id, setId ] = useState('')


    // //Save order function that creates the order information to store in Firestore
    const guardarOrden = async (e,formData) => {
        e.preventDefault()
        
        const order = {}//empty order object
        order.buyer = formData //buyer state set by the form

        order.productos = cartList.map(prod => {//List cartList(array) products and save the properties of interest (product, id, price)
            return {
                product: prod.name,
                id: prod.id,
                price: prod.price
            }
        })
        order.date = new Date()  //Add a date to the order
        order.total = precioTotal() //Add the total price to the order

      

        setOrder (order)
        .then (resp=> setId(resp.id)) //If successful, set order id to show later
        updateStock (cartList, vaciarCarrito) //Update stock of items bought
        // save the order in the database
        const baseDatos = getFirestore()


    }    

   

  return (
    <>
    <br/>
     {/* check if orderId was generated and if so, show */} 
    {id !== '' &&
    <div>
        <Card className="text-center mx-auto" syle={{width: '20rem' , borderRadius:"12px"}}>
        <CardHeader style={{ backgroundColor: "#FF9F50", color: "white"}}>¡COMPRA EXITOSA!</CardHeader>
        <Card.Text> {`Tu numero de orden es: ${id}`}</Card.Text>
        </Card>
        <br/>
    </div>
    }
    {cartList.length === 0?
    <Card className="text-center mx-auto" style={{ width: '30rem' }}>
        <div className="center"><img src="src/img/empty-cart.svg"></img></div>
        <CardHeader><h3>Aun no tienes nada en tu carrito!</h3> </CardHeader>
        <button className="btn-outline-light" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"15px", outlineColor:"white" }}><Link to="/" style={{  color: "white" }}><h4> Ir a comprar</h4></Link> </button>
    </Card>
    :
    
    <div className="row text-center mx-auto"> 
      <h1> Tu Carrito </h1> 
      
         <div className="col-6"> 
             <div  className="20vh">
              {cartList.map (productos =>(
                <div key={productos.id}>
            <img src= {productos.foto} alt="Foto del producto" className='img-fluid'/>
            <Card className=" text-center mx-auto" style={{ width: '50rem' }}> 
            <br/>            Nombre del Producto: {productos.name}
            <br/>            Cantidad:{productos.cantidad}
            <br/>            Precio: {productos.price} 
            <br/>            Importe: {productos.cantidad *productos.price} 
            <br/>            Subtotal: {productos.cantidad * productos.price}
            </Card>
            <Card className="text-center mx-auto" style={{ width: '50rem' }}>
            <button  className="btn btn-danger"  onClick={ ()=> eliminarProducto (productos.id)} style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }} >  Eliminar producto x </button> 
            <button  className="btn btn-danger" onClick={vaciarCarrito} style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>Vaciar carrito</button></Card>
            </div>

      

        ))} 
        </div>

        <div>
            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                    <CardHeader>TOTAL</CardHeader>
        <h6>  { precioTotal() !== 0 && `Precio Total: ${ precioTotal() }`} </h6>
        </Card>
        
                </div>
            </div>
             {/* Formulario(chechoutForm) */} 
              <div>
                
               <CheckoutForm guardarOrden={guardarOrden}/>
            </div>    
        </div>
}
</>
  )
}

export default Cart