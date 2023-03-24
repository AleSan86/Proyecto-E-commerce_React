import React from 'react'
import { useState, useEffect } from 'react'
import './buscar.css'
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'

const Buscar = (props) => {

    const [buscar, setBuscar] = useState("")
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setBuscar(value)
    }
    
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        const db = getFirestore()
        const q = query (
          collection(db, 'items'),
          where('nombre', '==', value)
        )
    
      getDocs(q).then((snapshot) => {
        if(snapshot === 0){
          console.log("No hay resultados")
        }
        setBuscar(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      })
      }, [value])

  return (

    <div>
        <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="text" value={value} 
            onChange={handleChange} placeholder="Buscar" aria-label="Buscar"/>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    </div>
  )
}

export default Buscar