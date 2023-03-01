import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contacto from './components/Contacto/Contacto';
import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nabvar from './components/Navbar/Nabvar';
import Categoria from './components/Categoria/Categoria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Nabvar />

      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/producto/:id" element={<Item />} />
        <Route exact path='/categoria/:categoriaId' element={<Categoria />} />
      </Routes>
    
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
