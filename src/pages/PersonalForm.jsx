import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { setPersonalAction } from '../redux/actions/actions';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { history, dispatchPersonData } = this.props;
    dispatchPersonData(this.state);
    history.push('/professionalform');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <fieldset>
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          value={ cidade }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ this.handleClick }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    dispatchPersonData: (state) => dispatch(setPersonalAction(state)),
  }
);

const mapStateToProps = (state) => (
  {
    personal: state.reducer.personal,
  }
);

PersonalForm.propTypes = {
  dispatchPersonData: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(String).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
