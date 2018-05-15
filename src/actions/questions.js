import types from './types';
import { _getQuestions } from '../helpers/_DATA';

const questionsFetched = questions => ({
  type: types.questions.fetched,
  questions,
});

export const fetchQuestions = () => dispatch =>
  _getQuestions().then(questions => dispatch(questionsFetched(questions)));
