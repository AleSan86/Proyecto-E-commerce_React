import './App.css';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ThemeContext from './components/Context/ThemeContext';
import Nabvar from './components/Navbar/Nabvar';
import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import FormPago from './components/FormPago/FormPago'
import Swal from "sweetalert2";

function App() {
  const [cart, setCart] = useState([])
  const [item, setItem] = useState([])
  const [items, setItems] = useState([])
  const [advertencia, setAdvertencia] = useState(false)
  const [mostrar, setMostrar] = useState(true)
  const [darkMode, setDarkMode ] = useState(true)
  const toggleDarkMode = () => {setDarkMode(!darkMode)}

  /*Validamos que el producto no exista en el carrito
  de lo contrario mostramos un alert*/
  const handleClick = (item) => {
    let isPresent = false
    cart.forEach((producto) => {
      if(item.id === producto.id)
      isPresent = true
    })
    if(isPresent){
      setAdvertencia(true)
      mostrarError()
      return 
    }
    setCart([...cart, item])
  }

  /* Seteamos el mensaje de error */
  const mostrarError = () => {
    Swal.fire({
      icon: 'error',
      text: 'Este producto ya se encuentra en su carrito',
      timer: 1500
    })
  }

  /*Trabajamos con las acciones de los botones */
  const handleChange = (item, d) => {
    let i = -1
    let is = -1
    cart.forEach((data, indice) => {
      if(data.id === item.id)
        i = indice;
        is = data.stock
    })

    const tempArray = cart
    tempArray[i].cantidad += d
    if(tempArray[i].cantidad === 0)
      tempArray[i].cantidad = 1
    if(tempArray[i].cantidad >= tempArray[i].stock)
      tempArray[i].cantidad = tempArray[i].stock
  }

  const handleItem = (item) => {
    setItems(item)
  }

  return (
    <>
       <BrowserRouter>
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode}}>
          <Nabvar contador={cart.length} setMostrar={setMostrar} />
        </ThemeContext.Provider>

        <Loader />

        <Routes>
          {/* Muestro por defecto el ItemListContainer */}
          <Route exact path="/" element={<ItemListContainer handleClick={handleClick} item={item} handleItem={handleItem}/>}  />
          <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route exact path="/formPago" element={<FormPago cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route exact path="/producto/:id" element={item.length > 0 && <Item item={item} handleItem={handleItem} />}  />
        </Routes>

      </BrowserRouter>

      </>
  );
}

export default App;
