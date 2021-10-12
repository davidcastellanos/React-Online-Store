import React from 'react';
import { menu } from './components/NavBar/menu';
import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
// import { ItemCount } from './components/ItemCount/ItemCount';
// import { Item } from './components/Item/Item';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar menu={menu} />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/productos/:categoryId'>
            <ItemListContainer />
          </Route>
          <Route exact path='/detail/:itemId'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/contacto'>
            <h1>Contacto</h1>
          </Route>

          <Route exact path='/login'>
            <h1>Mi Login</h1>
          </Route>

          <Route exact path='/signup'>
            <h1>Mi Sign Up</h1>
          </Route>

          <Route exact path='/cart'>
            <h1>Mi cart</h1>
          </Route>

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
