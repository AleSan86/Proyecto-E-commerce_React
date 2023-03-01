import './App.css';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import Nabvar from './components/Navbar/Nabvar';

function App() {
  const [cart, setCart] = useState([])

  return (
      <>
      {/* <Nabvar contador={cart.length}/> */}
      <ItemListContainer />

      </>
  );
}

export default App;
