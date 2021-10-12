import React from 'react';
import './NavBar.scss';
import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CardWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = ({ menu }) => {
  //console.log(menu);
  // const lista = menu.map((elemento, index) => {
  //   return (
  //     <a key={index}>
  //       {elemento}
  //     </a>
  //   );
  // });

  /* Render */
  return (
    <header className='navbar'>
      <NavLink exact to='/' className='logo'>
        <img src={logo} alt='imagen' />
      </NavLink>

      <nav className='menu'>
        <NavLink activeClassName={'activeLink'} exact to='/'>
          Inicio
        </NavLink>
        <NavLink activeClassName={'activeLink'} exact to='/productos/camisas'>
          Camisas
        </NavLink>
        <NavLink activeClassName={'activeLink'} exact to='/productos/jeans'>
          Jeans
        </NavLink>
        <NavLink activeClassName={'activeLink'} exact to='/productos/zapatos'>
          Zapatos
        </NavLink>

        <NavLink activeClassName={'activeLink'} exact to='/contacto'>
          Contacto
        </NavLink>

        <NavLink exact to='/login'>
          <button className='buttonLogin'>Login</button>
        </NavLink>

        <NavLink exact to='/signup'>
          <button className='buttonSignUp'>Sign Up</button>
        </NavLink>
        <Link to='/cart'>
          <CartWidget cantidad={0} />
        </Link>
      </nav>
    </header>
  );
};
