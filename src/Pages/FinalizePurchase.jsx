import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BuyerInformationForm from '../Components/BuyerInformationForm';
import { getCartItems } from '../services/localStorageAPI';

class FinalizePurchase extends Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    this.getItemsCart();
  }

  getItemsCart = () => {
    const cartList = getCartItems();
    // console.log('cartList', cartList);
    this.setState({
      cartList,
    });
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
                <img src={ product.thumbnail } alt={ product.title } />
                <p data-testid="shopping-cart-product-name">
                  {product.title}
                </p>
                <p>
                  {
                    product.price.toLocaleString(
                      'pt-br',
                      { style: 'currency', currency: 'BRL' },
                    )
                  }
                </p>
              </div>
            )))
            : (
              <p>
                Seu carrinho está vazio
              </p>
            )
        }
        <BuyerInformationForm />
      </div>
    );
  }
}

export default FinalizePurchase;
