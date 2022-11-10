import { Component } from 'react';
import { getCartItems } from '../services/localStorageAPI';

class Cart extends Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    this.getItemsCart();
  }

  getItemsCart = () => {
    const cartList = getCartItems();
    console.log('cartList', cartList);
    this.setState({
      cartList,
    });
  };

  render() {
    const { cartList } = this.state;
    return (
      <div>
        {
          cartList.length > 0 ? (
            <div>
              <div>
                <p data-testid="shopping-cart-product-name">
                  {cartList[0].title}
                </p>
                <p data-testid="shopping-cart-product-quantity">
                  {cartList.length}
                </p>
              </div>
            </div>
          )
            : (
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </p>
            )
        }

      </div>

    );
  }
}

export default Cart;
