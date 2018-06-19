import { createStore } from 'redux';

import reducer from './reducers';
import createEnhancer from './enhancer';
import { connectRouter } from 'connected-react-router';

export default history => {
  const enhancer = createEnhancer(history);
  const rootReducer = connectRouter(history)(reducer);

  return createStore(rootReducer, {}, enhancer);
};
