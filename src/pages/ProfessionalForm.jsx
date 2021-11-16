import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { setProfessionalAction } from '../redux/actions/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { history, dispatchProData } = this.props;
    dispatchProData(this.state);
    history.push('/formdisplay');
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          label="enviar"
          onClick={ this.handleClick }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    dispatchProData: (state) => dispatch(setProfessionalAction(state)),
  }
);

const mapStateToProps = (state) => (
  {
    professional: state.reducer.professional,
  }
);

ProfessionalForm.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchProData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalForm);
