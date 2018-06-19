import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { connectRouter, ConnectedRouter } from 'connected-react-router';

import Auth from './pages/Auth';
import Home from './pages/Home';
import QuestionDetails from './pages/QuestionDetails';

import reducer from './reducers';
import createEnhancer from './enhancer';

const history = createBrowserHistory();
const enhancer = createEnhancer(history);

const store = createStore(connectRouter(history)(reducer), {}, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/signin" component={Auth} />
            <Route exact path="/" component={Home} />
            <Route path="/questions/:questionId" component={QuestionDetails} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
