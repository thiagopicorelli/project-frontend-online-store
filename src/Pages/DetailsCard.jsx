import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import ProductCard from '../Components/ProductCard';
import { addCart } from '../services/localStorageAPI';

class DetailsCard extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getProductById(id);
    this.setState({
      product: response,
    });
  };

  addCartList = () => {
    const {
      product,
    } = this.state;
    const result = addCart(product);
    console.log(result);
  };

  render() {
    const { product } = this.state;
    const { history } = this.props;
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
      </div>
    );
  }
}

DetailsCard.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default DetailsCard;
