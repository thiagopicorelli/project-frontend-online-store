import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductSearch from './Pages/ProductSearch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ ProductSearch } />
      </Switch>
    </Router>
  );
}

export default App;
