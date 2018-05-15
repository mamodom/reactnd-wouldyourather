import types from '../actions/types';
export default (state = {}, action) => {
  switch (action.type) {
    case types.users.fetched:
      return action.users;
    default:
      return state;
  }
};
