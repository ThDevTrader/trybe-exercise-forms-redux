import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { personal, professional } = this.props;
    const { nome, email, cpf, endereco, cidade, estado } = personal;
    const { curriculo, cargo, descricao } = professional;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {' '}
          { nome }
        </div>
        <div>
          Email:
          {' '}
          { email }
        </div>
        <div>
          CPF:
          {' '}
          { cpf }
        </div>
        <div>
          Endereço:
          {' '}
          { endereco }
        </div>
        <div>
          Cidade:
          {' '}
          { cidade }
        </div>
        <div>
          Estado:
          {' '}
          { estado }
        </div>
        <div>
          Currículo:
          {' '}
          { curriculo }
        </div>
        <div>
          Cargo:
          {' '}
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          {' '}
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    personal: state.reducer.personal,
    professional: state.reducer.professional,
  }
);

FormDataDisplay.propTypes = {
  personal: PropTypes.objectOf(PropTypes.string).isRequired,
  professional: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
