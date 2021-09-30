import React from 'react';
import './NavBar.scss';
import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CardWidget/CartWidget';

export const NavBar = ({ menu }) => {
  //console.log(menu);
  const lista = menu.map((elemento, index) => {
    return (
      <a href='https://www.google.com/' key={index}>
        {elemento}
      </a>
    );
  });

  /* Render */
  return (
    <header className='navbar'>
      <a href='https://www.google.com/' className='logo'>
        <img src={logo} alt='imagen' />
      </a>

      <nav className='menu'>
        {lista}
        <button className='buttonLogin'>Login</button>
        <button className='buttonSignUp'>Sign Up</button>
        <CartWidget cantidad={0} />
      </nav>
    </header>
  );
};
