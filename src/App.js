import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductSearch from './Pages/ProductSearch';
import Cart from './Pages/Cart';
import DetailsCard from './Pages/DetailsCard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ ProductSearch } />
        <Route exact path="/details-card/:id" component={ DetailsCard } />
        <Route exact path="/cart" component={ Cart } />
      </Switch>
    </Router>
  );
}

export default App;
