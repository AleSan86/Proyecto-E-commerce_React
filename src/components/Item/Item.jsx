import React from "react";

const Item = ({ p, handleClick, handleDetalles }) => {

  return (
    <>
      <div className="container py-5" key={p.id}>
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div
                    className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0"
                  >
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img src={p.img} className="w-100" alt={p.nombre} />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(253, 253, 253, 0.15)",
                            }}
                          ></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>{p.nombre}</h5>
                    <div className="d-flex flex-row">
                      <span className="badge bg-success ms-2">{p.detalle}</span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                      {p.marca} - {p.descripcion}
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">${p.precio}</h4>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        onClick={() => handleDetalles(p)}
                      >
                        Detalles
                      </button>
                      <button
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        onClick={() => handleClick(p)}
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="text-center mx-2 d-flex align-items-end alert alert-warning"
        role="alert" key={p.id}
      >
        <div
          className="card-producto col-4 col-md-6 col-sm-12 m-4"
          style={{ width: "18rem" }}
        >
          <img src={p.img} className="card-img-top w-100" />
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                <h5>
                  <span className="badge bg-success ms-2">{p.detalle}</span>
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{
                  backgroundColor: "rgba(251, 251, 251, 0.15)",
                }}
              ></div>
            </div>
          </a>
          <h2 className="card-title mb-3">{p.nombre}</h2>
          <p className="card-text">
            {p.marca} - {p.descripcion}
          </p>
          <h6 className="mb-3">${p.precio}</h6>
          <div className="" role="group">
            <button
              type="button"
              className="btn btn-success btn-circle m-1"
              onClick={() => handleClick(p)}
            >
              Agregar +
            </button>
            <button
              type="button"
              className="btn btn-primary btn-circle m-1"
              onClick={() => handleDetalles(p)}
            >
              Detalle
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Item;
