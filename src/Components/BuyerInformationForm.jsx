import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BuyerInformationForm extends Component {
  state = {
    name: '',
    CPF: '',
    email: '',
    phone: '',
    address: '',
    complement: '',
    number: '',
    city: '',
    state: '',
    CEP: '',
    valid: true,
    payment: false,
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  checkInputs = () => {
    const { name, email, CPF, phone, address,
      CEP, payment,
    } = this.state;
    const re = /\S+@\S+\.\S+/;
    if (name.length > 0
      && email.length > 0
      && CPF.length > 0
      && phone.length > 0
      && address.length > 0
      && CEP.length > 0
      && re.test(email) === true
      && payment !== false) {
      this.setState({
        name: '',
        email: '',
        CPF: '',
        phone: '',
        address: '',
        complement: '',
        number: '',
        city: '',
        state: '',
        valid: true,
        payment: false,
      });
      localStorage.setItem('cartProducts', JSON.stringify([]));
    } else {
      this.setState({
        valid: false,
      });
    }
  };

  render() {
    const {
      name,
      email,
      CPF,
      phone,
      address,
      complement,
      number,
      city,
      state,
      CEP,
      valid,
    } = this.state;
    return (
      <form>
        <label htmlFor="buyer-information">
          Informações do Comprador
          <input
            required
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            name="name"
            value={ name }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
            name="CPF"
            value={ CPF }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="Email"
            data-testid="checkout-email"
            name="email"
            value={ email }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
            name="phone"
            value={ phone }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
            name="CEP"
            value={ CEP }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
            name="address"
            value={ address }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="Complemento"
            name="complement"
            value={ complement }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="Número"
            name="number"
            value={ number }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="Cidade"
            name="city"
            value={ city }
            onChange={ this.onInputChange }
          />
          <input
            required
            type="text"
            placeholder="Estado"
            name="state"
            value={ state }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="payment-method">
          Método de Pagamento
          <input
            type="radio"
            name="payment"
            data-testid="ticket-payment"
            value="ticket"
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payment"
            data-testid="visa-payment"
            value="visa"
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payment"
            data-testid="master-payment"
            value="master"
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payment"
            data-testid="elo-payment"
            value="elo"
            onChange={ this.onInputChange }
          />
        </label>
        {!valid && (<p data-testid="error-msg">Campos inválidos</p>) }
        <button
          type="button"
          data-testid="checkout-btn"
          onClick={ this.checkInputs }
        >
          Comprar
        </button>
      </form>
    );
  }
}
BuyerInformationForm.propTypes = {
  prodId: PropTypes.string,
}.isRequired;

export default BuyerInformationForm;
