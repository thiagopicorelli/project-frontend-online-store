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
    isChecked: false,
    preview: [],
  };

  componentDidMount() {
    this.loadPreview();
  }

  loadPreview = () => {
    const { prodId } = this.props;
    let preview = localStorage.getItem(prodId);
    if (preview !== null) {
      preview = JSON.parse(preview);
      this.setState({
        preview,
      });
    }
  };

  onInputChange = (event) => {
    const { name, checked, type } = event.target;
    const value = type === 'radio' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // eslint-disable-next-line complexity
  checkInputs = () => {
    const { name, email, CPF, phone, address,
      complement, number, city, state, CEP, preview,
    } = this.state;
    const { prodId } = this.props;
    const re = /\S+@\S+\.\S+/;
    if (name.length > 0
      && email.length > 0
      && CPF.length > 0
      && phone.length > 0
      && address.length > 0
      && complement.length > 0
      && number > 0
      && city.length > 0
      && state.length > 0
      && CEP.length > 0
      && re.test(email) === true) {
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
      });
      localStorage.setItem(prodId, JSON.stringify(preview));
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
      isChecked,
      preview,
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
            type="number"
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
            value={ isChecked }
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payment"
            data-testid="visa-payment"
            value={ isChecked }
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payment"
            data-testid="master-payment"
            value={ isChecked }
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payment"
            data-testid="elo-payment"
            value={ isChecked }
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
        <fieldset>
          { preview.map((view) => (
            <fieldset key={ view.name }>
              <p>{view.name}</p>
              <p>{view.email}</p>
              <p>{view.CPF}</p>
              <p>{view.phone}</p>
              <p>{view.address}</p>
              <p>{view.complement}</p>
              <p>{view.number}</p>
              <p>{view.city}</p>
              <p>{view.state}</p>
            </fieldset>
          ))}
        </fieldset>
      </form>
    );
  }
}
BuyerInformationForm.propTypes = {
  prodId: PropTypes.string,
}.isRequired;
export default BuyerInformationForm;
