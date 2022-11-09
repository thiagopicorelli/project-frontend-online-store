import { Component } from 'react';
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
      <main>
        <header>
          <input type="text" />
        </header>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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
      </main>
    );
  }
}

export default ProductSearch;
