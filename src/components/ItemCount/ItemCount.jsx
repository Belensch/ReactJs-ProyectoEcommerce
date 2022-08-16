import {useState} from 'react'

const ItemCount = ({initial=1, stock=10, onAdd}) => {
    const [count, setCount]= useState(initial);

    const handleSumar = () => {
      if (count < stock) {
        setCount (count + 1 ) 
      }
    }
    const handleResta= () =>{ 
      if (count >initial){
        setCount (count - 1 )
      }
    }
    const handleAddToCard= () =>{
      if ( count< stock){
         
        onAdd (count)
    }
  }

     

  return (
    <div className='card-50 '>
        
        <label> {count}</label>
        <br />
        <p>Cantidad</p>
        <button className='btn btn-outline-secondary btn-sm' onClick={handleSumar}>+</button>
        <button className='btn btn-outline-secondary btn-sm'onClick={handleResta}>-</button>
        <button className='btn btn-outline-dark btn-sm'onClick={handleAddToCard}>Agregar al Carrito</button>
        </div>
  )
}

export default ItemCount