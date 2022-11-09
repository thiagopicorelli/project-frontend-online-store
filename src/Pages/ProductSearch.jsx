import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class ProductSearch extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categoriesAPI();
  }

  categoriesAPI = async () => {
    const result = await getCategories();
    this.setState({
      categories: result,
    });
  };

  render() {
    const {
      categories,
    } = this.state;
    return (
      <div>
        <header>
          <input type="text" />
        </header>

        <main>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
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
