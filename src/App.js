import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Auth from './pages/Auth';
import reducer from './reducers';
import enhancer from './enhancer';

const store = createStore(reducer, {}, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
  }
}

export default App;
