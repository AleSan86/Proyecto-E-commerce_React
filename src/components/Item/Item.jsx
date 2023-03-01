import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from "../../productos.json"

const Item = () => {

  const {id} = useParams();
  const [producto, setProducto] = useState(true)

  const getProductos = () => {
    return new Promise((resolve, reject) => {
    productos.length ? resolve(productos) : reject("No hay productos")
    });
};
  
  useEffect(() => {
    getProductos(productos)
    .then(res => setProducto(res.find((producto) => producto.id === parseInt(id))))
  }, [id])

  return (
    <>
    <div className='text-center container py-1'>
      <section>
      <div className='text-center alert alert-dark' role="alert" >
        <h4 className="mt-2 mb-2"><strong>¡Detalles del producto!</strong></h4>
      </div>
          <div className="d-flex flex-wrap mx-auto">
            {
            <>
              <div className='text-center alert alert-warning' role="alert" >
              <div className="card-producto col-4 col-md-6 col-sm-12 m-4" 
                style={{width: '18rem'}} key={producto.id}>
                <img src={producto.img} className="card-img-top w-100" />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                    <h5><span className="badge bg-success ms-2">{producto.detalle}</span></h5>
                    </div>
                  </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}>
                    </div>
                  </div>
                  </a>
                  <h2 className="card-title mb-3">{producto.nombre}</h2>
                  <p className="card-text">{producto.marca} - {producto.descripcion}</p>
                  <h6 className="mb-3">${producto.precio}</h6>
                  <button type='button' className='btn btn-success btn-circle'>Agregar +</button>
                  <button type='button' className='btn btn-primary btn-circle'>Quitar -</button>           
                </div>
              </div>
            </>
            }
          </div>
      </section>
      </div>
    </>
  )
}

export default Item