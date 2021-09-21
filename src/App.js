import React from "react";
import { menu } from './components/NavBar/menu';
import './App.scss';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <>
    <NavBar menu={menu}/>
    <ItemListContainer/>
    </>
  );
}

export default App;
