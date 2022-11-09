import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductSearch from './Pages/ProductSearch';
import Cart from './Pages/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ ProductSearch } />
        <Route exact path="/cart" component={ Cart } />
      </Switch>
    </Router>
  );
}

export default App;
