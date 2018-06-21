import types from './types';
import {
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from '../helpers/_DATA';
import { push } from 'connected-react-router';

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
  }).catch(() => {
    dispatch(fetchQuestions());
  });
};

const questionAdded = question => ({
  type: types.questions.added,
  question,
});

export const addQuestion = ({ optionOneText, optionTwoText }) => async (
  dispatch,
  getState
) => {
  const {
    auth: { currentUser: author },
  } = getState();

  const question = await _saveQuestion({
    optionOneText,
    optionTwoText,
    author,
  });

  dispatch(questionAdded(question));
  dispatch(push('/'));
};
