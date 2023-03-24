import React, { useEffect } from "react";
import "../FormPago/formpago.css";
import { useState } from "react";
import emptyCart from "../../assets/img/emptyCart.png";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";
import Swal from "sweetalert2";

const FormPago = ({cart, setCart, handleChange}) => {
  const [precio, setPrecio] = useState(0);
  const [cambio, setCambio] = useState(true);
  const [envio, setEnvio] = useState(0);
  const [total, setTotal] = useState(0)
  const [nombreCliente, setNombreCliente] = useState("")
  const [telefonoCliente, setTelefonoCliente] = useState(0)
  const [emailCliente, setEmailCliente] = useState("")
  const db = getFirestore()
  const comprasCollection = collection(db, 'compras')

  /* Alerta de éxtio */
  const mostrarAlerta = () => {
    Swal.fire({
      icon: 'success',
      text: '¡Compra realizada!',
      timer: 1500
    })
  }

  /* Alerta de error */
  const mostrarError = () => {
    Swal.fire({
      icon: 'error',
      text: 'Hubo un error al procesar los datos',
      timer: 1500
    })
  }

  /* Capturamos el select de "Envíos" */
  const onOptionChangeHandler = (event) => {
    setEnvio(event.target.value)
}

  /*Calculamos el total de la compra*/
  const handlePrice = () => {
    let peso = 0;
    cart.map((item) => {
      peso += item.cantidad * item.precio;
    });
    setPrecio(peso);
  };

  /* Auxiliar */
  const handleChangeHijo = (item, d) => {
    handleChange(item, d);
    setCambio(!cambio);
  };

  /*Renderizamos el total cuando cambien las acciones del form*/
  useEffect(() => {
    handlePrice();
  }, [cambio]);

  /*Eliminamos el producto del carrito*/
  const handleRemove = (id) => {
    const arrayCarrito = cart.filter((item) => item.id !== id);
    setCart(arrayCarrito);
    setCambio(!cambio);
  };

  /*Capturamos la info del formulario y la enviamos */
  const handleSubmit = (e) => {
    e.preventDefault()
    setTotal(precio + envio)
    const compra = {
      cliente: {
        nombre: nombreCliente,
        telefono: telefonoCliente,
        email: emailCliente
      },
      items: cart,
      total: parseInt(precio) + parseInt(envio)
    }

    addDoc(comprasCollection, compra)
    .then((docRef) => {
      mostrarAlerta()
    })
    .catch((e) => {
      mostrarError()
    })
  }

  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                {cart.length === 0 ? (
                  <div className="d-flex flex-column">
                    <img src={emptyCart} className="mx-auto" />
                    <h2 className="text-center p-5">
                      Tu carrito está vacio, master
                    </h2>
                  </div>
                ) :
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Tu carrito</h1>
                          <h6 className="mb-0 text-muted">{cart.length} items</h6>
                        </div>
                        <hr className="my-4" />
                        {cart.map((item) => (
                          <>
                            <div className="row mb-4 d-flex justify-content-between align-items-center" 
                            key={item.id}>
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={item.img}
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{item.marca}</h6>
                                <h5 className="text-black mb-0">{item.nombre}</h5>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn px-2"
                                  onClick={() => handleChangeHijo(item, -1)}> - </button>
                                    <p>{item.cantidad}</p>
                                <button className="btn px-2"
                                  onClick={() => handleChangeHijo(item, +1)}> + </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">${item.precio * item.cantidad}</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted" onClick={() => handleRemove(item.id)}>
                                  X
                                </a>
                              </div>
                            </div>

                            <hr className="my-4" />
                          </>
                        ))}
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to={"/"} className="btn btn-primary btn-block btn-lg"
                            data-mdb-ripple-color="primary"> Volver </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Resumen</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                            <h5 className="text-uppercase">Subtotal</h5>
                            <h5>${precio}</h5>
                        </div>

                        <h5 className="text-uppercase mb-3">Envios</h5>

                        <div className="mb-4 pb-2">
                            <select className="select" onChange={onOptionChangeHandler}>
                            <option value="0">Retiro en local - Gratis</option>
                            <option value="300">Standard - $300</option>
                            <option value="500">Rápido - $500</option>
                            </select>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase">Total</h5>
                            <h5>${parseInt(precio) + parseInt(envio)}</h5>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-column">

                    <div className="card m-3 p-3">
                    <h2 className="text-center">
                        <div className="alert alert-warning">
                        Información de pago
                        </div>
                    </h2>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                            <div className="d-flex flex-row align-items-center">
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-4">
                                        <div className="col">
                                        <div className="form-outline">
                                            <input type="text" value={nombreCliente} 
                                            onChange={(e) => setNombreCliente(e.target.value)}
                                            className="form-control" />
                                            <label className="form-label">Nombre</label>
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className="form-outline">
                                            <input type="number" value={telefonoCliente}
                                            onChange={(e) => setTelefonoCliente(e.target.value)}
                                            className="form-control" />
                                            <label className="form-label">Telefono</label>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" value={emailCliente} 
                                        onChange={(e) => setEmailCliente(e.target.value)}
                                        className="form-control" />
                                        <label className="form-label">Email</label>
                                    </div>

                                    <button type="submit"
                                        className="btn btn-dark btn-block btn-lg"
                                        data-mdb-ripple-color="dark"
                                    >
                                        Finalizar compra
                                    </button>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormPago;
