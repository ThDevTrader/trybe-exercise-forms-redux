import { SET_PERSONAL, SET_PROFESSIONAL } from '../actions/actions';

const INITIAL_STATE = {
  personal: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  professional: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_PERSONAL:
    return {
      ...state,
      personal: action.payload,
    };
  case SET_PROFESSIONAL:
    return {
      ...state,
      professional: action.payload,
    };
  default:
    return state;
  }
}

export default reducer;
