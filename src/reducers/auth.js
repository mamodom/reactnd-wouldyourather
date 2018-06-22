import types from '../actions/types';

const INITIAL_STATE = {
  currentUser: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.auth.login:
      return { currentUser: action.id };
    case types.auth.logout:
      return INITIAL_STATE;
    default:
      return state;
  }
};
