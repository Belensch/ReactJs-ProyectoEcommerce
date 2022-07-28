import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div className='row'>
      <div className="col">
        <div className='row'>
          <div className='col'>
            <div className="col"></div>
            <img src="{producto.foto}" alt="Foto del Producto" />
          </div>
          <div className='col'>
            <h3>{ producto.name}</h3>
            <p>Categoria:{producto.categoria}</p>
            <p></p>
            <p>Precio: {producto.price}</p>
          </div>
        </div>
      
      </div>
      <div className="col">
        {/* Contador*/}
      </div>
    </div>
  )
}

export default ItemDetail