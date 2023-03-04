import './App.css';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ThemeContext from './components/Context/ThemeContext';
import Nabvar from './components/Navbar/Nabvar';
import Contacto from './components/Contacto/Contacto';
import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categoria from './components/Categoria/Categoria';

function App() {
  const [cart, setCart] = useState([])
  const [darkMode, setDarkMode ] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
      <>
       <BrowserRouter>
        {/* ORDENAR */}
        {/* <Nabvar contador={cart.length}/> */}
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode}}>
          <Nabvar />
        </ThemeContext.Provider>
        {/* <ItemListContainer /> */}

        <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/producto/:id" element={<Item />} />
        <Route exact path='/categoria/:categoriaId' element={<Categoria />} />
      </Routes>
      </BrowserRouter>

      </>
  );
}

export default App;
