import types from '../actions/types';

const INITIAL_STATE = {
  currentUser: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.auth.login:
      return { currentUser: action.id };
    default:
      return state;
  }
};
