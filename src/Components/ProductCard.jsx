import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, shipping } = this.props;
    const freeShipping = shipping === undefined ? false : shipping.free_shipping;
    return (
      <div data-testid="product">
        <p data-testid="product-detail-name">{ title }</p>
        <p data-testid="product-detail-price">{ price }</p>
        <img data-testid="product-detail-image" alt={ title } src={ thumbnail } />
        { freeShipping && <p data-testid="free-shipping">FRETE GRÁTIS</p> }
      </div>
    );
  }
}
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductCard;
