import types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.questions.fetched:
      return action.questions;
    default:
      return state;
  }
};
