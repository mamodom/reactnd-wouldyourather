import types from '../actions/types';
export default (state = {}, action) => {
  switch (action.type) {
    case types.users.fetched:
      return action.users;
    case types.questions.answered:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers: {
            ...state[action.user].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    default:
      return state;
  }
};
