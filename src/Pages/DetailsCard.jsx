import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import ProductCard from '../Components/ProductCard';
import { saveCartItems, getCartItems } from '../services/localStorageAPI';
import AvaliationForm from '../Components/AvaliationForm';

class DetailsCard extends Component {
  state = {
    product: [],
  };

  async componentDidMount() {
    await this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getProductById(id);
    this.setState({
      product: response,
    });
  };

  addCartList = (event) => {
    const { target } = event;
    const { product } = this.state;
    const cartList = getCartItems();

    const index = cartList.findIndex((produc) => produc.id === target.id);
    const ERROR = -1;

    if (index !== ERROR) {
      cartList[index].amount += 1;
    } else {
      product.amount = 1;
      cartList.push(product);
    }

    saveCartItems(cartList);
  };

  render() {
    const { product } = this.state;
    const { history, match: { params: { id } } } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ () => (history.push('/cart')) }
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </button>
        <button
          id={ product.id }
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addCartList }
        >
          Adicionar ao Carrinho
        </button>
        {
          product && (
            <ProductCard
              title={ product.title }
              price={ product.price }
              thumbnail={ product.thumbnail }
            />
          )
        }
        <div>
          <AvaliationForm prodId={ id } />
        </div>
      </div>
    );
  }
}

DetailsCard.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default DetailsCard;
