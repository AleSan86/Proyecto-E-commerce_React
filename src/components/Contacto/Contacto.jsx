import React from 'react'

const Contacto = () => {
  return (
    <>
    <section>  
        <div className='text-center alert alert-dark' role="alert" >
          <h4 className="mt-2 mb-2"><strong>Contacto</strong></h4>
        </div>
          <div className='text-center container py-1'>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

          </div>
      </section>
    </>
  )
}

export default Contacto