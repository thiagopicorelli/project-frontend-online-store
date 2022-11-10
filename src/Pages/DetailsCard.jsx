import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from '../Components/ProductCard';

class DetailsCard extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getProductsFromCategoryAndQuery(id);
    // Preciso filtrar aqui o produto que deve ser setado no state e renderizado
    const toFilter = response.results;
    console.log(toFilter);
    const filtered = toFilter.filter((e) => e.id === id);
    console.log(filtered);
    console.log(response.results);
    this.setState({
      products: filtered,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Route exact path="/details-card/:id">
        <button type="button" onClick={ <Redirect to="/cart" /> }>
          Carrinho de Compras
        </button>
        {
          products && products.map((product) => (
            <div key={ product.id }>
              <ProductCard
                title={ product.title }
                price={ product.price }
                thumbnail={ product.thumbnail }
              />
            </div>
          ))
        }
      </Route>
    );
  }
}

DetailsCard.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default DetailsCard;
