import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import ProductCard from '../Components/ProductCard';

class DetailsCard extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getProductById(id);
    this.setState({
      products: response,
    });
  };

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
            <ProductCard
              title={ products.title }
              price={ products.price }
              thumbnail={ products.thumbnail }
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
