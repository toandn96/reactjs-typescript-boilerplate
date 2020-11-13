import React from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './containers/Home';
import Identity from './containers/Identity';

const history = createBrowserHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/identity" component={Identity} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
