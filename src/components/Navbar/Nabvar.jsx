import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import Navbar_logo from '../../assets/img/Japan-flag.png'
import { Link } from 'react-router-dom'
import Buscar from '../Buscar/Buscar'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const Nabvar = ({contador, setMostrar}) => {

  const {darkMode, toggleDarkMode} = useContext(ThemeContext)
  const [buscar, setBuscar] = useState("")

  return (
    <>
      <div>
        <nav className={darkMode ? "navbar navbar-expand-lg navbar-dark bg-dark fixed-top" : 
        "navbar navbar-expand-lg navbar-warning bg-warning fixed-top"}>
          <div className="container-fluid">                 
            <a className="navbar-brand" onClick={toggleDarkMode} >
              <img src={Navbar_logo} id="logo" 
              className="d-inline-block align-text-center"/> </a>
              <Link to={"/"} onClick={() => setMostrar(true)}>Ono-Market</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle itemNav" href="#" 
                        id="navbarDropdown" role="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to={`/`} className="dropdown-item">Todas </Link>
                      <Link to={`/categoria/bazar`} className="dropdown-item">Bazar </Link>
                      <Link to={`/categoria/cocina`} className="dropdown-item">Cocina </Link>
                      <Link to={`/categoria/articulos`} className="dropdown-item">Artículos </Link>
                    </ul>
                  </li>
                </ul>
                    <Buscar setBuscar={setBuscar}/>
              </div>

          </div>
            <div className='d-flex icono' style={{alignItems: 'center', verticalAlign: 'middle'}}
              onClick={() => setMostrar(false)}>
              <Link to={`/formPago`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </Link>
              <p style={{color: 'orange', fontSize: 20, margin: 0}}>
                <span>{contador}</span>
              </p>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Nabvar