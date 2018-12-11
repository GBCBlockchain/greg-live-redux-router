import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={fallback} />
      </Switch>
    </BrowserRouter>
  )
}

const fallback = () => {
  return (
    <h1>404!</h1>
  )
}

export default Router;
