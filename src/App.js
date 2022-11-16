import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProductSearch from './Pages/ProductSearch';
import Cart from './Pages/Cart';
import DetailsCard from './Pages/DetailsCard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ ProductSearch } />
      <Route exact path="/details-card/:id" component={ DetailsCard } />
      <Route exact path="/cart" component={ Cart } />
    </Switch>
  );
}

export default App;
