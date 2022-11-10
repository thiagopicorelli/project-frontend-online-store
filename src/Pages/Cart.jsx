import { Component } from 'react';
import { Route } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <Route exact path="/cart">
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      </Route>
    );
  }
}

export default Cart;
