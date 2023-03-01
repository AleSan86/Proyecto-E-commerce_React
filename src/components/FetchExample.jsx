import React, { useState } from 'react'
import productos from "../productos.json"
import { Link } from 'react-router-dom';

const Fetch = () => {

    //Usamos un State para manipular los datos
    const [producto, setProducto] = useState(null);

    return (
        <>
        <div className='text-center alert alert-warning' role="alert" >
            <h4 className="mt-2 mb-2"><strong>¡Nuestro catálogo!</strong></h4>
        </div>
            
        <div className='text-center container py-1'>
            <div className="d-flex flex-wrap mx-auto">
                {
                productos.map( p => (
                <div className="card col-4 col-md-6 col-sm-12 m-4" 
                        style={{width: '18rem'}} key={p.id}>
                    <img src={p.img} className="card-img-top w-100" alt="imagenProducto" />
                        <a href="#!">
                    <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-success ms-2">{p.detalle}</span></h5>
                        </div>
                    </div>
                    <div className="hover-overlay">
                        <div className="mask" 
                            style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}>
                        </div>
                    </div>
                    </a>
                    <h2 className="card-title mb-3">{p.nombre}</h2>
                    <p className="card-text">{p.marca} - {p.descripcion}</p>
                    <h6 className="mb-3">{p.precio}</h6>
                    <Link to={`/producto/${p.id}`}>
                        <button type="button" className='btn btn-secondary btn-sm btn-rounded'>Ver</button>
                    </Link>
                                    
                </div>
                ))
                }
            </div>
        </div>
        </>
    )
}

export default Fetch

//EJEMPLO EN CLASE - Fetch API

    // const handleFetch = () => {

    //     //Fecth petición GET
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     //Obtenemos los datos y lo pasamos a JSON
    //     .then((response) => response.json())
    //     //Recibimos el objeto para imprimirlo en consola
    //     .then(dataJson => {
    //        console.log(dataJson)
    //         //Seteamos los datos en el State
    //         setData(dataJson)
    //     })
    //     .catch(error => console.log(error))
    // }

//   return (
//     <>
//     <div className='text-center container justify-content-center'>
//         <button onClick={handleFetch} className="btn btn-md btn-success"
//         style={{marginTop: '5%', marginBottom: '5%'}}
//         >Ver catálogo</button>
//         {
//             data && 
//             <div>
//                 <h2>{listaProductos.nombre}</h2>
//                 <p>{listaProductos.id}</p>
//                 <p>{listaProductos.marca}</p>
//             </div>
//         }
//     </div>

//     </>
//   )