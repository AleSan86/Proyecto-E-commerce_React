import React from 'react'

const Loader = () => {
    
  return  (
    <>
        <div style={{color: "yellow"}}>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="spinner"></span>
                </div>
            </div>
            <p>Cargando...</p>
        </div>
    </>

  )
}

export default Loader