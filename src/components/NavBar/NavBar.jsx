import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { Link, NavLink}  from 'react-router-dom'

const NavBar = () => {
  return (
    
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link to= '/cart'>  <a className="navbar-brand" href="#"><CartWidget /></a> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to='/'> <a className="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mercado de Pulgas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink 
            to= "/categoria/libros" 
            className={({isActive})=>isActive ? 'boton-sombra' : 'boton'
            }>
                <a className="dropdown-item" href="#">Libros</a></NavLink></li>
            <li><NavLink 
            to= "/categoria/figuras" 
            className={({isActive})=>isActive ? 'boton-sombra' : 'boton'
            }> 
            <a className="dropdown-item" href="#">Figuras</a></NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to= '/cart'> <a className="dropdown-item" href="#">algo mas...</a></Link></li>
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
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
