import {useState} from 'react'
import { ButtonGroup, Card } from 'react-bootstrap';

const ItemCount = ({initial=1, stock=10, onAdd}) => { //Destructuring of props, initializig default values
    const [count, setCount]= useState(1); //State for count value. 1 by default

    const handleSumar = () => {//Count addition handler
    count < stock ? setCount ( count + 1) : alert(`No hay stock suficiente, el stock actual es: ${stock}`)
    }

    const handleResta= () =>{ //Count substraction handler
      if (count >initial){
        setCount (count - 1 )
      }
    }
    const handleAddToCard= () =>{
      
         
        onAdd (count)
    
  }

     

  return (
    <>
    <style type='text/css'>
       {`
            .btn-count {
                background-color: #FF9F50;
                color: white;
                font-weight: bold;
                border-color: #EF5C18;
            }
            .btn-carrito {
                background-color: #EF5C18;
                color: white;
            }
            .btn-count:hover {
                color: red;
            }
            .btn-carrito:hover {
                color: #FDCC9B;
            }
            `}

            </style>
            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
              <Card.Header>
              <label> {count}</label>
              </Card.Header>
              <ButtonGroup>

              <button className="btn btn-count btn-lg" onClick={handleResta}> - </button>
              <button className="btn btn-count btn-lg" onClick={handleSumar}> + </button>
              
              </ButtonGroup>

              <button className="btn btn-carrito btn-sm" onClick={handleAddToCard}>Agregar al carrito</button>

            </Card>
    
    
        </>
  )
}

export default ItemCount