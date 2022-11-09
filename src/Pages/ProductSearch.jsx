import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../Components/ProductCard';

class ProductSearch extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      query: '',
    };
  }

  componentDidMount() {
    this.categoriesAPI();
  }

  requireAPI = async () => {
    const { query } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(null, query);
    this.setState({
      products: results,
    });
  };

  inputChange = ({ target: { value } }) => {
    this.setState({
      query: value,
    });
  };

  categoriesAPI = async () => {
    const result = await getCategories();
    this.setState({
      categories: result,
    });
  };

  render() {
    const {
      categories,
      query,
      products,
    } = this.state;
    return (
      <div>
        <header>
          <input
            data-testid="query-input"
            value={ query }
            name={ query }
            type="text"
            onChange={ this.inputChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.requireAPI }
          >
            Pesquisar
          </button>
        </header>

        <main>
          {
            products.length !== 0
              ? products.map((product) => (
                <div key={ product.id }>
                  <ProductCard
                    title={ product.title }
                    price={ product.price }
                    thumbnail={ product.thumbnail }
                  />
                </div>
              ))
              : (
                <div>
                  <p data-testid="home-initial-message">
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                  <p>
                    Nenhum produto foi encontrado
                  </p>
                </div>
              )
          }
        </main>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <aside>
          {categories.map((category) => (
            <button
              data-testid="category"
              type="button"
              key={ category.id }
            >
              {category.name}
            </button>
          ))}
        </aside>
      </div>
    );
  }
}

export default ProductSearch;
