import {useState} from 'react'

const ItemCount = ({initial=1, stock=10, onAdd}) => {
    const [count, setCount]= useState(1);
    const handleSumar = () => {
      if (count < stock) {
        setCount (count + 1 ) 
      }
    }
    const handleResta= () =>{ 
      if (count >1){setCount (count - 1 )
      }
    }
    const handleAddToCard= () =>{
      onAdd(count)
    }

     

  return (
    <div className='card w-10 '>
        
        <label> {count}</label>
        <br />
        <button className='btn btn-outline-secondary btn-sm' onClick={handleSumar}>+</button>
        <button className='btn btn-outline-secondary btn-sm'onClick={handleResta}>-</button>
        <button className='btn btn-outline-dark btn-sm'onClick={handleAddToCard}>Agregar al Carrito</button>
        </div>
  )
}

export default ItemCount