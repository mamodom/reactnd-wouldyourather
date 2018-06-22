import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import Auth from './pages/Auth';
import Home from './pages/Home';
import QuestionDetails from './pages/QuestionDetails';
import AddQuestion from './pages/AddQuestion';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';

import createStore from './store';

const history = createBrowserHistory();

const store = createStore(history);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/signin" component={Auth} />
        <Route path="/" exact component={Home} />
        <Route path="/questions/:questionId" component={QuestionDetails} />
        <Route path="/add" exact component={AddQuestion} />
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
