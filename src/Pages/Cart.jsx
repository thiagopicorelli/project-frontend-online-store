import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCartItems, saveCartItems } from '../services/localStorageAPI';

class Cart extends Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    this.getItemsCart();
  }

  getItemsCart = () => {
    const cartList = getCartItems();
    this.setState({
      cartList,
    });
  };

  removeItemFromCart = ({ target }) => {
    const { cartList } = this.state;
    const index = cartList.findIndex((product) => product.id === target.id);
    cartList.splice(index, 1);
    this.setState({ cartList });
    saveCartItems(cartList);
  };

  incrementItemToCart = async ({ target }) => {
    const { cartList } = this.state;
    const index = cartList.findIndex((product) => product.id === target.id);
    cartList[index].amount += 1;
    this.setState({ cartList });
    saveCartItems(cartList);
  };

  decreaseItemToCart = ({ target }) => {
    const { cartList } = this.state;
    const index = cartList.findIndex((product) => product.id === target.id);
    cartList[index].amount -= 1;
    if (cartList[index].amount <= 0) {
      cartList[index].amount = 1;
    }
    this.setState({ cartList });
    saveCartItems(cartList);
  };

  render() {
    const { cartList } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        {
          cartList.length > 0 ? (
            cartList.map((product, index) => (
              <div key={ index }>
                <p data-testid="shopping-cart-product-name">
                  {product.title}
                </p>
                <button
                  id={ product.id }
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ this.decreaseItemToCart }
                >
                  -
                </button>
                <span
                  data-testid="shopping-cart-product-quantity"
                >
                  { product.amount }
                </span>
                <button
                  id={ product.id }
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ this.incrementItemToCart }
                >
                  +
                </button>
                <button
                  id={ product.id }
                  type="button"
                  data-testid="remove-product"
                  onClick={ this.removeItemFromCart }
                >
                  remove
                </button>
              </div>
            )))
            : (
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </p>
            )
        }
        <Link to="/finalizepurchase" data-testid="checkout-products">Comprar</Link>
      </div>
    );
  }
}

export default Cart;
