import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import Auth from './pages/Auth';
import Home from './pages/Home';
import QuestionDetails from './pages/QuestionDetails';

import createStore from './store';

const history = createBrowserHistory();

const store = createStore(history);

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
