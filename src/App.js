import React from 'react';
import { menu } from './components/NavBar/menu';
import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemCount } from './components/ItemCount/ItemCount';
import { Item } from './components/Item/Item';

function App() {
  return (
    <>
      <NavBar menu={menu} />
      <ItemListContainer />
      <ItemCount initialValue={0} />
    </>
  );
}

export default App;
