import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProductSearch from './Pages/ProductSearch';
import Cart from './Pages/Cart';
import DetailsCard from './Pages/DetailsCard';
import FinalizePurchase from './Pages/FinalizePurchase';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ ProductSearch } />
      <Route exact path="/details-card/:id" component={ DetailsCard } />
      <Route exact path="/cart" component={ Cart } />
      <Route exact path="/finalizepurchase" component={ FinalizePurchase } />
    </Switch>
  );
}

export default App;
