import types from './types';
import { _getQuestions, _saveQuestionAnswer } from '../helpers/_DATA';

const questionsFetched = questions => ({
  type: types.questions.fetched,
  questions,
});

export const fetchQuestions = () => dispatch =>
  _getQuestions().then(questions => dispatch(questionsFetched(questions)));

const questionAnswerSaved = (currentUser, questionId, answer) => {
  return {
    type: types.questions.answered,
    user: currentUser,
    questionId,
    answer,
  };
};

export const answerQuestion = (questionId, answer) => (dispatch, getState) => {
  const {
    auth: { currentUser },
  } = getState();

  dispatch(questionAnswerSaved(currentUser, questionId, answer));

  _saveQuestionAnswer({
    authedUser: currentUser,
    qid: questionId,
    answer,
  }).catch(reason => {
    dispatch(fetchQuestions());
  });
};
