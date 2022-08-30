import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Item from '../Item/Item'


const ItemList = ({productos}) => {
  return (
    <> 
    <Container>
      <Row md={2}>
      
    
{    productos?.map( prod=> <Item key= {prod.id} prod={prod}/>)}

    
    </Row>
    </Container>
    </>
  )
}

export default ItemList