import React, { useState, useEffect } from "react";
import logo from "../assets/img/OnoMichio_logo.jpg";
import { useParams } from "react-router-dom";
import Item from "./Item/Item";
import Loader from "./Loader/Loader";
import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ handleClick, handleItem }) => {
  const { id } = useParams(0);
  const { categoria } = useParams();
  const [items, setItems] = useState([]);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [itemSeleccionado, setItemSeleccionado] = useState();

  /* Renderizamos los productos con condición */
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (categoria) {
      const q = query(itemsCollection, where("categoria", "==", categoria));
      getDocs(q).then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      getDocs(itemsCollection).then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, [categoria]);

  /* Mostramos el detalle del producto seleccionado */
  const handleDetalles = (p) => {
    setMostrarDetalles(true);
    setItemSeleccionado(p);
  }

  const handleVolver = () => {
    setMostrarDetalles(false);
  }

  return (
    <>
      <div>
        {/* Mensaje de bienvenida */}
        <div
          className="card text-center container d-flex justify-content-center"
          style={{ marginTop: "15px", marginBottom: "5%" }}
        >
          <div className="card-header">
            <img
              src={logo}
              className="card-img-top"
              alt="..."
              style={{ width: "20%", paddingTop: "2%" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Bienvenido a Ono-Market</h5>
            <p className="card-text">¡Vamos a comprar - directo desde Japón!</p>
          </div>
        </div>

        {/* Render de productos */}
        <div className="text-center container py-1">
          <section>
            {!mostrarDetalles ? (
              <div className="d-flex justify-content-center flex-wrap mx-auto">
                {items.length > 0 ? (
                  items.map((p) => (
                    <>
                         <section style={{backgroundColor: "#eee", width: "100%"}}>
                     <Item p={p} handleClick={handleClick} handleDetalles={handleDetalles}/> 
          </section>
                    </>
                  ))
                ) : (
                  <Loader />
                )}
              </div>
            ) : (
              <section style={{backgroundColor: "#eee"}}>
              <div className="container py-5">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="card" style={{borderRadius: "15px"}}>
                      <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light">
                        <img src={itemSeleccionado.img}
                          style={{borderTopLeftRadius: "15px", borderTopRightRadius: "15px"}} className="img-fluid"
                          alt="Laptop" />
                        <a href="#!">
                          <div className="mask"></div>
                        </a>
                      </div>
                      <div className="card-body pb-0">
                        <div className="d-flex justify-content-between">
                          <div>
                            <p><a href="#!" className="text-dark">{itemSeleccionado.nombre}</a></p>
                            <p className="small text-muted">{itemSeleccionado.categoria}</p>
                          </div>
                        </div>
                      </div>
                      <hr className="my-0" />
                      <div className="card-body pb-0">
                        <div className="d-flex justify-content-between">
                          <p><a href="#!" className="text-dark">${itemSeleccionado.precio}</a></p>
                          <p className="text-dark">{itemSeleccionado.marca}</p>
                        </div>
                        <p className="small text-muted">{itemSeleccionado.descripcion}</p>
                      </div>
                      <hr className="my-0" />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                          <a href="#!" className="text-dark fw-bold" onClick={() => handleVolver()}>Volver</a>
                          <button type="button" className="btn btn-primary" onClick={() => handleClick(itemSeleccionado)}>Agregar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;

/*NOTAS 
//////////////////////////////////////////////////
*********Para fetch de items en JSON local*********
//////////////////////////////////////////////////

   const [producto, setProducto] = useState(true)

   const getProductos = () => {
     return new Promise((resolve, reject) => {
    productos.length ? resolve(productos) : reject("No hay productos")
    });
};
  
  useEffect(() => {
    getProductos(productos)
    .then(res => setProducto(res.filter((producto) => producto.id === parseInt(id))))
  }, [id])

//////////////////////////////////////////////////
*********Traer un solo item de Firebase*********
//////////////////////////////////////////////////

  const [items, setItems] = useState()

  useEffect(() => {
    const db = getFirestore()
  const Ref = doc(db, 'items', 'VbsNKpdvdBYnWfYuEvLJ')

  getDoc(Ref).then((snapshot) => {
    if(snapshot.exists()){
      setItems({ id: snapshot.id, ...snapshot.data() })
    }
  })
  }, [])



*/
