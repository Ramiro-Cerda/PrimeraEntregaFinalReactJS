import React from 'react';
import {Button} from '@material-ui/core';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar />
      <CartWidget />
    </div>
  );
}

export default App;
