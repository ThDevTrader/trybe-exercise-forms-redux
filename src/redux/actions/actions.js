export const SET_PERSONAL = 'SET_PERSONAL';
export const SET_PROFESSIONAL = 'SET_PROFESSIONAL';

export const setPersonalAction = (payload) => (
  {
    type: SET_PERSONAL,
    payload,
  }
);

export const setProfessionalAction = (payload) => (
  {
    type: SET_PROFESSIONAL,
    payload,
  }
);
