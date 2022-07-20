import { useState } from 'react'
import logo from './logo.svg'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer'


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
