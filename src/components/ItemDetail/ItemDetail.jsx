import React, { useState } from 'react'
import { ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
  const[ isCount, setIsCount] = useState (true)
  const{agregarCarrito}= useCartContext() // Consuming a function of context



const onAdd= (cant)=> {
   
  agregarCarrito ({...producto, cantidad:cant})
  alert (`La cantidad es ${cant}`)
  setIsCount(false) //Set state for conditional rendering
}


  return (
    <>
    <Container>

      <Card className="text-center mx-auto" style={{ width: '40rem'}}>
        <Row>
          <Col>
          <img src={producto.foto} alt="Foto del Producto"  width="330" height="330" style={{ padding: '15px' }} />
          
          </Col>
          <Col style={{ marginRight: '20px' }}>

          <br/>
          <div> <h2>{producto.name}</h2></div>
          <div>{producto.detalle}</div>
          <div><h6>Stock: {producto.stock}</h6></div>
          <div style={{ marginTop: '5px' }}>{`Precio: ${producto.price}`}</div>
          <br/>

          {isCount ? 

<ItemCount initial={1} stock={producto.stock} onAdd= {onAdd} />
:
          <ButtonGroup>
            <button className="btn btn-sm" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", margin:"5px", outlineColor:"white" }}>
              <Link style={{  color: "white" }} to="/">Seguir Comprando</Link></button>
              <button className="btn btn-sm" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", margin:"5px", outlineColor:"white" }}>
              <Link style={{  color: "white" }} to="/cart">Terminar Compra</Link></button>
          </ButtonGroup>
          
          }
         <br/>

          </Col>
        </Row>
      </Card>
    </Container>

    </>
   
  )
}

export default ItemDetail