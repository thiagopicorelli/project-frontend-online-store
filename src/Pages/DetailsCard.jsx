import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class DetailsCard extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getProductById(id);
    this.setState({
      products: response,
    });
  }

  render() {
    const { products } = this.state;
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
        {
          products && (
            <div>
              <p data-testid="product-detail-name">{ products.title }</p>
              <p data-testid="product-detail-price">{ products.price }</p>
              <img
                src={ products.thumbnail }
                alt={ products.title }
                data-testid="product-detail-image"
              />
            </div>
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
