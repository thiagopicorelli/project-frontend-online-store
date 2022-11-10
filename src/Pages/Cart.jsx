import { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  // state = {
  //   title: 'teste teste',
  //   quantity: '',
  //   cartList: [],
  // };

  // componentDidMount() {
  //   // this.getItemsCart();

  // }

  // getItemsCart = async () => {
  //   const response = await getCartItems();
  //   console.log('response', response);
  //   this.setState({ cartList: response,
  //     title: response[0].title,
  //     quantity: response[0].available_quantity });
  // };

  render() {
    const { location } = this.props;

    console.log('location no corrinho', location);
    return (
      <div>

        {
          location.props.cartList.length > 0 ? (
            <div>
              <div>
                <p data-testid="shopping-cart-product-name">
                  {location.props.cartList[0].title}
                </p>
                <p data-testid="shopping-cart-product-quantity">
                  {location.props.cartList.length}
                </p>
              </div>
            </div>
          )
            : (
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </p>
            )
        }

      </div>

    );
  }
}

Cart.propTypes = {
  location: PropTypes.string.isRequired,

};

export default Cart;
