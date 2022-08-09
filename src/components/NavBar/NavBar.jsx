import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { Link, NavLink}  from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const NavBar = () => {
  const { cantidadTotal} = useCartContext ()
  return (
    
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <Link to='/' className="nav-link active" aria-current="page" href="#"><div>
      <img src='src/img/logo.png' alt="Logo La cueva de Gollum" className='w-25'/>
      </div></Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#"></a>
    </li>
    <li className="nav-item dropdown me-2">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Mercado de Pulgas
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><NavLink 
        to= "/categoria/libros" 
        className={({isActive})=>isActive ? 'boton-sombra' : 'boton'
        }>
            <p className="dropdown-item" href="#">Libros</p></NavLink></li>
        <li><NavLink 
        to= "/categoria/figuras" 
        className="dropdown-item" href="#">Figuras</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><Link to= '/cart' className="dropdown-item" href="#">algo mas...</Link></li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled">Proximamente</a>
    </li>
  </ul>
  <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Que estas buscando???" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Buscar</button>
  </form>
  <Link to= '/cart'className="navbar-brand" href="#">
  {cantidadTotal() !== 0 && cantidadTotal()}
  <CartWidget />
  </Link>
</div>
</div>
</nav>
</div>
)
}

export default NavBar