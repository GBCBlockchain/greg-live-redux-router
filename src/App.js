import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from "./redux"
import Router from "./Router";
import StateTree from './containers/stateTree'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
        <StateTree />
      </Provider>
    );
  }
}

export default App;
