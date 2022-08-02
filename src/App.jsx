import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/containers/Cart/cart'
import { useState } from 'react'
import logo from './logo.svg'

import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>     
      <div className="App border border-3 border-danger">

         <NavBar />
         <Routes>
          <Route index path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
         { /*<Route path='/NoFound' element={<NoFound/>}/>  ... crear elemento*/}
          <Route path='*' element={<Navigate to ='/'/>}/>  {/* ruta para todos esos elementos SIN ruta al NOT FOUND o al index en este caso*/}
      
         </Routes>
      
      </div>
    </BrowserRouter>
  )
}

export default App
