import React from 'react'
import productos from "../../productos.json"
import "../Productos/productos.css"
import { Link } from 'react-router-dom';

const FetchProductos = () => {
  
  return (
    <>
    <div className='text-center alert alert-warning' role="alert" >
        <h4 className="mt-2 mb-2"><strong>¡Nuestro catálogo!</strong></h4>
    </div>

    <section>  
    <div className='text-center container py-1'>
        <div className="d-flex flex-wrap mx-auto">
            {
            productos.map( p => (
            <div className="card-producto col-4 col-md-6 col-sm-12 m-4" 
                     key={p.id}>
                <img src={p.img} className="card-img-top w-100 image-box" />
                <a href="#!">
                    <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-dark ms-2">{p.detalle}</span></h5>
                        </div>
                    </div>
                </a>
                    <h2 className="card-title mb-3">{p.nombre}</h2>
                    <p className="card-text">{p.marca} - {p.descripcion}</p>
                    <h6 className="mb-3">{p.precio}$</h6>
                <div className="btn-group" role="group">
                    <Link to={`/producto/${p.id}`}>
                        <button type="button" className='btn-card btn-secondary btn-sm btn-rounded'>Ver detalle</button>
                    </Link>
                    <a>
                        <button type="button" className='btn-card btn-success btn-sm btn-rounded'>Agregar +</button>       
                    </a>
                </div>
            </div>
            ))
            }
        </div>
    </div>
    </section>  
    </>
)

}

export default FetchProductos