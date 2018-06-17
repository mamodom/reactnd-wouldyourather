import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Auth from './pages/Auth';
import Home from './pages/Home';
import QuestionDetails from './pages/QuestionDetails';
import Foo from './pages/Foo';

import reducer from './reducers';
import enhancer from './enhancer';

const store = createStore(reducer, {}, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/signin" component={Auth} />
            <Route exact path="/" component={Home} />
            <Route path="/questions/:questionId" component={QuestionDetails} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
