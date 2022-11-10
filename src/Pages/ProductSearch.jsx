import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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

  categoryId = async (event) => {
    const { target: { id } } = event;
    const response = await getProductsFromCategoryAndQuery(id);
    this.setState({
      products: response.results,
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
                  <Link
                    data-testid="product-detail-link"
                    to={ `/details-card/${product.id}` }
                  >
                    <ProductCard
                      id={ product.id }
                      title={ product.title }
                      price={ product.price }
                      thumbnail={ product.thumbnail }
                      onClick={ this.handleCardClick }
                    />
                  </Link>
                  <button
                    type="button"
                    data-testid="product-add-to-cart"
                  >
                    Adicionar ao Carrinho
                  </button>
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
              name={ category.id }
              id={ category.id }
              data-testid="category"
              type="button"
              key={ category.id }
              onClick={ this.categoryId }
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
