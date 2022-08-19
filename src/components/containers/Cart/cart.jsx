import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"
import { Card, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"

const Cart = () => {
    const [ id, setId ] = useState('')

    const [formData, setFormData] = useState({

        email:'', 
        name:'', 
        phone:'',
        rEmail:''
    })

    const { cartList, vaciarCarrito, eliminarProducto, precioTotal } = useCartContext()



    // fución para guardar la orden en la base de datos
    const guardarOrden = async (e) => {
        e.preventDefault()
        
        const order = {}
        order.buyer = formData

        order.productos = cartList.map(prod => {
            return {
                product: prod.name,
                id: prod.id,
                price: prod.price
            }
        })
        order.date = new Date()
        order.total = precioTotal()

        // guardar la orden en la base de datos
        const baseDatos = getFirestore()
        const queryOrders = collection(baseDatos, 'orders')
        addDoc(queryOrders, order)
        .then(resp => setId(resp.id))
        .catch(err => console.log(err))
        .finally(()=> setFormData({
                email:'', 
                name:'', 
                phone:'',
                rEmail:''
            })
        )

      

        // actualizar el stock 
         const queryCollectionStock = collection(baseDatos, 'productoss') // apuntar a una collección de firestore

        // filtro para la consulta
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
        .finally(()=> {
            vaciarCarrito()            
        })

        batch.commit()


    }    

    const handleChange = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    

    console.log(formData)


  return (
    <>
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
    <Card className="text-center mx-auto" style={{ width: '10rem' }}>
        <CardHeader> Aun no tienes nada en tu carrito!</CardHeader>
        <button className="btn-outline-light" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}><Link to="/" style={{  color: "white" }}>Ir a comprar</Link> </button>
    </Card>
    :
    
    <div className="row"> 
      <h1> Tu Carrito </h1> 
         <div className="col-8"> 
         {/*id.length > 0 && <h2>El id de la orden es:  {id}</h2> */}
             <div  className="w-100">
              {cartList.map (productos =>(
                <div key={productos.id}>
            <img src= {productos.foto} alt="Foto del producto" className='w-20'/>
            -Nombre del Producto: {productos.name}-Cantidad:{productos.cantidad} -Precio: {productos.price} -Importe: {productos.cantidad *productos.price} - Subtotal: {productos.cantidad * productos.price}
          
            <div><button  className="btn btn-danger"  onClick={ ()=> eliminarProducto (productos.id)} >  Eliminar producto x </button></div>

      </div> 

        ))} 
        </div>

        <div>
            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                    <CardHeader>TOTAL</CardHeader>
        <h6>  { precioTotal() !== 0 && `Precio Total: ${ precioTotal() }`} </h6>
        </Card>
        <button  className="btn-outline-light" onClick={vaciarCarrito} style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>Vaciar carrito</button>
                </div>
            </div>
              <div className="col-4">
                <form 
                    onSubmit={ guardarOrden }
                    className="p-2 w-75 border border-2 border-warning rounded" 
                >
                    <label className="ml-0 alert alert-warning">Formulario </label>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ingrese su Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"                            
                            placeholder="Ingrese su nombre" 
                            onChange={handleChange}
                            value={formData.name}

                        />                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPhone">Telefono</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="phone" 
                            onChange={handleChange}
                            placeholder="Ingrese su teléfono"
                            value={formData.phone}
                        />                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            onChange={handleChange}
                            placeholder="Ingrese su e-mail" 
                            value={formData.email}
                        />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Repetir Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="rEmail"                            
                            placeholder="Enter email" 
                            onChange={handleChange}
                            value={formData.rEmail}

                        />
                    </div>
                    <div className="form-check">
                       
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">COMPRAR</button>

                </form>
            </div>    
        </div>
}
</>
  )
}

export default Cart