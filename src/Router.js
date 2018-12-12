import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Fallback from './containers/Fallback';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/:id" component={About} />
        <Route component={Fallback} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
