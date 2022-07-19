import { useState } from 'react'
import logo from './logo.svg'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      

      
      <ItemListContainer saludo={'Hola! Soy Belen Schmid.  Bienvenido!'}/>
      
    </div>
    
  )
}

export default App
