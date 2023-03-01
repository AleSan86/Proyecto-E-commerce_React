import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import productos from "../../productos.json"

const Categoria = () => {
    
     const {categoriaId} = useParams();
     const [producto, setProducto] = useState([{}])
     let resultado = []
     
    const getProductos = () => {
        console.log(categoriaId)
        return new Promise((resolve, reject) => {
          productos.length ? resolve(resultado = productos)
          : reject("No hay productos")
         });
    };

    useEffect(() => {
      getProductos()
      setProducto(resultado.filter(item => item.categoria === parseInt(categoriaId)))
      }, [categoriaId])
        
  return (
    <>
        <section>  
        <div className='text-center alert alert-dark' role="alert" >
          <h4 className="mt-2 mb-2"><strong>Categorias</strong></h4>
        </div>
          <div className='text-center container py-1'>
              <div className="d-flex flex-wrap mx-auto">
                  {
                  producto.map( p => (
                    <div className="card-producto col-4 col-md-6 col-sm-12 m-4" key={p.id}>
                      <img src={ p.imagen } className="card-img-top w-100 image-box" />
                      <a href="#!">
                          <div className="mask">
                              <div className="d-flex justify-content-start align-items-end h-100">
                                <h5><span className="badge bg-dark ms-2">{p.detalle}</span></h5>
                              </div>
                          </div>
                      </a>
                          <h2 className="card-title mb-3">{p.nombre}</h2>
                          <p className="card-text">{p.marca} - {p.descripcion}</p>
                          <h6 className="mb-3">${p.precio}</h6>
                  </div>
                ))
              }
            </div>
          </div>
        </section>


    </>

  )
}

export default Categoria