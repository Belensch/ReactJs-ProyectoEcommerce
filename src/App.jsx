import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      
      <ItemListContainer saludo={'Hola Bienvenido!'}/>
      
    </div>
    
  )
}

export default App
