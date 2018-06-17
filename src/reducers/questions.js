import types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.questions.fetched:
      return action.questions;
    case types.questions.answered:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: [
              ...state[action.questionId][action.answer].votes,
              action.user,
            ],
          },
        },
      };
    default:
      return state;
  }
};
