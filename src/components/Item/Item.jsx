import React from 'react'
import { Card, Col } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link}  from 'react-router-dom'

const Item = ({ prod }) => {
    return (
        <>
        <Col>
        <div style={{ justifyContent: 'center'}} >  
        <Link to= {`/detalle/${prod.id}`}>
            
        <Card className="itemCard mx-auto" style={{ width: '50%', height:'30rem', borderRadius:"15px", justifyContent: 'center'}}> 
        <CardHeader><h3>{prod.name}</h3></CardHeader>
            <Card.Img src={prod.foto} style={{  marginLeft:'0'}} className= {`${prod.categoria} - ${prod.stock}`}/>
            </Card>  
            

            <button className="btn-outline-light" size="lg" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", marginBottom:"60px", marginLeft: "220px", outlineColor:"white" }}>Ver Detalles</button>
            </Link> 
            </div>
             
        </Col>
        </>
    )
}

export default Item