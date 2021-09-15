import React from "react";
import './App.scss';
import { menu } from './components/NavBar/menu';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <NavBar menu={menu}/>
  );
}

export default App;
