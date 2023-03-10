import React from 'react'
import logo from '../assets/img/OnoMichio_logo.jpg'

const ItemListContainer = (props) => {
  return (
    <>
    <div>
      {/* {props.greeting} */}

      <div className="card text-center container d-flex justify-content-center" style={{marginTop: '5%', marginBottom: '5%'}}>
        <div className="card-header" >
          <img src={logo} className="card-img-top" alt="..." style={{width: '20%', paddingTop: '2%'}} />
        </div>
          <div className="card-body">
            <h5 className="card-title">Bienvenido a Ono-Market</h5>
            <p className="card-text">¡Vamos a comprar - directo desde Japón!</p>
            <a href="#" className="btn btn-primary">Empecemos</a>
          </div>
      </div>

    </div>
    </>
  )
}

export default ItemListContainer